import { ExcalidrawElement } from "../../element/types";
import { AppState } from "../../types";
export declare const STORAGE_KEYS: {
    LOCAL_STORAGE_ELEMENTS: string;
    LOCAL_STORAGE_APP_STATE: string;
    LOCAL_STORAGE_COLLAB: string;
    LOCAL_STORAGE_KEY_COLLAB_FORCE_FLAG: string;
};
export declare const saveUsernameToLocalStorage: (username: string) => void;
export declare const importUsernameFromLocalStorage: () => string | null;
export declare const saveToLocalStorage: (elements: readonly ExcalidrawElement[], appState: AppState) => void;
export declare const importFromLocalStorage: () => {
    elements: ExcalidrawElement[];
    appState: {
        theme: string;
        zoom: Readonly<{
            value: import("../../types").NormalizedZoomValue;
            translation: Readonly<{
                x: number;
                y: number;
            }>;
        }>;
        scrollX: number;
        scrollY: number;
        name: string;
        elementType: "line" | "selection" | "rectangle" | "diamond" | "ellipse" | "image" | "text" | "arrow" | "freedraw";
        elementLocked: boolean;
        exportBackground: boolean;
        exportEmbedScene: boolean;
        exportWithDarkMode: boolean;
        exportScale: number;
        currentItemStrokeColor: string;
        currentItemBackgroundColor: string;
        currentItemFillStyle: import("../../element/types").FillStyle;
        currentItemStrokeWidth: number;
        currentItemStrokeStyle: import("../../element/types").StrokeStyle;
        currentItemRoughness: number;
        currentItemOpacity: number;
        currentItemFontFamily: number;
        currentItemFontSize: number;
        currentItemTextAlign: import("../../element/types").TextAlign;
        currentItemStrokeSharpness: import("../../element/types").StrokeSharpness;
        currentItemStartArrowhead: import("../../element/types").Arrowhead | null;
        currentItemEndArrowhead: import("../../element/types").Arrowhead | null;
        currentItemLinearStrokeSharpness: import("../../element/types").StrokeSharpness;
        viewBackgroundColor: string;
        cursorButton: "up" | "down";
        scrolledOutside: boolean;
        openMenu: "canvas" | "shape" | null;
        lastPointerDownWith: import("../../element/types").PointerType;
        selectedElementIds: {
            [id: string]: boolean;
        };
        previousSelectedElementIds: {
            [id: string]: boolean;
        };
        shouldCacheIgnoreZoom: boolean;
        zenModeEnabled: boolean;
        gridSize: number | null;
        selectedGroupIds: {
            [groupId: string]: boolean;
        };
        editingGroupId: string | null;
        showStats: boolean;
        currentChartType: import("../../element/types").ChartType;
        isLoading: boolean;
        errorMessage: string | null;
        draggingElement: import("../../element/types").NonDeletedExcalidrawElement | null;
        resizingElement: import("../../element/types").NonDeletedExcalidrawElement | null;
        multiElement: import("../../element/types").NonDeleted<import("../../element/types").ExcalidrawLinearElement> | null;
        selectionElement: import("../../element/types").NonDeletedExcalidrawElement | null;
        isBindingEnabled: boolean;
        startBoundElement: import("../../element/types").NonDeleted<import("../../element/types").ExcalidrawBindableElement> | null;
        suggestedBindings: import("../../element/binding").SuggestedBinding[];
        editingElement: import("../../element/types").NonDeletedExcalidrawElement | null;
        editingLinearElement: import("../../element/linearElementEditor").LinearElementEditor | null;
        isResizing: boolean;
        isRotating: boolean;
        openPopup: "canvasColorPicker" | "backgroundColorPicker" | "strokeColorPicker" | null;
        showHelpDialog: boolean;
        toastMessage: string | null;
        viewModeEnabled: boolean;
        isLibraryOpen: boolean;
        fileHandle: import("browser-fs-access").FileSystemHandle | null;
        collaborators: Map<string, import("../../types").Collaborator>;
        pasteDialog: {
            shown: false;
            data: null;
        } | {
            shown: true;
            data: import("../../charts").Spreadsheet;
        };
        pendingImageElement: import("../../element/types").NonDeleted<import("../../element/types").ExcalidrawImageElement> | null;
    } | null;
};
export declare const getElementsStorageSize: () => number;
export declare const getTotalStorageSize: () => number;
