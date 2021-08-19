import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface PTagProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>{
    size?: 'small' | 'medium' | 'large',
    className?: string,
    children: ReactNode,
}