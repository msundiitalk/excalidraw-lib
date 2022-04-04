import "./ToolIcon.scss";
declare type LockIconProps = {
    title?: string;
    name?: string;
    checked: boolean;
    onChange?(): void;
    zenModeEnabled?: boolean;
};
export declare const LockButton: (props: LockIconProps) => JSX.Element;
export {};
