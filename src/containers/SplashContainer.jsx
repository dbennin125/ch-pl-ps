import React from 'react';
import { resumeData } from '../resumeData/resumeData';
import { Splash } from '../components/Main/Splash';

export const SplashContainer = () => {
  return <Splash {...resumeData} />;
};
