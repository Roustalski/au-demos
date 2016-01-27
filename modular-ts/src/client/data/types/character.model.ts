import {BaseModel} from './base.model';

export class CharacterModel extends BaseModel {

    public id: string;
    public name: string;
    public description: string;
    public modified: string;
    public thumbnail: ThumbnailModel;
    public resourceURI: string;
    public comics: CollectionModel;
    public series: CollectionModel;
    public stories: CollectionModel;
    public events: CollectionModel;
    public urls: UrlModel;

    // ----------------------------------------
    //
    //  Constructor
    //
    // ----------------------------------------
    constructor(
        id: string,
        name: string,
        description: string,
        modified: string,
        thumbnail: ThumbnailModel,
        resourceURI: string,
        comics: CollectionModel,
        series: CollectionModel,
        stories: CollectionModel,
        events: CollectionModel,
        urls: UrlModel) {

        super();

        this.id = id;
        this.name = name;
        this.description = description;
        this.modified = modified;
        this.thumbnail = thumbnail;
        this.resourceURI = resourceURI;
        this.comics = comics;
        this.series = series;
        this.stories = stories;
        this.events = events;
        this.urls = urls;
    }
}

export class ThumbnailModel extends BaseModel {
    public path: string;
    public extension: string;

    constructor(path: string, extension: string) {
        super();
        this.path = path;
        this.extension = extension;
    }
}

export class CollectionModel extends BaseModel {
    public available: number;
    public uri: string;
    public items: any[];
    public returned: number;

    constructor(available: number, uri: string, items: any[], returned: number) {
        super();
        this.available = available;
        this.uri = uri;
        this.items = items;
        this.returned = returned;
    }
}

export class UrlModel extends BaseModel {
    public type: string;
    public url: string;

    constructor(type: string, url: string) {
        super();
        this.type = type;
        this.url = url;
    }
}