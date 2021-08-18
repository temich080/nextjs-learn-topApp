import {ButtonProps} from './Button.props';
import cn from 'classnames';
import styles from './Button.module.css';

export const Button = ({type, children, className, ...props}: ButtonProps): JSX.Element => {
    return(
        <button className={cn(styles.root, styles[type], className)} {...props}>
            {children}
        </button>
    );
}