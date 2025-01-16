import { ReactNode } from "react"

export default interface ButtonProps {
    buttonLabel: string
    buttonSize?: string
    buttonBackgroundColor?: 'red' | 'blue' | 'orange' | 'green'
    action?: () => void
  }

  export default interface LayoutProps {
    children: ReactNode;
  }


export interface PageRouteProps {
  pageRoute: string;
}
