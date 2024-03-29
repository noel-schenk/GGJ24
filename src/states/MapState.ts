import { StoreApi, UseBoundStore, create } from "zustand";
import { Character, Direction, Player, Tiles } from "../types";
import { vec2 } from "gl-matrix";

const MapState = {
  dt: 0,
  map: {
    haveMap: false,
    collisions: new Map<string, number>(),
    characters: new Map<string, Character>(),
  },
  tiles: [] as Tiles[],
  player: {
    direction: Direction.down,
    moveDirection: undefined,
    position: vec2.fromValues(1, 0),
  } as Player,
};

type State = typeof MapState;

const createSetter = (set: any) => (key: keyof State, value: any) => {
  set((state: any) => ({ ...state, [key]: value }));
};

interface Store extends State {
  set: (key: keyof State, value: any) => void;
  get: <T extends keyof State>(key: T) => State[T];
  subscribe: (key: keyof State, callback: (value: any) => void) => () => void;
}

const basicGlobalState = create<Store>((set, get, api) => ({
  ...MapState,
  set: createSetter(set),
  get: (key) => get()[key],
  subscribe: (key, callback) => {
    const listener = (state: State, prevState: State) => {
      if (state[key] === prevState[key]) return;
      callback(state[key]);
    };
    return api.subscribe(listener);
  },
}));

type ExtendedStore = Omit<UseBoundStore<StoreApi<Store>>, "subscribe"> & {
  (): Store;
  set: (key: keyof State, value: any) => void;
  get: <T extends keyof State>(key: T) => State[T];
  subscribe: (key: keyof State, callback: (value: any) => any) => void;
  oldSubscribe: (
    listener: (state: Store, prevState: Store) => void
  ) => () => void;
};

export const useMapState = basicGlobalState as any as ExtendedStore;
useMapState.oldSubscribe = basicGlobalState.subscribe;

useMapState.set = (key: keyof State, value: any) =>
  useMapState.setState({ [key]: value });
useMapState.get = <T extends keyof State>(key: T) =>
  useMapState.getState()[key];
useMapState.subscribe = (key: keyof State, callback: (value: any) => any) => {
  useMapState.oldSubscribe((state, prevState) => {
    if (state[key] === prevState[key]) return;
    callback(state[key]);
  });
};

export default useMapState;
