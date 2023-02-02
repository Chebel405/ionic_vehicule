import { IonCard } from "@ionic/react"
import { Link } from "react-router-dom"
import { Locataire } from "../Locataire"
import { IonTitle, IonText, IonCardContent } from "@ionic/react"


interface Props {
    locataire: Locataire
}

export const LocataireCard = (props: Props) => {
    return <Link to={`/locataire/detail/${props.locataire.id}`}>
        <IonCard disabled={undefined} button={undefined} mode={undefined} color={undefined} type={undefined} routerAnimation={undefined} href={undefined} rel={undefined} target={undefined} download={undefined}>
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