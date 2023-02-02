import { useParams } from "react-router";
import { Locataire } from "../Locataire";
import { useEffect, useState } from "react"
import { LocataireCard } from "../components/LocataireCard";
import { locataireService } from "../services/LocataireService";


export const LocataireDetailPage = () => {
    const { id } = useParams<{ id: string }>();
    const [locataire, setLocataire] = useState<Locataire>()

    useEffect(() => {
        locataireService.afficherLocataire(id).then(setLocataire)
    })
}