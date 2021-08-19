import {PTagProps} from "./PTag.props";
import styles from './PTag.module.css';
import cn from 'classnames';

export const PTag = ({size, children, className, ...props}: PTagProps): JSX.Element => {
    return (
        <p
            className={cn(styles.p, className, {
                [styles.small]: size === 'small',
                [styles.medium]: size === 'medium',
                [styles.large]: size === 'large',
            })}
            {...props}
        >
            {children}
        </p>
    );
}