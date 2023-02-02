import { Locataire } from "../Locataire/Locataire"
import { Vehicule } from "../Vehicule/Vehicule"


export interface Location {
    id?: number | string
    dateDebut: Date
    dateFin: Date
    prixTotal: number
    locataire: Locataire[]
    vehiculeId?: number[]


}
