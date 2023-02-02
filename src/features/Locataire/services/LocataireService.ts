import { Locataire } from "../Locataire";

class LocataireService {

    public async getLocataires(): Promise<Locataire[]> {
        const response = await fetch('http://localhost:3000/locataires');
        return await response.json();
    }

    public async afficherLocataire(id: number|string):Promise<Locataire> {
        const response = await fetch(`http://localhost:3000/locataires/${id}`);
        return await response.json();

    }

    public async supprimerLocataire(id: number|string): Promise<Locataire> {
        const response = await fetch(`http://localhost:3000/locataires/${id}`);
        return await response.json();
    }

}

export const locataireService = new LocataireService();