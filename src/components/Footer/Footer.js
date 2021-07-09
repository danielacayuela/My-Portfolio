import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <div>
      <FooterWrapper>
        <LinkList>
          <LinkColumn>
            <LinkTitle>WhatsApp</LinkTitle>
            <LinkItem href="tel:+57-315-272-3153">+57 315-272-3153</LinkItem>
          </LinkColumn>
          <LinkColumn>
            <LinkTitle>Email</LinkTitle>
            <LinkItem href="mailto:daniela.cayuela.tovar@gmail.com">
              daniela.cayuela.tovar@gmail.com
            </LinkItem>
          </LinkColumn>
        </LinkList>
        <SocialIconsContainer>
          <SocialIcons href="https://github.com/danielacayuela">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/daniela-cayuela-tovar-dev/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
        </SocialIconsContainer>
      </FooterWrapper>
    </div>
  );
};

export default Footer;
