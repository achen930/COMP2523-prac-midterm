import { Album } from "./album";

export class Playlist {
    private _name: string
    private _songs: string[]

    constructor(playlistName: string, playlistSongs: string[]) {
        this._name = playlistName;
        this._songs = playlistSongs;
    }

    get playlistName(): string {
        return this._name;
    }

    set playlistName(name: string) {
        this._name = name;
    }

    get playlistSongs(): string[] {
        return this._songs;
    }

    set playlistSongs(songs: string[]) {
        this._songs = songs;
    }

    addAlbum(album: Album[]) {

    }
}