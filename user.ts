import { Album } from "./album";
import { Playlist } from "./playlist";

export class User {
    private _username: string;
    private _password: string;
    private _playlists: Playlist[];
    private _albums: Album[];

    constructor(username: string, password: string, playlists: Playlist[], albums: Album[]) {
        this._username = username;
        this._password = password;
        this._playlists = playlists;
        this._albums = albums;
    }

    get username() {
        return this._username;
    }

    set username(username: string) {
        this._username = username;
    }

    get password() {
        return this._password;
    }

    set password(password: string) {
        this._password = password;
    }

    addPlaylist(playlist: Playlist[]) {
        let playlists = this._playlists;
        return playlists.push(playlist);
    }

    addAlbum(album: Album[]) {
        let albums = this._albums;
        return albums.push(album);
    }

    getSongs() {
        /* A user has a getSongs method (extracts all songs from all albums) */
    }

    getAlbums() {
        return this._albums;
    }

    getPlaylists() {
        return this._playlists;
    }
}