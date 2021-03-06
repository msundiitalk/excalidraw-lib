import { RoughCanvas } from "roughjs/bin/canvas";
import { RoughSVG } from "roughjs/bin/svg";
import { AppState, BinaryFiles } from "../types";
import { NonDeletedExcalidrawElement } from "../element/types";
import { SceneState } from "../scene/types";
export declare const renderScene: (elements: readonly NonDeletedExcalidrawElement[], appState: AppState, selectionElement: NonDeletedExcalidrawElement | null, scale: number, rc: RoughCanvas, canvas: HTMLCanvasElement, sceneState: SceneState, { renderScrollbars, renderSelection, renderOptimizations, renderGrid, isExport, }?: {
    renderScrollbars?: boolean | undefined;
    renderSelection?: boolean | undefined;
    renderOptimizations?: boolean | undefined;
    renderGrid?: boolean | undefined;
    isExport?: boolean | undefined;
}) => {
    atLeastOneVisibleElement: boolean;
    scrollBars?: undefined;
} | {
    atLeastOneVisibleElement: boolean;
    scrollBars: import("../scene/types").ScrollBars | undefined;
};
export declare const renderSceneToSvg: (elements: readonly NonDeletedExcalidrawElement[], rsvg: RoughSVG, svgRoot: SVGElement, files: BinaryFiles, { offsetX, offsetY, exportWithDarkMode, }?: {
    offsetX?: number | undefined;
    offsetY?: number | undefined;
    exportWithDarkMode?: boolean | undefined;
}) => void;
