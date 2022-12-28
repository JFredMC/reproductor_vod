export interface GetCardsClashRoyal {
    items: GetCardsClashRoyalResul[];
}

export interface GetCardsClashRoyalResul {
    name:     string;
    id:       number;
    maxLevel: number;
    iconUrls: IconUrls;
}

export interface IconUrls {
    medium: string;
}
