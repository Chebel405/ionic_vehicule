import { VehiculeDetail } from "./components/VehiculeDetail"

export interface Vehicule {

    id: number,
    etat: string,
    immatriculation: string,
    marque: string,
    modele: string,
    prix: number,
    status: string,
    type: string,
    location: Location[]

}