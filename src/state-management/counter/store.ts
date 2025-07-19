import { create } from "zustand";
import Counter from "./Counter";

interface CounterStore {
    counter: number;
    max: number;
    increment: () => void;
    reset: () => void;
}
// store is current state
const useCounterStore = create<CounterStore>()(set => ({
    counter: 0,
    max: 5,
    increment: () => set(store => ({ counter: store.counter + 1 })),
    reset: () => set(() => ({ max: 10 }))
}));

export default useCounterStore;