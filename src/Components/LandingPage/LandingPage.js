import styled from "styled-components";
import { illustrationImage } from "../Assets";
import {
  H3,
  H5,
  H6,
  Image,
  SmallTextpx2,
  MediumButton,
} from "../DefaultStyles";

const LandingGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 4rem;
  height: 83vh;
  @media only screen and (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;

const ImageContainer = styled.div`
  width: 40rem;
  height: 40rem;
  justify-self: center;
  align-self: center;
`;

const LandingText = styled.div`
  justify-self: center;
  align-self: center;
`;

const Title = styled(H3)`
  margin-bottom: 2rem;
  font-weight: 200;
`;
const DescriptionSmall = styled(SmallTextpx2)`
  font-weight: 500;
  text-transform: uppercase;
`;
const Description = styled(H5)`
  margin-bottom: 1.1rem;
  font-weight: 400;
`;

const LandingPage = () => {
  return (
    <section className="" id="">
      <div className="row">
        <LandingGrid>
          <ImageContainer>
            <Image src={illustrationImage} alt="A girl on Rocket." />
          </ImageContainer>
          <LandingText>
            <Title>Vulcan</Title>
            <Description>One Stop Solution for URL Shortening.</Description>
            <DescriptionSmall>Simple But Elegant</DescriptionSmall>
            <a href="/">
              <MediumButton>Get Started</MediumButton>
            </a>
          </LandingText>
        </LandingGrid>
      </div>
    </section>
  );
};

export default LandingPage;
