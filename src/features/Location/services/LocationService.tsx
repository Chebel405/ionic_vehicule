import { Locataire } from "../../Locataire/Locataire";
import { Informations } from "../components/Informations";
//import { Location } from "../../Locataire/Location";


class LocationService {

    public async getLocations(): Promise<Location[]> {
        const response = await fetch('http://localhost:3000/locations');
        return await response.json();
    }

    public async sauvegarderLocations(location: Location): Promise<Location> {
        const response = await fetch('http://localhost:3000/locations', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify(location)
        });
        return await response.json();
    }
    public async trouverLocations(id: number | string): Promise<Location> {
        const response = await fetch(`http://localhost:3000/locations/${id}`);
        return await response.json();

    }
}


export const locationService = new LocationService();