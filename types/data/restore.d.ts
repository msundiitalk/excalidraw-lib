import { ExcalidrawElement } from "../element/types";
import { AppState, BinaryFiles, LibraryItem } from "../types";
import { ImportedDataState } from "./types";
declare type RestoredAppState = Omit<AppState, "offsetTop" | "offsetLeft" | "width" | "height">;
export declare const AllowedExcalidrawElementTypes: Record<ExcalidrawElement["type"], true>;
export declare type RestoredDataState = {
    elements: ExcalidrawElement[];
    appState: RestoredAppState;
    files: BinaryFiles;
};
export declare const restoreElements: (elements: ImportedDataState["elements"], localElements: readonly ExcalidrawElement[] | null | undefined) => ExcalidrawElement[];
export declare const restoreAppState: (appState: ImportedDataState["appState"], localAppState: Partial<AppState> | null | undefined) => RestoredAppState;
export declare const restore: (data: ImportedDataState | null, localAppState: Partial<AppState> | null | undefined, localElements: readonly ExcalidrawElement[] | null | undefined) => RestoredDataState;
export declare const restoreLibraryItems: (libraryItems: NonOptional<ImportedDataState["libraryItems"]>, defaultStatus: LibraryItem["status"]) => LibraryItem[];
export {};