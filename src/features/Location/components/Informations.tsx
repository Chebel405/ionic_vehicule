import { IonCard } from "@ionic/react"
import { Link } from "react-router-dom"
import { Location } from "../Location";
import { IonTitle, IonText, IonCardContent } from "@ionic/react";




interface Props {
    location: Location
}

export const Informations = (props: Props) => {
    return <Link to={`/location/detail/${props.location.id}`}>
        <IonCard>
            <IonCard>
                <IonTitle>Locataire</IonTitle>
                <IonCardContent>
                    <IonText>{props.location.id}</IonText>
                    <IonText>{props.location.prixTotal}</IonText>
                    {/* <IonText>{props.location.dateDebut}</IonText> */}
                    <IonText>{props.location.vehiculeId}</IonText>
                </IonCardContent>
            </IonCard>
        </IonCard>
    </Link>

}