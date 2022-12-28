export interface GenreApiDeezer {
    data: GenreApiDeezerResult[];
}

export interface GenreApiDeezerResult {
    id:             string,
    name:           string,
    picture:        string,
    picture_small:  string,
    picture_medium: string,
    picture_big:    string,
    picture_xl:     string,
    type:           Type
}

export enum Type {
    Genre = "genre",
}