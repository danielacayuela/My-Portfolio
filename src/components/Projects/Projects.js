import React from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <br />
    <SectionTitle>Projects</SectionTitle>
    <GridContainer>
      {projects.map(
        ({ id, image, title, description, tags, source, visit }) => (
          <BlogCard key={id}>
            <Img src={image} />
            <TitleContent>
              <HeaderThree title>{title}</HeaderThree>
              <Hr></Hr>
            </TitleContent>
            <CardInfo>{description}</CardInfo>
            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {tags.map((tag, i) => {
                  return i < 5 ? <Tag key={i}>{tag}</Tag> : "";
                })}
              </TagList>
              <TagList>
                {tags.map((tag, i) => {
                  return i >= 5 && i < 10 ? <Tag key={i}>{tag}</Tag> : "";
                })}
              </TagList>
              <TagList>
                {tags.map((tag, i) => {
                  return i >= 10 ? <Tag key={i}>{tag}</Tag> : "";
                })}
              </TagList>
            </div>
            <UtilityList>
              {source ? <ExternalLinks href={source}> Code</ExternalLinks> : ""}
              {visit ? <ExternalLinks href={visit}>Visit</ExternalLinks> : ""}
            </UtilityList>
          </BlogCard>
        )
      )}
    </GridContainer>
  </Section>
);

export default Projects;
