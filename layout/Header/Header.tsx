import {HeaderProps} from "./Header.props";
import styles from './Header.module.css';
import cn from 'classnames';

export const Header = ({className, ...props}: HeaderProps): JSX.Element => {
    return (
        <div
            className={cn(styles.header, className)}
            {...props}
        >
            Header
        </div>
    );
}