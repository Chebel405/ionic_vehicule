import { IonPage, IonTitle, IonContent } from "@ionic/react"
import { LocataireDetailPage } from "../features/Locataire/pages/LocataireDetailPage"
import { Vehicule } from "../features/Vehicule/Vehicule"


interface Props {
    nom: string,
    prenom: string,
    email: string,
    vehicule: Vehicule,
    children: any
}
export const PageLayout = (props: Props) => {
    return
    <IonPage>
        <IonTitle>Informations</IonTitle>
        <IonContent>{props.nom}</IonContent>
        <IonContent>{props.prenom}</IonContent>
        <IonContent>{props.email}</IonContent>
        <IonContent>{props.vehicule.etat}</IonContent>
        <IonContent>{props.vehicule.immatriculation}</IonContent>
        <IonContent>{props.vehicule.marque}</IonContent>
        <IonContent>{props.vehicule.modele}</IonContent>
        <IonContent>{props.vehicule.prix}</IonContent>
        <IonContent>{props.vehicule.status}</IonContent>
        <IonContent>{props.vehicule.type}</IonContent>
    </IonPage>
}
