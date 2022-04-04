/// <reference types="socket.io-client" />
/// <reference types="lodash" />
import { SocketUpdateData, SocketUpdateDataSource } from "../data";
import CollabWrapper from "./CollabWrapper";
import { ExcalidrawElement } from "../../element/types";
import { SCENE } from "../app_constants";
import { UserIdleState } from "../../types";
declare class Portal {
    collab: CollabWrapper;
    socket: SocketIOClient.Socket | null;
    socketInitialized: boolean;
    roomId: string;
    roomKey: string;
    broadcastedElementVersions: Map<string, number>;
    constructor(collab: CollabWrapper);
    open(socket: SocketIOClient.Socket, id: string, key: string): void;
    close(): void;
    isOpen(): boolean;
    _broadcastSocketData(data: SocketUpdateData, volatile?: boolean): Promise<void>;
    queueFileUpload: import("lodash").DebouncedFunc<() => Promise<void>>;
    broadcastScene: (sceneType: SCENE.INIT | SCENE.UPDATE, allElements: readonly ExcalidrawElement[], syncAll: boolean) => Promise<void>;
    broadcastIdleChange: (userState: UserIdleState) => Promise<void> | undefined;
    broadcastMouseLocation: (payload: {
        pointer: SocketUpdateDataSource["MOUSE_LOCATION"]["payload"]["pointer"];
        button: SocketUpdateDataSource["MOUSE_LOCATION"]["payload"]["button"];
    }) => Promise<void> | undefined;
}
export default Portal;
