import { create } from "zustand";

interface ISideModalStore {
	isModalOpen: boolean;
	openModal: () => void;
	closeModal: () => void;
	isOverlayOpen: boolean;
	openOverlay: () => void;
	closeOverlay: () => void;
}

export const useSideModalStore = create<ISideModalStore>((set) => ({
	isModalOpen: false,
	openModal: () => set({ isModalOpen: true }),
	closeModal: () => set({ isModalOpen: false }),
	isOverlayOpen: false,
	openOverlay: () => set({ isOverlayOpen: true }),
	closeOverlay: () => set({ isOverlayOpen: false }),
}));
