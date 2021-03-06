import { ALLOWED_IMAGE_MIME_TYPES, MIME_TYPES } from "../constants";
import { ExcalidrawElement, FileId } from "../element/types";
import { AppState, DataURL } from "../types";
import { FileSystemHandle } from "./filesystem";
import { ImportedLibraryData } from "./types";
export declare const getMimeType: (blob: Blob | string) => string;
export declare const getFileHandleType: (handle: FileSystemHandle | null) => string | null;
export declare const isImageFileHandleType: (type: string | null) => type is "svg" | "png";
export declare const isImageFileHandle: (handle: FileSystemHandle | null) => boolean;
export declare const isSupportedImageFile: (blob: Blob | null | undefined) => blob is Blob & {
    type: typeof ALLOWED_IMAGE_MIME_TYPES[number];
};
export declare const loadFromBlob: (blob: Blob, localAppState: AppState | null, localElements: readonly ExcalidrawElement[] | null) => Promise<import("./restore").RestoredDataState>;
export declare const loadLibraryFromBlob: (blob: Blob) => Promise<ImportedLibraryData>;
export declare const canvasToBlob: (canvas: HTMLCanvasElement) => Promise<Blob>;
/** generates SHA-1 digest from supplied file (if not supported, falls back
    to a 40-char base64 random id) */
export declare const generateIdFromFile: (file: File) => Promise<FileId>;
export declare const getDataURL: (file: Blob | File) => Promise<DataURL>;
export declare const dataURLToFile: (dataURL: DataURL, filename?: string) => File;
export declare const resizeImageFile: (file: File, maxWidthOrHeight: number) => Promise<File>;
export declare const SVGStringToFile: (SVGString: string, filename?: string) => File & {
    type: typeof MIME_TYPES.svg;
};
