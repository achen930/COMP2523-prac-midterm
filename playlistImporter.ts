import { IImportable } from "./interfaces";
import { Playlist } from "./playlist";

export class PlaylistImporter {
    
    private _importer: IImportable;

    constructor(importer: IImportable) {
        this._importer = importer;
    }

    importPlaylist(): Playlist {
        return this._importer.loadPlaylist();
    }
}