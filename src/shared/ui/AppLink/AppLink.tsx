import cls from './AppLink.module.scss';
import {classNames} from "shared/lib/classNames";
import {Link, LinkProps} from "react-router-dom";
import {FC} from "react";

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {className, children, to, theme = AppLinkTheme.PRIMARY, ...otherProps} = props;

    return (
        <Link to={to} className={classNames(cls.AppLink, {}, [className, cls[theme]])} {...otherProps}>
            {children}
        </Link>
    );
};
