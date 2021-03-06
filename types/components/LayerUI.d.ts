import React from "react";
import { ActionManager } from "../actions/manager";
import { NonDeletedExcalidrawElement } from "../element/types";
import { Language } from "../i18n";
import { AppProps, AppState, ExcalidrawProps, BinaryFiles } from "../types";
import "./LayerUI.scss";
import Library from "../data/library";
interface LayerUIProps {
    actionManager: ActionManager;
    appState: AppState;
    files: BinaryFiles;
    canvas: HTMLCanvasElement | null;
    setAppState: React.Component<any, AppState>["setState"];
    elements: readonly NonDeletedExcalidrawElement[];
    onCollabButtonClick?: () => void;
    onLockToggle: () => void;
    onInsertElements: (elements: readonly NonDeletedExcalidrawElement[]) => void;
    zenModeEnabled: boolean;
    showExitZenModeBtn: boolean;
    showThemeBtn: boolean;
    toggleZenMode: () => void;
    langCode: Language["code"];
    isCollaborating: boolean;
    renderTopRightUI?: (isMobile: boolean, appState: AppState) => JSX.Element | null;
    renderCustomFooter?: (isMobile: boolean, appState: AppState) => JSX.Element;
    viewModeEnabled: boolean;
    libraryReturnUrl: ExcalidrawProps["libraryReturnUrl"];
    UIOptions: AppProps["UIOptions"];
    focusContainer: () => void;
    library: Library;
    id: string;
    onImageAction: (data: {
        insertOnCanvasDirectly: boolean;
    }) => void;
}
declare const _default: React.MemoExoticComponent<({ actionManager, appState, files, setAppState, canvas, elements, onCollabButtonClick, onLockToggle, onInsertElements, zenModeEnabled, showExitZenModeBtn, showThemeBtn, toggleZenMode, isCollaborating, renderTopRightUI, renderCustomFooter, viewModeEnabled, libraryReturnUrl, UIOptions, focusContainer, library, id, onImageAction, }: LayerUIProps) => JSX.Element>;
export default _default;
