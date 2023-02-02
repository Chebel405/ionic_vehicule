import { useState } from "react"
import { Vehicule } from "../Vehicule"
import { vehiculeService } from "../services/VehiculeService"
import { IonList, IonItem, IonLabel, IonInput, IonButton, IonTextarea } from "@ionic/react"

interface Props {

}

export const VehiculeForm = (props: Props) => {
    const [marque, setMarque] = useState<string>("")
    const [etat, setEtat] = useState<string>("")
    const [immatriculation, setImmatriculation] = useState<string>("")
    const [modele, setModele] = useState<string>("")
    const [prix, setPrix] = useState<number>();
    const [type, setType] = useState<string>("")

    const submit = () => {
        if (!marque || !etat || !immatriculation ||
            !modele || !prix || !type) {
            alert("Tous les champs ne sont pas remplis")
            return
        }
        const vehicule = {
            marque, etat, immatriculation, modele,
            prix, type
        }
        vehiculeService.afficheVehicule(vehicule).then((vehicule) => {
            history.go(-1)
        })
    }
    return
    <IonList>
        <IonItem target={undefined} button={undefined} color={undefined} disabled={undefined} fill={undefined} lines={undefined} mode={undefined} type={undefined} routerAnimation={undefined} href={undefined} rel={undefined} download={undefined} shape={undefined} counter={undefined} counterFormatter={undefined} detail={undefined} detailIcon={undefined}>
            <IonLabel position="floating">Marque</IonLabel>
            <IonInput
                onIonChange={(event: any) => setMarque(event.target.value)} />
        </IonItem>
        <IonItem target={undefined} button={undefined} color={undefined} disabled={undefined} fill={undefined} lines={undefined} mode={undefined} type={undefined} routerAnimation={undefined} href={undefined} rel={undefined} download={undefined} shape={undefined} counter={undefined} counterFormatter={undefined} detail={undefined} detailIcon={undefined}>
            <IonLabel position="floating">Etat</IonLabel>
            <IonTextarea
                onIonChange={(event: any) => setEtat(event.target.value)} />
        </IonItem>
        <IonItem target={undefined} button={undefined} color={undefined} disabled={undefined} fill={undefined} lines={undefined} mode={undefined} type={undefined} routerAnimation={undefined} href={undefined} rel={undefined} download={undefined} shape={undefined} counter={undefined} counterFormatter={undefined} detail={undefined} detailIcon={undefined}>
            <IonLabel position="floating">N° immatriculation</IonLabel>
            <IonInput
                onIonChange={(event: any) => setImmatriculation(event.target.value)} />
        </IonItem>
        <IonItem target={undefined} button={undefined} color={undefined} disabled={undefined} fill={undefined} lines={undefined} mode={undefined} type={undefined} routerAnimation={undefined} href={undefined} rel={undefined} download={undefined} shape={undefined} counter={undefined} counterFormatter={undefined} detail={undefined} detailIcon={undefined}>
            <IonLabel position="floating">Modele</IonLabel>
            <IonInput
                onIonChange={(event: any) => setModele(event.target.value)} />
        </IonItem>
        <IonItem target={undefined} button={undefined} color={undefined} disabled={undefined} fill={undefined} lines={undefined} mode={undefined} type={undefined} routerAnimation={undefined} href={undefined} rel={undefined} download={undefined} shape={undefined} counter={undefined} counterFormatter={undefined} detail={undefined} detailIcon={undefined}>
            <IonLabel position="floating">Prix</IonLabel>
            <IonInput
                onIonChange={(event: any) => setPrix(event.target.value)} />
        </IonItem>
        <IonItem target={undefined} button={undefined} color={undefined} disabled={undefined} fill={undefined} lines={undefined} mode={undefined} type={undefined} routerAnimation={undefined} href={undefined} rel={undefined} download={undefined} shape={undefined} counter={undefined} counterFormatter={undefined} detail={undefined} detailIcon={undefined}>
            <IonLabel position="floating">Type</IonLabel>
            <IonInput
                onIonChange={(event: any) => setType(event.target.value)} />
        </IonItem>
        <IonItem target={undefined} button={undefined} color={undefined} disabled={undefined} fill={undefined} lines={undefined} mode={undefined} type={undefined} routerAnimation={undefined} href={undefined} rel={undefined} download={undefined} shape={undefined} counter={undefined} counterFormatter={undefined} detail={undefined} detailIcon={undefined}>
            <IonButton onClick={submit} target={undefined} form={undefined} strong={undefined} color={undefined} disabled={undefined} fill={undefined} mode={undefined} type={undefined} routerAnimation={undefined} href={undefined} rel={undefined} download={undefined} shape={undefined} size={undefined} expand={undefined} onIonBlur={undefined} onIonFocus={undefined} buttonType={undefined}>Submit</IonButton>
        </IonItem>
    </IonList>


}