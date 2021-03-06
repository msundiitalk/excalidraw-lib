import Library from "../data/library";
import { LibraryItem, AppState, BinaryFiles, ExcalidrawProps } from "../types";
import "./LibraryMenu.scss";
export declare const LibraryMenu: ({ onClose, onInsertShape, pendingElements, onAddToLibrary, theme, setAppState, files, libraryReturnUrl, focusContainer, library, id, appState, }: {
    pendingElements: LibraryItem["elements"];
    onClose: () => void;
    onInsertShape: (elements: LibraryItem["elements"]) => void;
    onAddToLibrary: () => void;
    theme: AppState["theme"];
    files: BinaryFiles;
    setAppState: React.Component<any, AppState>["setState"];
    libraryReturnUrl: ExcalidrawProps["libraryReturnUrl"];
    focusContainer: () => void;
    library: Library;
    id: string;
    appState: AppState;
}) => JSX.Element | null;
