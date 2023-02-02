import { LocataireDetailPage } from "./pages/LocataireDetailPage";
import { Informations } from "../Location/components/Informations";
import { Vehicule } from "../Vehicule/Vehicule";
import { VehiculeDetail } from "../Vehicule/components/VehiculeDetail";

export interface Locataire {
    id?: number | string;
    nom: string
    prenom: string
    email: string
    password: string
    vehicule: Vehicule[]

}