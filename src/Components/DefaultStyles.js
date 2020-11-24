import styled from "styled-components";

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
// 1rem = 10px
export const SmallTextlabel = styled.p`
  font-size: 1.2rem;
  line-height: 1.8rem;
`;
export const SmallTextpx2 = styled.p`
  font-size: 1.4rem;
  line-height: 2rem;
`;
export const SmallTextpx1 = styled.p`
  font-size: 1.6rem;
  line-height: 2.2rem;
`;
export const H6 = styled.p`
  font-size: 2rem;
  line-height: 2.8rem;
`;
export const H5 = styled.p`
  font-size: 2.8rem;
  line-height: 3.6rem;
`;
export const H4 = styled.p`
  font-size: 3.4rem;
  line-height: 4.4rem;
`;
export const H3 = styled.p`
  font-size: 5.6rem;
  line-height: 6.8rem;
`;
export const H2 = styled.p`
  font-size: 6.4rem;
  line-height: 7.6rem;
`;
export const H1 = styled.p`
  font-size: 7.2rem;
  line-height: 8.6rem;
`;

export const MediumButton = styled.div`
  padding: 1.2rem 3rem;
  background-color: ${(props) => props.theme.lightGreen};
  display: inline-block;
  color: ${(props) => props.theme.White};
  font-size: 1.3rem;
  margin-top: ${(props) => props.theme.marginSmall};
  border-radius: ${(props) => props.theme.borderRadiusMedium};
  font-weight: ${props => props.theme.fontWeightRegular};
`;
