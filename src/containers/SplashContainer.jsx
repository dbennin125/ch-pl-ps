import React from 'react';
import { resumeData } from '../resumeData/resumeData';
import { AboutMe } from '../components/Main/AboutMe';
import { SplashCopy3 } from '../components/Main/SplashCopy3';
import { LanguageCard } from '../components/Main/LanguageCard';

export const SplashContainer = () => {
  return (
    <>
      <AboutMe {...resumeData} />
      {/* <SplashCopy {...resumeData} /> */}
      <LanguageCard {...resumeData} />

      <SplashCopy3 {...resumeData} />
    </>
  );
};
