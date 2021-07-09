import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle>
        Hello there! <br /> Welcome to my portfolio ;)
      </SectionTitle>
      <SectionText>
        My name is Daniela, and I am a young Colombian-Spanish Full Stack
        Developer. I decided to get involved in the tech world because I
        realized that not being part of it is not an option. Moreover, not in a
        world where change is the only constant.
      </SectionText>
      {/* <Button
        onClick={() =>
          (window.location =
            "https://www.linkedin.com/in/daniela-cayuela-tovar-dev/")
        }
      >
        Learn more
      </Button> */}
    </LeftSection>
  </Section>
);

export default Hero;
