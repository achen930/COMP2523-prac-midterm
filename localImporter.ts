import { readFile } from "fs";
import { IImportable } from "./interfaces";
import { Playlist } from "./playlist";
const fs = require("fs")

export class LocalImporter implements IImportable{
    private _path: string;

    constructor (path: string) {
        this._path = path;
    }

    loadPlaylist(): Playlist {
        let filePath = "albums.json"
        fs.readFile(filePath, "utf-8", (err: Error, file: string) => {
            if (err) {
                console.log(err);
            }
            const data = JSON.parse(file);
            return data;
        })
        return fs.readFile(filePath);
    }
}