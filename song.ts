export class Song {
    private _title: string

    constructor(songTitle: string) {
        this._title = songTitle;
    }

    get songTitle(): string {
        return this._title;
    }

    set songTitle(title: string) {
        this._title = title;
    }
}