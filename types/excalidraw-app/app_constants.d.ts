export declare const SAVE_TO_LOCAL_STORAGE_TIMEOUT = 300;
export declare const INITIAL_SCENE_UPDATE_TIMEOUT = 5000;
export declare const FILE_UPLOAD_TIMEOUT = 300;
export declare const LOAD_IMAGES_TIMEOUT = 500;
export declare const SYNC_FULL_SCENE_INTERVAL_MS = 20000;
export declare const FILE_UPLOAD_MAX_BYTES: number;
export declare const FILE_CACHE_MAX_AGE_SEC = 31536000;
export declare const BROADCAST: {
    SERVER_VOLATILE: string;
    SERVER: string;
};
export declare enum SCENE {
    INIT = "SCENE_INIT",
    UPDATE = "SCENE_UPDATE"
}
export declare const FIREBASE_STORAGE_PREFIXES: {
    shareLinkFiles: string;
    collabFiles: string;
};
export declare const ROOM_ID_BYTES = 10;
