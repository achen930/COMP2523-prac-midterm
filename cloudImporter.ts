import { Album } from "./album";
import { IImportable } from "./interfaces";
import { Playlist } from "./playlist";

export class CloudImporter implements IImportable {
    loadPlaylist(): string {
        let playlist = new Playlist("cool songs", ["abc"]);
        console.log("Importing playlist from youtube.com");
        playlist.addAlbum(new Album("abc", "123", 2024, [abc, def]));
    }


}