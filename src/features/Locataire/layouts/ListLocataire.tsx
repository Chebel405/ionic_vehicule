import { IonList, IonItem } from "@ionic/react"
import { LocataireCard } from "../components/LocataireCard"

interface Props {
    locataires: any[],
}

export const ListLocataire = (props: Props) => {
    return <IonList>
        {
            props.locataires.map((locataire, index) => {
                return <IonItem key={index} routerLink={`/locataires/detail/${locataire.id}`}>
                    <LocataireCard locataire={locataire}></LocataireCard>
                </IonItem>
            })

        }
    </IonList>
}