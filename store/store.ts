import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  addBadHabbit,
  decreaseBadHabbitCount,
  increaseBadHabbitCount,
  removeBadHabbit,
  addGoodHabbit,
  decreaseGoodHabbitCount,
  increaseGoodHabbitCount,
  removeGoodHabbit,
  editBadHabbit,
  editGoodHabbit,
} from "@/data/LocalDatabase";

/**
 * Represents a Habbit object.
 * @typedef {Object} Habbit
 * @property {number} id - The unique identifier of the Habbit.
 * @property {string} title - The title of the Habbit.
 * @property {string} description - The description of the Habbit.
 * @property {string} type - The type of the Habbit (e.g., "count" //todo: make another types).
 * @property {number} count - The count of the Habbit.
 * @property {string} date - The date of the Habbit was initialized.
 * @property {Array} changes - An array of changes for the Habbit.
 */
export type Habbit = {
  id: number;
  title: string;
  description: string;
  count: number;
  date: string;
};

export type editedHabbitData = {
  id: number;
  title: string;
  description: string;
  count: number;
};


/*
 * The global state for list of users bad habbits.
 *
 * This store is used to manage the state of the list of bad habbits.
 * it provides methods to add, remove, increase and decrease the count of the bad habbits.
 * it also syncronizes the state with an SQLite local database.
 */
interface IBadHabbits {
  badHabbits: Habbit[];
  setBadHabbits: (badHabbits: Habbit[]) => void;
  addBadHabbit: (badHabbit: Habbit) => void;
  removeBadHabbit: (badHabbitId: number) => void;
  increaseBadHabbitCount: (badHabbitId: number) => void;
  decreaseBadHabbitCount: (badHabbitId: number) => void;
  editBadHabbit: (badHabbit: editedHabbitData) => void;
}

export const useBadHabbits = create<IBadHabbits>((set) => ({
  badHabbits: [],
  setBadHabbits: (badHabbits: Habbit[]) => {
    set({ badHabbits });
  },
  addBadHabbit: (badHabbit: Habbit) => {
    set((state) => {
      return {
        badHabbits: [...state.badHabbits, badHabbit],
      };
    });
    addBadHabbit(badHabbit);
  },
  removeBadHabbit: (badHabbitId) => {
    set((state) => ({
      badHabbits: state.badHabbits.filter(
        (badHabbit) => badHabbit.id !== badHabbitId
      ),
    }));
    removeBadHabbit(badHabbitId);
  },
  increaseBadHabbitCount: (badHabbitId) => {
    set((state) => ({
      badHabbits: state.badHabbits.map((badHabbit) => {
        if (badHabbit.id === badHabbitId) {
          return {
            ...badHabbit,
            count: badHabbit.count + 1,
          };
        }

        return badHabbit;
      }),
    }));
    increaseBadHabbitCount(badHabbitId);
  },
  decreaseBadHabbitCount: (badHabbitId) => {
    set((state) => ({
      badHabbits: state.badHabbits.map((badHabbit) => {
        if (badHabbit.id === badHabbitId) {
          return {
            ...badHabbit,
            count: Math.max(0, badHabbit.count - 1),
          };
        }
        decreaseBadHabbitCount(badHabbitId);
        return badHabbit;
      }),
    }));
  },
  editBadHabbit: (editedData: editedHabbitData) => {
    set((state) => ({
      badHabbits: state.badHabbits.map((badHabbit) => {
        if (badHabbit.id === editedData.id) {
          return {
            ...badHabbit,
            title: editedData.title,
            description: editedData.description,
            count: editedData.count,
          };
        }
        return badHabbit;
      }),
    }));
    editBadHabbit(editedData);
  },
}));

/*
 * The global state for list of users good habbits.
 *
 * This store is used to manage the state of the list of bad habbits.
 * it provides methods to add, remove, increase and decrease the count of the bad habbits.
 * it also syncronizes the state with an SQLite local database.
 */

interface IGoodHabbits {
  goodHabbits: Habbit[];
  setGoodHabbits: (goodHabbits: Habbit[]) => void;
  addGoodHabbit: (goodHabbit: Habbit) => void;
  removeGoodHabbit: (goodHabbitId: number) => void;
  increaseGoodHabbitCount: (goodHabbitId: number) => void;
  decreaseGoodHabbitCount: (goodHabbitId: number) => void;
  editGoodHabbit: (goodHabbit: editedHabbitData) => void;
}

export const useGoodHabbits = create<IGoodHabbits>((set) => ({
  goodHabbits: [],
  setGoodHabbits: (goodHabbits: Habbit[]) => {
    set({ goodHabbits });
  },
  addGoodHabbit: (goodHabbit: Habbit) => {
    set((state) => ({
      goodHabbits: [...state.goodHabbits, goodHabbit],
    }));
    addGoodHabbit(goodHabbit);
  },
  removeGoodHabbit: (goodHabbitId) => {
    set((state) => ({
      goodHabbits: state.goodHabbits.filter(
        (goodHabbit) => goodHabbit.id !== goodHabbitId
      ),
    }));
    removeGoodHabbit(goodHabbitId);
  },
  increaseGoodHabbitCount: (goodHabbitId) => {
    set((state) => ({
      goodHabbits: state.goodHabbits.map((goodHabbit) => {
        if (goodHabbit.id === goodHabbitId) {
          return {
            ...goodHabbit,
            count: goodHabbit.count + 1,
          };
        }
        return goodHabbit;
      }),
    }));
    increaseGoodHabbitCount(goodHabbitId);
  },
  decreaseGoodHabbitCount: (goodHabbitId) => {
    set((state) => ({
      goodHabbits: state.goodHabbits.map((goodHabbit) => {
        if (goodHabbit.id === goodHabbitId) {
          return {
            ...goodHabbit,
            count: Math.max(0, goodHabbit.count - 1),
          };
        }
        return goodHabbit;
      }),
    }));
    decreaseGoodHabbitCount(goodHabbitId);
  },
  editGoodHabbit: (editedData: editedHabbitData) => {
    set((state) => ({
      goodHabbits: state.goodHabbits.map((goodHabbit) => {
        if (goodHabbit.id === editedData.id) {
          return {
            ...goodHabbit,
            title: editedData.title,
            description: editedData.description,
            count: editedData.count,
          };
        }
        return goodHabbit;
      }),
    }));
    editGoodHabbit(editedData);
  },
}));

/*
 * The global state for the which modal is visible.
 *
 * This store is used to determine if the modal is opened or not
 * it also updates the state if user opens or closes the modal
 */

interface IUseModals {
  modalType: string;
  isCurrentHabbitBad: boolean;
  editedHabbitId: number;
  setModalType: (modalType: string) => void;
  setIsCurrentHabbitBad: (isCurrentHabbitBad: boolean) => void;
  setEditedHabbitId: (editedHabbitId: number) => void;
}

export const useModals = create<IUseModals>((set) => ({
  modalType: "", // settigs, addHabbit, editHabbit
  isCurrentHabbitBad: false,
  editedHabbitId: 0,

  setModalType: (modalType) => set(() => ({ modalType })),
  setIsCurrentHabbitBad: (isCurrentHabbitBad) =>
    set(() => ({ isCurrentHabbitBad })),
  setEditedHabbitId: (editedHabbitId) => set(() => ({ editedHabbitId })),
}));

/*
 * The global state for user information, obtained from an async storage.
 *
 * This store is used to determine if the user is logged in, and to update
 * the state if the user logs in or logs out.
 */

export interface IUserInfo {
  isWelcomed: boolean;
  setIsWelcomed: (isWelcomed: boolean) => void;
}

export const useUserInfo = create<IUserInfo>((set) => {
  return {
    isWelcomed: false,
    setIsWelcomed: (isWelcomed: boolean) =>
      set(() => {
        AsyncStorage.setItem("isWelcomed", isWelcomed ? "true" : "false");
        return { isWelcomed };
      }),
  };
});
