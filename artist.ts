import { Album } from "./album";

export class Artist {
    private _name: string;
    private _albums: Album[];

    constructor(artistName: string, artistAlbums: Album[]) {
        this._name = artistName;
        this._albums = artistAlbums;
    }

    addAlbum(album: Album) {
        let albums = this._albums;
        return albums.push(album);
    }
}