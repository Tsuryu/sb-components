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

export const Label = ({
  allCaps,
  color = "primary",
  customFontColor,
  label = "No Label",
  size = "normal",
}: Props) => {
  return (
    <span
      className={`label ${size} text-${color}`}
      style={{ color: customFontColor }}
    >
      {allCaps ? label.toLocaleUpperCase() : label}
    </span>
  );
};

export default Label;
