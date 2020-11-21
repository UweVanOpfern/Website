import React, {FC} from 'react';
import clsx from 'clsx';

import {returnSrcUrl} from 'utils/urls';
import './Avatar.scss';

interface ComponentProps {
  alt: string;
  className?: string;
  size: number;
  src: string;
}

const Avatar: FC<ComponentProps> = ({alt, className, size, src}) => {
  const source = returnSrcUrl(src, size);
  return <img alt={alt} className={clsx('Avatar', className)} height={size} loading="lazy" src={source} width={size} />;
};

export default Avatar;
