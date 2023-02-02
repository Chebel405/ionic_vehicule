export interface Locataire {
    id?: number | string
    dateDebut: Date
    dateFin: Date
    prixTotal: number
    locataire: Locataire[]


}