export interface MetaData {
    lastUpdatedBy: string;
    serverUrl: string;
    timestamp: Date;
}

export class PubonObject {
    metaData: MetaData;
    payload: any;

    constructor() {

    }

    value(): any {
        return this.payload;
    }

    getChangeAuthor(): string {
        return this.metaData.lastUpdatedBy;
    }

    getServerUrl(): string {
        return this.metaData.serverUrl;
    }

    getLastUpdated(): Date {
        return this.metaData.timestamp;
    }
}