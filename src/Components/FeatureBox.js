import styled from "styled-components";
import { SmallTextpx2, SmallTextpx1 } from "./DefaultStyles";

const Container = styled.div`
  background-image: ${(props) =>
    `linear-gradient(to bottom, ${props.color1}, ${props.color2})`};
  border-radius: ${(props) => props.borderRadius};
  @media only screen and (max-width: 900px) {
    border-radius: 10px;
  }
  height: 25rem;
  width: 30rem;
  padding: 3rem;
  position: relative;
  margin-bottom: 2rem;
  box-shadow: ${(props) => `0 1rem 3rem rgba(0,0,0,0.07)`};
  transition: all 0.2s ease-in-out;
    &:hover {
      transform: translateY(-3px) scale(1.03);
  box-shadow: ${(props) => `0 1rem 2rem rgba(0,0,0,0.07)`};
      
  }
`;
const IconContainer = styled.div`
  height: 4rem;
  width: 4rem;
  margin-bottom: 2rem;
`;
const Title = styled(SmallTextpx1)`
  font-weight: 500;
  color: ${(props) => props.textColor};
  margin-bottom: 1.2rem;
`;
const Description = styled(SmallTextpx2)`
  color: ${(props) => props.descColor};
  margin-bottom: 2rem;
`;
const Button = styled.a`
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  color: ${(props) => props.backcol};
  transition: all 0.3s;
  padding: 1rem 1.2rem;
  font-weight: ${(props) => props.theme.fontWeightRegular};
  &:hover {
    color: ${(props) => props.textColor};
    background-color: ${(props) => props.backcol};
    border-radius: ${(props) => props.borderRadiusBtn};
    @media only screen and (max-width: 900px) {
    border-radius: 4px;
  }
  }
`;

const FeatureBox = ({
  title,
  description,
  textColor,
  Icon,
  color1,
  color2,
  descColor,
  borderRadius,
  borderRadiusBtn,
}) => {
  return (
    <Container borderRadius={borderRadius} color1={color1} color2={color2}>
      <IconContainer>
        <Icon height={40} width={40} fill={textColor} />
      </IconContainer>
      <Title textColor={textColor}>{title}</Title>
      <Description descColor={descColor}>{description}</Description>
      <Button
        borderRadiusBtn={borderRadiusBtn}
        textColor={color1}
        backcol={textColor}
        href="/"
      >
        Continue
      </Button>
    </Container>
  );
};

export default FeatureBox;
