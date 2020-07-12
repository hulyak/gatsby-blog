import React from 'react';
import { Link } from 'gatsby';
//component
import { useHeroQuery } from 'hooks/useHeroQuery';
import BGImage from 'components/BGImage';
//hooks
//styles
import { HeroWrapper, TextWrapper } from './Hero.styles';

const Hero = () => {
  // destructure
  const {
    heroImage,
    heroImageText,
    heroImageBtnText,
    heroImageBtnLink,
  } = useHeroQuery();

  return (
    <HeroWrapper>
      <BGImage title="heroImage" fluid={heroImage.childImageSharp.fluid}>
        <TextWrapper>
          <h2>{heroImageText}</h2>
          <Link to={heroImageBtnLink}>
            <button>{heroImageBtnText}</button>
          </Link>
        </TextWrapper>
      </BGImage>
    </HeroWrapper>
  );
};

export default Hero;
