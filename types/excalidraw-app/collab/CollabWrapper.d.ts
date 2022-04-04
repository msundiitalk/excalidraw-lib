/// <reference types="lodash" />
import { PureComponent } from "react";
import { ExcalidrawImperativeAPI } from "../../types";
import { ImportedDataState } from "../../data/types";
import { ExcalidrawElement } from "../../element/types";
import { Gesture } from "../../types";
import { SocketUpdateDataSource } from "../data";
import Portal from "./Portal";
import { UserIdleState } from "../../types";
import { FileManager } from "../data/FileManager";
interface CollabState {
    modalIsShown: boolean;
    errorMessage: string;
    username: string;
    userState: UserIdleState;
    activeRoomLink: string;
}
declare type CollabInstance = InstanceType<typeof CollabWrapper>;
export interface CollabAPI {
    /** function so that we can access the latest value from stale callbacks */
    isCollaborating: () => boolean;
    username: CollabState["username"];
    userState: CollabState["userState"];
    onPointerUpdate: CollabInstance["onPointerUpdate"];
    initializeSocketClient: CollabInstance["initializeSocketClient"];
    onCollabButtonClick: CollabInstance["onCollabButtonClick"];
    broadcastElements: CollabInstance["broadcastElements"];
    setUserName: CollabInstance["onUsernameChange"];
    fetchImageFilesFromFirebase: CollabInstance["fetchImageFilesFromFirebase"];
}
interface Props {
    excalidrawAPI: ExcalidrawImperativeAPI;
    onRoomClose?: () => void;
}
declare const CollabContext: import("react").Context<{
    api: CollabAPI | null;
}> & {
    _updateProviderValue?: ((value: {
        api: CollabAPI | null;
    }) => void) | undefined;
}, CollabContextConsumer: import("react").Component<{}, {}, any>;
export { CollabContext, CollabContextConsumer };
declare class CollabWrapper extends PureComponent<Props, CollabState> {
    portal: Portal;
    fileManager: FileManager;
    excalidrawAPI: Props["excalidrawAPI"];
    isCollaborating: boolean;
    activeIntervalId: number | null;
    idleTimeoutId: number | null;
    private socketInitializationTimer?;
    private lastBroadcastedOrReceivedSceneVersion;
    private collaborators;
    constructor(props: Props);
    componentDidMount(): void;
    componentWillUnmount(): void;
    private onUnload;
    private beforeUnload;
    saveCollabRoomToFirebase: (syncableElements?: readonly ExcalidrawElement[]) => Promise<void>;
    openPortal: () => Promise<ImportedDataState | null>;
    closePortal: () => void;
    private destroySocketClient;
    private fetchImageFilesFromFirebase;
    private decryptPayload;
    private initializeSocketClient;
    private initializeSocket;
    private reconcileElements;
    private loadImageFiles;
    private handleRemoteSceneUpdate;
    private onPointerMove;
    private onVisibilityChange;
    private reportIdle;
    private reportActive;
    private initializeIdleDetector;
    setCollaborators(sockets: string[]): void;
    setLastBroadcastedOrReceivedSceneVersion: (version: number) => void;
    getLastBroadcastedOrReceivedSceneVersion: () => number;
    getSceneElementsIncludingDeleted: () => readonly ExcalidrawElement[];
    onPointerUpdate: (payload: {
        pointer: SocketUpdateDataSource["MOUSE_LOCATION"]["payload"]["pointer"];
        button: SocketUpdateDataSource["MOUSE_LOCATION"]["payload"]["button"];
        pointersMap: Gesture["pointers"];
    }) => void;
    onIdleStateChange: (userState: UserIdleState) => void;
    broadcastElements: (elements: readonly ExcalidrawElement[]) => void;
    queueBroadcastAllElements: import("lodash").DebouncedFunc<() => void>;
    handleClose: () => void;
    onUsernameChange: (username: string) => void;
    onCollabButtonClick: () => void;
    isSyncableElement: (element: ExcalidrawElement) => boolean;
    getSyncableElements: (elements: readonly ExcalidrawElement[]) => ExcalidrawElement[];
    /** PRIVATE. Use `this.getContextValue()` instead. */
    private contextValue;
    /** Getter of context value. Returned object is stable. */
    getContextValue: () => CollabAPI;
    render(): JSX.Element;
}
declare global {
    interface Window {
        collab: InstanceType<typeof CollabWrapper>;
    }
}
export default CollabWrapper;
