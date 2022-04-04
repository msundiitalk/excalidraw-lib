import { ImportedDataState } from "../../data/types";
import { ExcalidrawElement } from "../../element/types";
import { AppState, BinaryFiles, UserIdleState } from "../../types";
export declare const SOCKET_SERVER: string;
export declare type EncryptedData = {
    data: ArrayBuffer;
    iv: Uint8Array;
};
export declare type SocketUpdateDataSource = {
    SCENE_INIT: {
        type: "SCENE_INIT";
        payload: {
            elements: readonly ExcalidrawElement[];
        };
    };
    SCENE_UPDATE: {
        type: "SCENE_UPDATE";
        payload: {
            elements: readonly ExcalidrawElement[];
        };
    };
    MOUSE_LOCATION: {
        type: "MOUSE_LOCATION";
        payload: {
            socketId: string;
            pointer: {
                x: number;
                y: number;
            };
            button: "down" | "up";
            selectedElementIds: AppState["selectedElementIds"];
            username: string;
        };
    };
    IDLE_STATUS: {
        type: "IDLE_STATUS";
        payload: {
            socketId: string;
            userState: UserIdleState;
            username: string;
        };
    };
};
export declare type SocketUpdateDataIncoming = SocketUpdateDataSource[keyof SocketUpdateDataSource] | {
    type: "INVALID_RESPONSE";
};
export declare type SocketUpdateData = SocketUpdateDataSource[keyof SocketUpdateDataSource] & {
    _brand: "socketUpdateData";
};
export declare const getCollaborationLinkData: (link: string) => {
    roomId: string;
    roomKey: string;
} | null;
export declare const generateCollaborationLinkData: () => Promise<{
    roomId: string;
    roomKey: string;
}>;
export declare const getCollaborationLink: (data: {
    roomId: string;
    roomKey: string;
}) => string;
export declare const loadScene: (id: string | null, privateKey: string | null, localDataState: ImportedDataState | undefined | null) => Promise<{
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
        isResizing: boolean;
        isRotating: boolean;
        openMenu: "canvas" | "shape" | null;
        openPopup: "canvasColorPicker" | "backgroundColorPicker" | "strokeColorPicker" | null;
        lastPointerDownWith: import("../../element/types").PointerType;
        selectedElementIds: {
            [id: string]: boolean;
        };
        previousSelectedElementIds: {
            [id: string]: boolean;
        };
        shouldCacheIgnoreZoom: boolean;
        showHelpDialog: boolean;
        toastMessage: string | null;
        zenModeEnabled: boolean;
        gridSize: number | null;
        viewModeEnabled: boolean;
        selectedGroupIds: {
            [groupId: string]: boolean;
        };
        editingGroupId: string | null;
        isLibraryOpen: boolean;
        fileHandle: import("browser-fs-access").FileSystemHandle | null;
        collaborators: Map<string, import("../../types").Collaborator>;
        showStats: boolean;
        currentChartType: import("../../element/types").ChartType;
        pasteDialog: {
            shown: false;
            data: null;
        } | {
            shown: true;
            data: import("../../charts").Spreadsheet;
        };
        pendingImageElement: import("../../element/types").NonDeleted<import("../../element/types").ExcalidrawImageElement> | null;
    };
    files: BinaryFiles;
    commitToHistory: boolean;
}>;
export declare const exportToBackend: (elements: readonly ExcalidrawElement[], appState: AppState, files: BinaryFiles) => Promise<void>;
