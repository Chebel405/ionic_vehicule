import { Vehicule } from "../Vehicule";

class VehiculeService {

    private baseUrl = 'http://localhost:3000/vehicules';

    public async getVehicules(): Promise<Vehicule[]> {
        const response = await fetch(this.baseUrl);
        return await response.json();
    }

    public async afficheVehicule(vehicule: Vehicule): Promise<Vehicule> {
        const response = await fetch(this.baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(vehicule)
        });
        return await response.json();
    }


}

export const vehiculeService = new VehiculeService();