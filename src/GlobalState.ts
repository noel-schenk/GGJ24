import { StoreApi, UseBoundStore, create } from "zustand";
import { Character, View } from "./types";

const GlobalState = {
  example: "" as string,
  activeCharacter: 0 as number,
  characters: [] as Array<Character>,
  gptKey: "" as string,
  gptModel: "" as string,
  show: [] as View[],
  "activeCharacter--response": 0 as number,
  score: 0 as number,
  altMode: "" as string,
};

export const getActiveCharacter = () => {
  return useGlobalState.get("characters")[
    useGlobalState.get("activeCharacter")
  ];
};

type State = typeof GlobalState;

const createSetter = (set: any) => (key: keyof State, value: any) => {
  set((state: any) => ({ ...state, [key]: value }));
};

interface Store extends State {
  set: (key: keyof State, value: any) => void;
  get: <T extends keyof State>(key: T) => State[T];
  subscribe: (key: keyof State, callback: (value: any) => void) => () => void;
}

const basicGlobalState = create<Store>((set, get, api) => ({
  ...GlobalState,
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

const useGlobalState = basicGlobalState as any as ExtendedStore;
useGlobalState.oldSubscribe = basicGlobalState.subscribe;

useGlobalState.set = (key: keyof State, value: any) =>
  useGlobalState.setState({ [key]: value });
useGlobalState.get = <T extends keyof State>(key: T) =>
  useGlobalState.getState()[key];
useGlobalState.subscribe = (
  key: keyof State,
  callback: (value: any) => any
) => {
  useGlobalState.oldSubscribe((state, prevState) => {
    if (state[key] === prevState[key]) return;
    callback(state[key]);
  });
};

export default useGlobalState;
