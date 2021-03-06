import { NonDeletedExcalidrawElement } from "../element/types";
import "./HintViewer.scss";
import { AppState } from "../types";
interface HintViewerProps {
    appState: AppState;
    elements: readonly NonDeletedExcalidrawElement[];
    isMobile: boolean;
}
export declare const HintViewer: ({ appState, elements, isMobile, }: HintViewerProps) => JSX.Element | null;
export {};
