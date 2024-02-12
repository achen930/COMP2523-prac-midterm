import { Playlist } from "./playlist";

export interface IImportable {
    loadPlaylist(): Playlist;
}