import { create } from 'zustand'
import db from '../data/db.json'

type IHabbit = {
    id: number
    title: string
    description: string
    type: string
    count: number
    date: string
    changes: any[]
}

interface IBadHabbits {
    badHabbits: IHabbit[]
    addBadHabbit: (badHabbit: IHabbit) => void
    removeBadHabbit: (badHabbitId: number) => void
}

export const useBadHabbits = create<IBadHabbits>((set) => ({
    badHabbits: db.habbits.bad,
    addBadHabbit: (badHabbit: IHabbit) => {
        set((state) => ({
            badHabbits: [...state.badHabbits, badHabbit],
        }))
    },
    removeBadHabbit: (badHabbitId) => {
        set((state) => ({
            badHabbits: state.badHabbits.filter((badHabbit) => badHabbit.id !== badHabbitId),
        }))
    },
}))

interface IUseModals {
    isAddHabbitVisible: boolean
    setIsAddHabbitVisible: (isAddHabbitVisible: boolean) => void

    isSettingsVisible: boolean
    setIsSettingsVisible: (isSettingsVisible: boolean) => void
}


export const useModals = create<IUseModals>((set) => ({
    isAddHabbitVisible: false,
    setIsAddHabbitVisible: (isAddHabbitVisible) => set(() => ({ isAddHabbitVisible })),

    isSettingsVisible: false,
    setIsSettingsVisible: (isSettingsVisible) => set(() => ({ isSettingsVisible })),
}))




interface IUseLoggedIn {
    isLoggedIn: boolean
    setIsLoggedIn: (isLoggedIn: boolean) => void
}

export const useLoggedIn = create<IUseLoggedIn>((set) => ({
    isLoggedIn: false,
    setIsLoggedIn: (isLoggedIn) => set(() => ({ isLoggedIn })),
}))