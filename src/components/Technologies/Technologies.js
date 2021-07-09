import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import { GrDeploy } from "react-icons/gr";
import { SiJavascript } from "react-icons/si";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I was part of a full-stack web development boot camp. I have learned and
      worked with different technologies from Back-end to Front-end through
      different projects.
    </SectionText>
    <List>
      <ListItem>
        <SiJavascript size="3rem" />
        <ListContainer>
          <ListTitle>Langauge</ListTitle>
          <ListParagraph>
            Experience with <br />
            JavaScript
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-end</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js, Redux.js, CSS, HTML
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-end</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node.js, Express, PostgreSQL, Sequelize
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
