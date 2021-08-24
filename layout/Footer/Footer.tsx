import {FooterProps} from "./Footer.props";
import styles from './Footer.module.css';
import cn from 'classnames';
import {format} from 'date-fns';

export const Footer = ({className, ...props}: FooterProps): JSX.Element => {
    return (
        <div
            className={cn(styles.footer, className)}
            {...props}
        >
            <div className={cn(styles.copyright)}>OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены</div>
            <div className={cn(styles.links)}>
                <a href="/">Пользовательское соглашение</a>
                <a href="/">Политика конфиденциальности</a>
            </div>
        </div>
    );
}