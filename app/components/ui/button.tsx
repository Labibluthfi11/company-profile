import * as React from "react"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "md" | "lg"
  variant?: "default" | "outline"
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", size = "md", variant = "default", ...props }, ref) => {
    const base = "px-4 py-2 rounded-md transition-colors font-medium"
    const sizeClass = {
      sm: "text-sm py-1 px-3",
      md: "text-base py-2 px-4",
      lg: "text-lg py-3 px-6",
    }[size]

    const variantClass = {
      default: "bg-blue-600 text-white hover:bg-blue-700",
      outline: "border border-white text-white hover:bg-white hover:text-gray-900 bg-transparent",
    }[variant]

    return (
      <button
        ref={ref}
        className={`${base} ${sizeClass} ${variantClass} ${className}`}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"
