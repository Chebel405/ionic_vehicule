import { IonCard } from "@ionic/react"
import { Link } from "react-router-dom"
import { Locataire } from "../Locataire"
import { IonTitle, IonText, IonCardContent } from "@ionic/react"
import { Location } from "../../Location/Location"
import { Vehicule } from "../Vehicule"



interface Props {
    vehicule: Vehicule
    locataire: Locataire
    location: Location
}

export const VehiculeDetail = (props: Props) => {
    return <Link to={`/vehicule/detail/${props.location.id}`}>
        <IonCard>
            <IonCard>
                <IonTitle>Location véhicule</IonTitle>
                <IonCardContent>
                    <IonText>{props.locataire}</IonText>
                    <IonText>{props.location.vehiculeId}</IonText>
                    <IonText>{props.location.id}</IonText>
                    <IonText>{props.location.prixTotal}</IonText>

                    <IonText>{props.locataire}</IonText>

                    <IonText>{props.vehicule.id}</IonText>
                    <IonText>{props.vehicule.marque}</IonText>
                    <IonText>{props.vehicule.type}</IonText>
                    <IonText>{props.vehicule.etat}</IonText>
                    <IonText>{props.vehicule.immatriculation}</IonText>
                    <IonText>{props.vehicule.modele}</IonText>
                    <IonText>{props.vehicule.prix}</IonText>
                    <IonText>{props.vehicule.status}</IonText>
                    {/* <IonText>{props.locataire.}</IonText> */}
                    <IonText>{props.vehicule.immatriculation}</IonText>
                    <IonText>{props.vehicule.immatriculation}</IonText>
                </IonCardContent>
            </IonCard>
        </IonCard>
    </Link>

}