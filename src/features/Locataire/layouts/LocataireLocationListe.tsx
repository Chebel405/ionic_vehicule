import { Locataire } from '../Locataire';
import { Location } from '../Location';


interface Props {
    location: Location;
    locataire: Locataire;
}

export const LocataireLocationListe = (props: Props) => {
    return <IonList>
        {
            props.locataire ?
        }
    </IonList>
}