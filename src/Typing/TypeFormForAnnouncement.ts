import {CountriesType} from "../components/Tournaments/Choice/Announcements/FormAnnouncement/FirstFormPart/Countries";

export type StatusTournamentType = 'Рейтинговый турнир' | 'Обычный турнир' | ''
export type ConductionSystemType = 'Двоеборье' | 'Правая рука' | 'Левая рука'
export type GenderType = 'муж'|'жен'
export type AgeType =
    'Взрослые'
    | '14-15'
    | '16-18'
    | '19-21'
    | '22+'
    | '40+'
    | '50+'
    | '60+'

export type CategoryAthleteType =
    'Общая'
    | 'Любители'
    | 'Проф-лы'
    | 'Инвалиды'
    | 'Инв.(HEAR)'
    | 'Инв.(VIS)'
    | 'Инв.(STAND)'
    | 'Инв.(SIT)'

export type WeightCategoriesType = Array<string>

export type CategoryType = {
    conductionSystem: ConductionSystemType
    gender: GenderType
    age: AgeType
    categoryAthlete: CategoryAthleteType
    weightCategories: WeightCategoriesType
}

export type FormForAnnouncementType = [
    {
        id: string
        country: CountriesType
        nameTournament: string
        addressTournament?: string
        preRegistration: boolean
        linkToRegistration: string
        startTournament: [string, string] | string
        weighingTime: [string, string] | string
        status: StatusTournamentType
        categories: CategoryType
        entryFee?: number
        prizeFund?: number
        organizer: string
        contactNumber: string
        contactLink?: string
        additionalInformation: string
        poster?: string
        document?: string
    }
]