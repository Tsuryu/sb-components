/// <reference types="react" />
import "./label.css";
export interface Props {
    /**
     * Should capitalize
     */
    allCaps?: boolean;
    /**
     * Text color
     */
    color?: "primary" | "secondary" | "tertiary";
    /**
     * Non-generic text color
     */
    customFontColor?: string;
    /**
     * Text to show
     */
    label?: string;
    /**
     * How important it is
     */
    size?: "normal" | "h1" | "h2" | "h3";
}
export declare const Label: ({ allCaps, color, customFontColor, label, size, }: Props) => JSX.Element;
