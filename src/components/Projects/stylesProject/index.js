import styled from 'styled-components';

export const Section = styled.section`
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
`;
export const ProjectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  -webkit-box-pack: center;
  justify-content: center;
`;
export const ProjectHeading = styled.h2`
  font-family: 'Ubuntu', sans-serif;
  text-align: center;
  font-size: 40px;
  font-weight: 500;
  margin-bottom: 60px;
  padding-bottom: 20px;
  position: relative;

  &::after {
    content: 'Realizados';
  }
`;
export const ProjectWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
export const ProjectCard = styled.div`
  width: 400px;
  height: 450px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  background: #000;
  text-align: center;
  border-radius: 6px;
  padding: 3px 3px;
  margin-bottom: 10px;

  @media screen and (max-width: 991px) {
    width: 40%;
    height: 33%;
    align-items: center;
  }
  @media screen and (max-width: 765px) {
    width: 60%;
    height: 20%;
    align-items: center;
    margin-right: 50px;
  }
`;
export const ProjectImg = styled.img`
  width: 100%;
`;

export const ProjectTitle = styled.h2`
  color: #fff;
  font-weight: 900;
  font-size: 18px;
`;
export const TitleContent = styled.h3`
  color: #ffffff;
  font-size: 25px;

  @media screen and (max-width: 450px) {
    font-size: 20px;
  }
`;
export const ProjectDesc = styled.p`
  width: 100%;
  color: #ffffff;
  font-size: 1.1rem;
  text-indent: 1rem;
  text-align: justify;
`;
export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  margin: 1rem 0;
  justify-content: space-around;
`;

export const LinksExternal = styled.a`
  color: #ffffff;
  font-size: 18px;
  padding: 1rem 1.5rem;
  margin-left: 10px;
  background: #00804b;
  border-radius: 15px;
  transition: 0.5s;
  &:hover {
    color: #00804b;
    background: #ffffff;
  }
`;
export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #00804b;
`;
export const TagList = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: space-around;
`;
export const Tag = styled.li`
  color: #ffffff;
  font-size: 1.2rem;
  @media screen and (max-width: 450px) {
    font-size: 15px;
  }
`;
