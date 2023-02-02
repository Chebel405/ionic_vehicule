import { useParams } from "react-router";
import { Locataire } from "../Locataire";
import { useEffect, useState } from "react"
import { LocataireCard } from "../components/LocataireCard";
import { locataireService } from "../services/LocataireService";
import { PageLayout } from "../../../shared/PageLayout";
import { ListLocataire } from "../layouts/ListLocataire";



export const LocataireDetailPage = () => {
    const { id } = useParams<{ id: string }>();
    const [locataire, setLocataire] = useState<Locataire>()

    useEffect(() => {
        locataireService.afficherLocataire(id).then(setLocataire)
    })

    return <PageLayout titre="Locataire">
        <LocataireCard locataire={locataire} />
        <Loca



    </PageLayout>
}