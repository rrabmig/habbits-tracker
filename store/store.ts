import { create } from "zustand";
import bad from "../data/bad.json";
import good from "../data/good.json";

/**
 * Represents a Habbit object.
 *
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
  type: string;
  count: number;
  date: string;
  changes: any[];
};

/*
 * The global state for list of users bad habbits, obtained from a JSON file.
 *
 * This store is used to manage the state of the list of bad habbits.
 * it provides methods to add, remove, increase and decrease the count of the bad habbits.
 */
interface IBadHabbits {
  badHabbits: Habbit[];
  addBadHabbit: (badHabbit: Habbit) => void;
  removeBadHabbit: (badHabbitId: number) => void;
  increaseBadHabbitCount: (badHabbitId: number) => void;
  decreaseBadHabbitCount: (badHabbitId: number) => void;
}

export const useBadHabbits = create<IBadHabbits>((set) => ({
  badHabbits: bad,
  addBadHabbit: (badHabbit: Habbit) => {
    set((state) => ({
      badHabbits: [...state.badHabbits, badHabbit],
    }));
  },
  removeBadHabbit: (badHabbitId) => {
    set((state) => ({
      badHabbits: state.badHabbits.filter(
        (badHabbit) => badHabbit.id !== badHabbitId
      ),
    }));
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
        return badHabbit;
      }),
    }));
  },
}));

/*
 * The global state for the which modal is visible.
 *
 * This store is used to determine if the modal is opened or not
 * it also updates the state if user opens or closes the modal
 */

interface IUseModals {
  isAddHabbitVisible: boolean;
  setIsAddHabbitVisible: (isAddHabbitVisible: boolean) => void;

  isSettingsVisible: boolean;
  setIsSettingsVisible: (isSettingsVisible: boolean) => void;
}

export const useModals = create<IUseModals>((set) => ({
  isAddHabbitVisible: false,
  setIsAddHabbitVisible: (isAddHabbitVisible) =>
    set(() => ({ isAddHabbitVisible })),

  isSettingsVisible: false,
  setIsSettingsVisible: (isSettingsVisible) =>
    set(() => ({ isSettingsVisible })),
}));

/*
 * The global state for the app's logged-in status.
 *
 * This store is used to determine if the user is logged in, and to update
 * the state if the user logs in or logs out.
 */
interface IUseLoggedIn {
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}

export const useLoggedIn = create<IUseLoggedIn>((set) => ({
  isLoggedIn: false,
  setIsLoggedIn: (isLoggedIn) => set(() => ({ isLoggedIn })),
}));
