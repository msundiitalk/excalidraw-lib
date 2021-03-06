import React from "react";
import { RoughCanvas } from "roughjs/bin/canvas";
import { ActionManager } from "../actions/manager";
import { ExcalidrawElement } from "../element/types";
import History from "../history";
import { AppClassProperties, AppProps, AppState, ExcalidrawImperativeAPI, BinaryFiles, LibraryItems, SceneData } from "../types";
export declare const useIsMobile: () => boolean;
export declare const useExcalidrawContainer: () => {
    container: HTMLDivElement | null;
    id: string | null;
};
declare class App extends React.Component<AppProps, AppState> {
    canvas: AppClassProperties["canvas"];
    rc: RoughCanvas | null;
    unmounted: boolean;
    actionManager: ActionManager;
    isMobile: boolean;
    detachIsMobileMqHandler?: () => void;
    private excalidrawContainerRef;
    static defaultProps: Partial<AppProps>;
    private scene;
    private resizeObserver;
    private nearestScrollableContainer;
    library: AppClassProperties["library"];
    libraryItemsFromStorage: LibraryItems | undefined;
    private id;
    private history;
    private excalidrawContainerValue;
    files: BinaryFiles;
    imageCache: AppClassProperties["imageCache"];
    constructor(props: AppProps);
    private renderCanvas;
    render(): JSX.Element;
    focusContainer: AppClassProperties["focusContainer"];
    getSceneElementsIncludingDeleted: () => readonly ExcalidrawElement[];
    getSceneElements: () => readonly import("../element/types").NonDeletedExcalidrawElement[];
    private syncActionResult;
    private onBlur;
    private onUnload;
    private disableEvent;
    private onFontLoaded;
    private importLibraryFromUrl;
    private resetHistory;
    /**
     * Resets scene & history.
     * ! Do not use to clear scene user action !
     */
    private resetScene;
    private initializeScene;
    componentDidMount(): Promise<void>;
    componentWillUnmount(): void;
    private onResize;
    private removeEventListeners;
    private addEventListeners;
    componentDidUpdate(prevProps: AppProps, prevState: AppState): void;
    private onScroll;
    private onCut;
    private onCopy;
    private cutAll;
    private copyAll;
    private static resetTapTwice;
    private onTapStart;
    private onTapEnd;
    private pasteFromClipboard;
    private addElementsFromPasteOrLibrary;
    private addTextFromPaste;
    setAppState: (obj: any) => void;
    removePointer: (event: React.PointerEvent<HTMLElement> | PointerEvent) => void;
    toggleLock: () => void;
    toggleZenMode: () => void;
    scrollToContent: (target?: ExcalidrawElement | readonly ExcalidrawElement[]) => void;
    clearToast: () => void;
    setToastMessage: (toastMessage: string) => void;
    restoreFileFromShare: () => Promise<void>;
    /** adds supplied files to existing files in the appState */
    addFiles: ExcalidrawImperativeAPI["addFiles"];
    updateScene: <K extends keyof AppState>(sceneData: {
        elements?: SceneData["elements"];
        appState?: Pick<AppState, K> | null | undefined;
        collaborators?: SceneData["collaborators"];
        commitToHistory?: SceneData["commitToHistory"];
    }) => void;
    private onSceneUpdated;
    private updateCurrentCursorPosition;
    private onKeyDown;
    private onKeyUp;
    private selectShapeTool;
    private onGestureStart;
    private onGestureChange;
    private onGestureEnd;
    private handleTextWysiwyg;
    private deselectElements;
    private getTextElementAtPosition;
    private getElementAtPosition;
    private getElementsAtPosition;
    private startTextEditing;
    private handleCanvasDoubleClick;
    private handleCanvasPointerMove;
    private handleTouchMove;
    private handleCanvasPointerDown;
    private maybeOpenContextMenuAfterPointerDownOnTouchDevices;
    private maybeCleanupAfterMissingPointerUp;
    private handleCanvasPanUsingWheelOrSpaceDrag;
    private updateGestureOnPointerDown;
    private initialPointerDownState;
    private handleDraggingScrollBar;
    private clearSelectionIfNotUsingSelection;
    /**
     * @returns whether the pointer event has been completely handled
     */
    private handleSelectionOnPointerDown;
    private isASelectedElement;
    private isHittingCommonBoundingBoxOfSelectedElements;
    private handleTextOnPointerDown;
    private handleFreeDrawElementOnPointerDown;
    private createImageElement;
    private handleLinearElementOnPointerDown;
    private createGenericElementOnPointerDown;
    private onKeyDownFromPointerDownHandler;
    private onKeyUpFromPointerDownHandler;
    private onPointerMoveFromPointerDownHandler;
    private handlePointerMoveOverScrollbars;
    private onPointerUpFromPointerDownHandler;
    private initializeImage;
    /**
     * inserts image into elements array and rerenders
     */
    private insertImageElement;
    private setImagePreviewCursor;
    private onImageAction;
    private initializeImageDimensions;
    /** updates image cache, refreshing updated elements and/or setting status
        to error for images that fail during <img> element creation */
    private updateImageCache;
    /** adds new images to imageCache and re-renders if needed */
    private addNewImagesToImageCache;
    /** generally you should use `addNewImagesToImageCache()` directly if you need
     *  to render new images. This is just a failsafe  */
    private scheduleImageRefresh;
    private updateBindingEnabledOnPointerMove;
    private maybeSuggestBindingAtCursor;
    private maybeSuggestBindingForLinearElementAtCursor;
    private maybeSuggestBindingForAll;
    private clearSelection;
    private handleCanvasRef;
    private handleAppOnDrop;
    loadFileToCanvas: (file: Blob) => void;
    private handleCanvasContextMenu;
    private maybeDragNewGenericElement;
    private maybeHandleResize;
    /** @private use this.handleCanvasContextMenu */
    private _openContextMenu;
    private handleWheel;
    private getTextWysiwygSnappedToCenterPosition;
    private savePointer;
    private resetShouldCacheIgnoreZoomDebounced;
    private updateDOMRect;
    refresh: () => void;
    private getCanvasOffsets;
    private updateLanguage;
}
declare global {
    interface Window {
        h: {
            elements: readonly ExcalidrawElement[];
            state: AppState;
            setState: React.Component<any, AppState>["setState"];
            app: InstanceType<typeof App>;
            history: History;
        };
    }
}
export default App;
