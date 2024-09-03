export type TUser = {
    id: number
    email: string
    role: number
}

export type TOpeningHour = {
    id: number
    day: string
    start: number
    end: number
}

export type TActivity = {
    id: number
    title: string
    description: string
    address: string
    tel: string
    website: string
    openingHours?: TOpeningHour[]
    categoryId: number,
    category: {
        name: string
    }
}

export type TGuide = {
    id: number
    title: string
    description: string
    days: number
    createdAt: string,
    updatedAt: string,
    schedules: [
        {
            id: number,
            day: number,
            order: number,
            guideId: number,
            activityId: number,
            createdAt: string,
            updatedAt: string
        }
    ],
    season: {
        name: "été" | "printemps" | "automne" | "hiver"
    },
    mobility: {
        name: "voiture" | "vélo" | "à pied" | "moto"
    },
    forWhom: {
        name: "famille" | "seul" | "en groupe" | "entre amis"
    }
}