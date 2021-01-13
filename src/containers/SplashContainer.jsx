import React from 'react';
import { resumeData } from '../resumeData/resumeData';
import { Splash } from '../components/Main/Splash';
import { SplashCopy3 } from '../components/Main/SplashCopy3';
import { SplashCopy2 } from '../components/Main/SplashCopy2';
import { SplashCopy } from '../components/Main/SplashCopy';

export const SplashContainer = () => {

  return <>
  <Splash {...resumeData} />
  {/* <SplashCopy {...resumeData} /> */}
  <SplashCopy2 {...resumeData} />
  <SplashCopy3 {...resumeData} />
  </>;
};
