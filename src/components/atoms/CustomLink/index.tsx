import React, {AnchorHTMLAttributes, DetailedHTMLProps} from 'react';
import {Link} from 'react-router-dom';
import styles from './style.module.scss';
import classNames from 'classnames';

type Presets =
  | 'nav'
  | 'gradient';

interface CustomLinkProps extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement> {
  to: string;
  preset: Presets;
  isActive?: boolean;
  isOriginalLink?: boolean;
}

export const CustomLink = ({children, to, preset, isActive, isOriginalLink = false}: CustomLinkProps) => {
  const finalClassName = classNames(
    styles['link'],
    styles[`link_${preset}`],
    styles[`link_${isActive && 'active'}`],
  );

  if (isOriginalLink) return <a className={finalClassName} href={to}>{children}</a>;

  return <Link className={finalClassName} to={to}>{children}</Link>;
};
