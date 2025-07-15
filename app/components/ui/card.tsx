import * as React from "react"

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`rounded-xl border bg-white text-black shadow p-6 ${className}`}
        {...props}
      />
    )
  }
)
Card.displayName = "Card"

export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`pt-0 ${className}`}
        {...props}
      />
    )
  }
)
CardContent.displayName = "CardContent"
