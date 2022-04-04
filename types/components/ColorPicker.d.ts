import "./ColorPicker.scss";
export declare const ColorPicker: ({ type, color, onChange, label, isActive, setActive, top, }: {
    type: "canvasBackground" | "elementBackground" | "elementStroke";
    color: string | null;
    onChange: (color: string) => void;
    label: string;
    isActive: boolean;
    setActive: (active: boolean) => void;
    top?: number | undefined;
}) => JSX.Element;
