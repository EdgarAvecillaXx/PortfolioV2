import React from "react";
import { BsGithub, BsLinkedin } from 'react-icons/bs';

import s from './social.module.css';

const SocialLinks = () => {
  return (
    <div className={s.socialLinks}>
      <a
        href='https://github.com/EdgarAvecillaXx'
        target='_blank'
        rel='noreferrer noopener'>
        <BsGithub />
      </a>
      <a
        href='https://www.linkedin.com/in/edgar-avecilla/'
        target='_blank'
        rel='noreferrer noopener'>
        <BsLinkedin />
      </a>
    </div>
  );
};

export default SocialLinks;
