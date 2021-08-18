import {ButtonHTMLAttributes, DetailedHTMLProps, ReactNode} from "react";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    type: 'primary' | 'secondary',
    children: ReactNode
}
