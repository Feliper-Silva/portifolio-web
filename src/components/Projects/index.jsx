import React from 'react';

import {
  Section,
  ProjectContainer,
  ProjectHeading,
  ProjectWrapper,
  ProjectCard,
  ProjectImg,
  TitleContent,
  ProjectTitle,
  ProjectDesc,
  LinksExternal,
  UtilityList,
  Hr,
  TagList,
  Tag
} from './stylesProject';
import { VscGithubInverted } from 'react-icons/vsc';
import { CgWebsite } from 'react-icons/cg';
function Projects({ data }) {
  return (
    <Section>
      <ProjectContainer>
        <ProjectHeading className="title">Projetos</ProjectHeading>
        <ProjectWrapper>
          {data.map((project, index) => {
            return (
              <ProjectCard key={index}>
                <ProjectImg src={project.image} alt={project.alt} />
                <TitleContent>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <Hr />
                </TitleContent>
                <ProjectDesc>{project.description}</ProjectDesc>
                <div>
                  <TitleContent>Stack</TitleContent>
                  <TagList>
                    {project.tags.map((t, i) => {
                      return <Tag key={i}>{t}</Tag>;
                    })}
                  </TagList>
                </div>
                <UtilityList>
                  <LinksExternal href={project.visit} target="_blank">
                    <CgWebsite />
                  </LinksExternal>
                  <LinksExternal href={project.source} target="_blank">
                    <VscGithubInverted />
                  </LinksExternal>
                </UtilityList>
              </ProjectCard>
            );
          })}
        </ProjectWrapper>
      </ProjectContainer>
    </Section>
  );
}

export default Projects;
