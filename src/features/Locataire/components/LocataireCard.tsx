import { IonCard } from "@ionic/react"
import { Link } from "react-router-dom"
import { Locataire } from "../Locataire"
import { IonTitle, IonText, IonCardContent } from "@ionic/react"


interface Props {
    locataire: Locataire
}

export const LocataireCard = (props: Props) => {
    return <Link to={`/locataire/detail/${props.locataire.id}`}>
        <IonCard>
            <IonCard>
                <IonTitle>Locataire</IonTitle>
                <IonCardContent>
                    <IonText>{props.locataire.nom}</IonText>
                    <IonText>{props.locataire.prenom}</IonText>
                    <IonText>{props.locataire.email}</IonText>

                </IonCardContent>
            </IonCard>
        </IonCard>
    </Link>

}