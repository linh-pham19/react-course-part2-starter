import { create } from "zustand";

interface LoginStore {
    username: string;
    login: (username: string) => void;
    logout: () => void;
}

const useLoginStore = create<LoginStore>((set) => ({
    username:"",
    login: (username: string) => set((store) => ({ username: username })),
    logout: () => set(() => ({ username: "" })),
}))

export default useLoginStore;