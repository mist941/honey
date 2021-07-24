import React, {AnchorHTMLAttributes, DetailedHTMLProps} from 'react';
import {Link, useRouteMatch} from 'react-router-dom';
import styles from './style.module.scss';
import classNames from 'classnames';

interface SubLinkProps extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement> {
  to: string;
  isActive?: boolean;
}

export const SubLink = ({children, to, isActive}: SubLinkProps) => {
  let {url} = useRouteMatch();
  const finalClassName = classNames(
    styles['sub_link'],
    styles[`sub_link_${isActive && 'active'}`],
  );

  return <Link className={finalClassName} to={`${url}/${to}`}>{children}</Link>;
};
