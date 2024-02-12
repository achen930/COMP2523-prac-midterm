import { Artist } from "./artist";
import { Song } from "./song";

export class Album {
    private _title: string;
    private _artist: Artist;
    private _year: number;
    private _tracks: Song[];


    constructor(albumTitle: string, albumArtist: Artist, year: number, songs: Song[]) {
        this._title = albumTitle;
        this._artist = albumArtist;
        this._year = year;
        this._tracks = songs;
    }

    get albumTitle(): string {
        return this._title;
    }

    set albumTitle(title: string) {
        this._title = title;
    }

    addTrack(track: Song) {
        let tracks = this._tracks;
        return tracks.push(track);
    }
}