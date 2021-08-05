import {ButtonProps} from './Button.props';
import cn from 'classnames';
import styles from './Button.module.css';

export const Button = ({type, children}: ButtonProps): JSX.Element => {
    return(
        <button className={cn(styles.root, styles[type])}>
            {children}
        </button>
    );
}