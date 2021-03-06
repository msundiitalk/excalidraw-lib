import { AppState, BinaryFiles } from "../types";
import { ExcalidrawElement, NonDeleted } from "../element/types";
declare type ExportOpts = {
    elements: readonly NonDeleted<ExcalidrawElement>[];
    appState?: Partial<Omit<AppState, "offsetTop" | "offsetLeft">>;
    files: BinaryFiles | null;
    getDimensions?: (width: number, height: number) => {
        width: number;
        height: number;
        scale: number;
    };
};
export declare const exportToCanvas: ({ elements, appState, files, getDimensions, }: ExportOpts) => Promise<HTMLCanvasElement>;
export declare const exportToBlob: (opts: ExportOpts & {
    mimeType?: string;
    quality?: number;
}) => Promise<Blob | null>;
export declare const exportToSvg: ({ elements, appState, files, exportPadding, }: Omit<ExportOpts, "getDimensions"> & {
    exportPadding?: number | undefined;
}) => Promise<SVGSVGElement>;
export { serializeAsJSON } from "../data/json";
export { loadFromBlob, loadLibraryFromBlob } from "../data/blob";
export { getFreeDrawSvgPath } from "../renderer/renderElement";
