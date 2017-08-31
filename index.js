// @flow

import React from 'react';
import { Image } from 'react-native';
import * as flags from './flags';

type Props = {
  size: 16,
  code: string,
  type?: 'flat',
  style?: any,
};

const Flag = ({ size = 16, code, type = 'flat', style }: Props) => {
  const flag = flags[type][`icons${size}`][code];
  // const unknownFlag = flags[type][`icons${size}`]['unknown'];
  
  if (!flag) {
    return null;
  }

  return (
    <Image
      source={flag}
      style={[{ width: size, height: size }, style]}
    />
  );
};

export default Flag;
