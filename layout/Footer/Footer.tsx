import {FooterProps} from "./Footer.props";
import styles from './Footer.module.css';
import cn from 'classnames';

export const Footer = ({className, ...props}: FooterProps): JSX.Element => {
    return (
        <div
            className={cn(styles.footer, className)}
            {...props}
        >
            Footer
        </div>
    );
}