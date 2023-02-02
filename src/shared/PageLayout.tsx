import { IonPage, IonTitle, IonContent } from "@ionic/react"
import { LocataireDetailPage } from "../features/Locataire/pages/LocataireDetailPage"


interface Props {
    nom: string,
    prenom: string,
    email: string
}
export const PageLayout = (props: Props) => {
    return
    <IonPage>
        <IonTitle>Informations</IonTitle>
        <IonContent>{props.nom}</IonContent>
        <IonContent>{props.prenom}</IonContent>
        <IonContent>{props.email}</IonContent>

    </IonPage>
}