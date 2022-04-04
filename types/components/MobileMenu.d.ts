import React from "react";
import { AppState } from "../types";
import { ActionManager } from "../actions/manager";
import { NonDeletedExcalidrawElement } from "../element/types";
declare type MobileMenuProps = {
    appState: AppState;
    actionManager: ActionManager;
    renderImageExportDialog: () => React.ReactNode;
    setAppState: React.Component<any, AppState>["setState"];
    elements: readonly NonDeletedExcalidrawElement[];
    libraryMenu: JSX.Element | null;
    onCollabButtonClick?: () => void;
    onLockToggle: () => void;
    canvas: HTMLCanvasElement | null;
    isCollaborating: boolean;
    renderCustomFooter?: (isMobile: boolean, appState: AppState) => JSX.Element;
    viewModeEnabled: boolean;
    showThemeBtn: boolean;
    onImageAction: (data: {
        insertOnCanvasDirectly: boolean;
    }) => void;
    renderTopRightUI?: (isMobile: boolean, appState: AppState) => JSX.Element | null;
};
export declare const MobileMenu: ({ appState, elements, libraryMenu, actionManager, renderImageExportDialog, setAppState, onCollabButtonClick, onLockToggle, canvas, isCollaborating, renderCustomFooter, viewModeEnabled, showThemeBtn, onImageAction, renderTopRightUI, }: MobileMenuProps) => JSX.Element;
export {};
