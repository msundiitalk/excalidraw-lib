import { ExcalidrawTextElement } from "../element/types";
import { AppClassProperties, AppState, Zoom } from "../types";
export declare type SceneState = {
    scrollX: number;
    scrollY: number;
    viewBackgroundColor: string | null;
    zoom: Zoom;
    shouldCacheIgnoreZoom: boolean;
    remotePointerViewportCoords: {
        [id: string]: {
            x: number;
            y: number;
        };
    };
    remotePointerButton?: {
        [id: string]: string | undefined;
    };
    remoteSelectedElementIds: {
        [elementId: string]: string[];
    };
    remotePointerUsernames: {
        [id: string]: string;
    };
    remotePointerUserStates: {
        [id: string]: string;
    };
    theme: AppState["theme"];
    imageCache: AppClassProperties["imageCache"];
};
export declare type SceneScroll = {
    scrollX: number;
    scrollY: number;
};
export interface Scene {
    elements: ExcalidrawTextElement[];
}
export declare type ExportType = "png" | "clipboard" | "clipboard-svg" | "backend" | "svg";
export declare type ScrollBars = {
    horizontal: {
        x: number;
        y: number;
        width: number;
        height: number;
    } | null;
    vertical: {
        x: number;
        y: number;
        width: number;
        height: number;
    } | null;
};
