import React, { useState } from "react";
import { styled } from "@mui/system";
import { Box } from "@mui/material";

const Label = styled("label")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    color: theme.palette.neutrals.black,
    marginBottom: "4px",
    ...theme.typography.p,
}));

const TextAreaElement = styled("textarea")(
    ({ theme, disabled, error, focused }) => ({
        width: "100%",
        outline: 0,
        fontFamily: theme.typography.fontFamily,
        ...theme.typography.p,
        padding: error ? "6px 2px 2px 10px" : "8px 4px 4px 12px",
        borderRadius: "8px",
        color: disabled
            ? theme.palette.neutrals.gray300
            : theme.palette.neutrals.silver,
        background: disabled ? theme.palette.neutrals.gray50 : "#FFFFFF",
        border: error ? "3px solid" : "1px solid",
        borderColor: error
            ? theme.palette.error[300]
            : disabled
              ? theme.palette.neutrals.gray300
              : focused
                ? theme.palette.secondary[500]
                : theme.palette.secondary[960],
        resize: "none",
        transition: "border-color 0s ease, padding 0s ease",
        "&:hover": {
            padding: disabled ? "8px 4px 4px 12px" : "6px 1.5px 1.5px 10px",
            marginBottom: disabled ? "0px" : "1.5px",
            border: disabled ? "1px solid" : "3px solid",
            borderColor: error
                ? theme.palette.error[300]
                : disabled
                  ? theme.palette.neutrals.gray300
                  : theme.palette.primary.main,
        },
        "&:focus": {
            padding: "6px 2px 2px 10px",
            border: "3px solid",
            borderColor: error
                ? theme.palette.error[300]
                : theme.palette.secondary[500],
            color: theme.palette.neutrals.silver,
        },
        "&:disabled": {
            color: theme.palette.neutrals.silver,
        },
        "&::placeholder": {
            opacity: 1,
            color: theme.palette.neutrals.silver,
        },
    })
);

/**
 * TextFieldArea
 *
 * A customizable textarea component with support for labels, hints,
 * error states, and accessibility features.
 *
 * Props:
 * - id: string - ID for accessibility and htmlFor association with label.
 * - label: string - Label text for the textarea.
 * - placeholder: string - Placeholder text when the textarea is empty.
 * - error: boolean - Indicates error state when true.
 * - hint: string - Hint or error message displayed below the textarea.
 * - disabled: boolean - Disables the textarea when true.
 * - value: string - Current value of the textarea.
 * - onChange: function - Event handler called when the textarea value changes.
 *
 * Usage:
 *
 * ```jsx
 * <TextFieldArea
 *     id="unique-id"
 *     label="Label Text"
 *     placeholder="Placeholder Text"
 *     error={false}
 *     hint="Hint or Message"
 *     disabled={false}
 *     value={textareaValue}
 *     onChange={(e) => setTextareaValue(e.target.value)}
 * />
 * ```
 *
 * Accessibility:
 * - Uses ARIA attributes aria-disabled, aria-invalid, aria-describedby for accessibility.
 * - Proper association of label and textarea using htmlFor and id.
 * - Provides visual and screen reader feedback for error, focus, and hover states.
 *
 * @param {object} props - Component props
 * @returns JSX.Element
 */
const TextFieldArea = ({
    id,
    label,
    placeholder,
    error,
    hint,
    disabled,
    value,
    onChange,
    sx,
}) => {
    const [focused, setFocused] = useState(false);
    const [hovered, setHovered] = useState(false);
    const [valueChanged, setValue] = useState("");
    return (
        <Box
            className="flex flex-col"
            sx={sx}
            aria-disabled={disabled} 
            aria-invalid={error} 
        >
            <Label htmlFor={"id"}>{label}</Label>
            <TextAreaElement
                id={id}
                placeholder={placeholder}
                error={error}
                disabled={disabled}
                value={value}
                onChange={onChange}
                rows={"3"}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                aria-disabled={disabled} 
                aria-invalid={error}
                aria-describedby={`${id}-hint`} 
            />
        </Box>
    );
};

export default TextFieldArea;
