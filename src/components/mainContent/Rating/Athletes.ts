import flagRF from '../../../img/flags/russian_federation.svg'
import flagUS from '../../../img/flags/united_states.svg'
import flagCAN from '../../../img/flags/canada_.svg'
import flagARM from '../../../img/flags/armenia.svg'
import flagSWD from '../../../img/flags/sweden.svg'
import flagGEO from '../../../img/flags/georgia_.svg'
import flagKH from '../../../img/flags/kazakhstan.svg'
import flagUK from '../../../img/flags/ukraine.svg'

type AthleteType = {
    name: string;
    rating: number;
    flag: string; // SVG URL
}[]

export const Athlete: AthleteType = [
    {name: 'Денис Цыпленков', rating:2044, flag:flagRF},
    {name: 'Dave Chaffee', rating:350, flag:flagUS},
    {name: 'Davon Laratt', rating:2043, flag:flagCAN},
    {name: 'David Dadikyan', rating:381, flag:flagARM},
    {name: 'Быков Владислав', rating:444, flag:flagRF},
    {name: 'Tobias Sporrong', rating:399, flag:flagSWD},
    {name: 'John Brzenk', rating:443, flag:flagUS},
    {name: 'Levan Saginashvili', rating:420, flag:flagGEO},
    {name: 'Артём Морозов', rating:2020, flag:flagKH},
    {name: 'Прудник Евгений', rating:425, flag:flagUK}
]