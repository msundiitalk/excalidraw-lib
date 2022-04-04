/// <reference types="socket.io-client" />
import { ExcalidrawElement, FileId } from "../../element/types";
import Portal from "../collab/Portal";
import { BinaryFileData } from "../../types";
export declare const loadFirebaseStorage: () => Promise<typeof import("firebase/app").default>;
export declare const isSavedToFirebase: (portal: Portal, elements: readonly ExcalidrawElement[]) => boolean;
export declare const saveFilesToFirebase: ({ prefix, files, }: {
    prefix: string;
    files: {
        id: FileId;
        buffer: Uint8Array;
    }[];
}) => Promise<{
    savedFiles: Map<FileId, true>;
    erroredFiles: Map<FileId, true>;
}>;
export declare const saveToFirebase: (portal: Portal, elements: readonly ExcalidrawElement[]) => Promise<boolean>;
export declare const loadFromFirebase: (roomId: string, roomKey: string, socket: SocketIOClient.Socket | null) => Promise<readonly ExcalidrawElement[] | null>;
export declare const loadFilesFromFirebase: (prefix: string, decryptionKey: string, filesIds: readonly FileId[]) => Promise<{
    loadedFiles: BinaryFileData[];
    erroredFiles: Map<FileId, true>;
}>;
