import {
  GestureResponderEvent,
  Platform,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import { cva, type VariantProps } from "class-variance-authority";
import { Body } from "../Typography";

const buttonVariants = cva("flex items-center justify-center", {
  variants: {
    variant: {
      primary: "bg-primary rounded-full",
      secondary: "bg-secondary rounded-full",
      outline: "bg-transparent border border-primary rounded-full",
      ghost: "bg-transparent",
    },
    size: {
      sm: "py-2 px-4 min-h-[36px]",
      md: "py-3 px-6 min-h-[40px]",
      lg: "py-4 px-8 min-h-[48px]",
    },
    fullWidth: {
      true: "w-full",
      false: "w-auto",
    },
    disabled: {
      true: "opacity-50",
      false: "opacity-100",
    },
  },
  compoundVariants: [
    {
      variant: "outline",
      className: "text-primary",
    },
    {
      variant: "ghost",
      className: "text-primary",
    },
  ],
  defaultVariants: {
    variant: "primary",
    size: "md",
    fullWidth: false,
    disabled: false,
  },
});

const textVariants = cva(
  `${Platform.OS === "web" ? "" : "font-inter"} text-center`,
  {
    variants: {
      variant: {
        primary: "text-white font-[600]",
        secondary: "text-white font-[600]",
        outline: "text-primary font-[500]",
        ghost: "text-primary font-[700]",
      },
      size: {
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
      },
      disabled: {
        true: "opacity-50",
        false: "opacity-100",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      disabled: false,
    },
  }
);

export interface ButtonProps
  extends VariantProps<typeof buttonVariants>,
    TouchableOpacityProps {
  text: string;
  onClick?: (event: GestureResponderEvent) => void;
  disabled?: boolean;
  accessibilityLabel?: string;
  rightIcon?: React.ReactNode;
}

export function Button({
  text,
  onClick,
  variant,
  size,
  fullWidth,
  disabled,
  accessibilityLabel,
  rightIcon = null,
}: ButtonProps) {
  return (
    <TouchableOpacity
      className={buttonVariants({ variant, size, fullWidth, disabled })}
      onPress={onClick}
      disabled={disabled}
      accessibilityLabel={accessibilityLabel || text}
      accessibilityRole="button"
    >
      <View className="flex flex-row items-center justify-center">
        {text && (
          <Body className={textVariants({ variant, size, disabled })}>
            {text}
          </Body>
        )}
        {rightIcon}
      </View>
    </TouchableOpacity>
  );
}
