import { useParams } from "react-router";
import { Locataire } from "../Locataire";
import { useEffect, useState } from "react"
import { LocataireService } from "../services/LocataireService";
import { LocataireCard } from "../components/LocataireCard";


export const LocataireDetailPage = () => {
    const { id } = useParams<{ id: string }>();
    const [locataire, setLocataire] = useState<Locataire>()

}