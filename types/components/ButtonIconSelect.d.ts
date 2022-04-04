export declare const ButtonIconSelect: <T extends Object>({ options, value, onChange, group, }: {
    options: {
        value: T;
        text: string;
        icon: JSX.Element;
    }[];
    value: T | null;
    onChange: (value: T) => void;
    group: string;
}) => JSX.Element;
