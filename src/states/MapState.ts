import { StoreApi, UseBoundStore, create } from "zustand";
import { CharacterResponse, Emotion, Player, Tiles } from "../types";
import { vec2 } from "gl-matrix";
import { createDummyTile } from "../components/Tile/Tile";

const MapState = {
  dt: 0,
  map: {
    haveMap: false,
  },
  tiles: [
    createDummyTile(),
  ] as Tiles[],
  player: {
    direction: undefined,
    position: vec2.fromValues(0, 0),
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
    const listener = (state: State) => {
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
useMapState.subscribe = (
  key: keyof State,
  callback: (value: any) => any
) => {
  useMapState.oldSubscribe((state, prevState) => {
    if (state[key] === prevState[key]) return;
    callback(state[key]);
  });
};

export default useMapState;
