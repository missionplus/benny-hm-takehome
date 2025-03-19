/** @jsxImportSource nativewind */
import { Platform, Text, TextProps } from "react-native";
import { cva, type VariantProps } from "class-variance-authority";

const typographyVariants = cva(Platform.OS === "web" ? "" : "font-inter", {
  variants: {
    variant: {
      header: "text-[32px] font-[700] leading-[40px]",
      body: "text-[16px] font-[400] leading-[24px]",
      label: "text-[14px] font-[400]",
      title: "text-[18px] font-[700]",
      subtitle: "text-[14px] font-[400] leading-[20px] opacity-50",
    },
    color: {
      white: "text-[#FFFFFF]",
      primary: "text-[#802EFF]",
      secondary: "text-[#130739]",
      accent: "text-[#A164FF]",
      muted: "opacity-50 text-[#FFFFFF]",
    },
    textAlign: {
      center: "text-center",
      start: "text-start",
      right: "text-right",
      left: "text-left",
    },
  },
  defaultVariants: {
    variant: "header",
    color: "white",
    textAlign: "center",
  },
});

export interface TypographyProps
  extends VariantProps<typeof typographyVariants>,
    TextProps {
  children: React.ReactNode;
  className?: string;
}

export function Typography({
  children,
  variant,
  color,
  textAlign,
  className,
  ...props
}: TypographyProps) {
  return (
    <Text
      className={`${typographyVariants({ variant, color, textAlign })} ${
        className || ""
      }`}
      {...props}
    >
      {children}
    </Text>
  );
}

export function Header(props: Omit<TypographyProps, "variant">) {
  return <Typography variant="header" {...props} />;
}

export function Body(props: Omit<TypographyProps, "variant">) {
  return <Typography variant="body" {...props} />;
}

export function Label(props: Omit<TypographyProps, "variant">) {
  return <Typography variant="label" {...props} />;
}

export function Title(props: Omit<TypographyProps, "variant">) {
  return <Typography variant="title" {...props} />;
}

export function SubTitle(props: Omit<TypographyProps, "variant">) {
  return <Typography variant="subtitle" {...props} />;
}
