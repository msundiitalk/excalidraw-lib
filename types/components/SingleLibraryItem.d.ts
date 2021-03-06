import { AppState, LibraryItem } from "../types";
import "./SingleLibraryItem.scss";
declare const SingleLibraryItem: ({ libItem, appState, index, onChange, onRemove, }: {
    libItem: LibraryItem;
    appState: AppState;
    index: number;
    onChange: (val: string, index: number) => void;
    onRemove: (id: string) => void;
}) => JSX.Element;
export default SingleLibraryItem;
