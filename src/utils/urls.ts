import {getImageSizeBasedOnDeviceRatio} from './components';

export const getFirstPathParam = (path: string): string => path.split('/').filter((pathParam) => !!pathParam)[0];

export const returnSrcUrl = (src: string, size: number) => {
  const updatedSize = getImageSizeBasedOnDeviceRatio(size);
  if (src.includes('github')) {
    const [path] = src.split('?');
    return `${path}?s=${updatedSize}`;
  }
  if (src.includes('slack')) {
    const srcSplitArr = src.split('-');
    srcSplitArr.pop();
    const path = srcSplitArr.join('-');
    return `${path}-${updatedSize}`;
  }
  return src;
};
