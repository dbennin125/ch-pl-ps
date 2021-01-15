import React from 'react';
import { resumeData } from '../resumeData/resumeData';
import { Splash } from '../components/Main/Splash';
import { SplashCopy3 } from '../components/Main/SplashCopy3';
import { LanguageCard } from '../components/Main/LanguageCard';


export const SplashContainer = () => {

  return <>
  <Splash {...resumeData} />
  {/* <SplashCopy {...resumeData} /> */}
  <LanguageCard {...resumeData} />
  <SplashCopy3 {...resumeData} />
  </>;
};
