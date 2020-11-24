import styled from "styled-components";
import { SmallTextpx2, SmallTextpx1, H6 } from "../DefaultStyles";
import { ExpiryDate, Click, Brand, Analytics } from "../Icons";
import styles from "../../styles";
import FeatureBox from "../FeatureBox";

const Features = () => {
  return (
    <FeatureSection>
      <div className="row">
        <FeaturesGrid>
          <FeatureBoxGrid>
            <div>
              {FeaturesData1.map((feature, index) => (
                <FeatureBox key={index} {...feature} />
              ))}
              {FeaturesData2.map((feature, index) => (
                <FeatureBox key={index} {...feature} />
              ))}
            </div>
            <div>
              {FeaturesData3.map((feature, index) => (
                <FeatureBox key={index} {...feature} />
              ))}
              {FeaturesData4.map((feature, index) => (
                <FeatureBox key={index} {...feature} />
              ))}
            </div>
          </FeatureBoxGrid>
          <div>
          <FeatureLeftTextTitle>Vulcan</FeatureLeftTextTitle>
          <FeatureLeftDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae arcu fringilla, sodales diam non, finibus ante. Nam eu rutrum sem, a molestie augue. Aenean id mollis dui. Cras sed accumsan purus. Suspendisse vitae ligula bibendum ligula facilisis euismod. Morbi vulputate risus sit amet felis aliquam, ut efficitur lacus dapibus. Integer id congue dolor.
          </FeatureLeftDescription>
          </div>
        </FeaturesGrid>
      </div>
    </FeatureSection>
  );
};

export default Features;

const FeatureSection = styled.section`
  padding: 3rem;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 4rem;

  align-items: center;
  @media only screen and (max-width: 900px) {

    grid-template-columns: 1fr;
    grid-template-rows: 1000px 1fr;
  }
`;

const FeatureBoxGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  align-items: center;
  @media only screen and (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    justify-items: center;
  }
`;

const FeatureLeftTextTitle = styled(H6)`
margin-bottom: 2rem;
`

const FeatureLeftDescription = styled(SmallTextpx1)``

const FeaturesData1 = [
  {
    title: "Analytics",
    description:
      "It provides better analytics and is a student project. So kindly dont expect too much",
    Icon: Analytics,
    borderRadius: "0 7rem 0 7rem",
    color1: `${styles.lightGreen}`,
    color2: `${styles.Green}`,
    textColor: `${styles.White}`,
    descColor: `${styles.White}`,
    borderRadiusBtn: "0 2rem 0 2rem",
  },
];
const FeaturesData2 = [
  {
    title: "Brand Recoginition",
    description:
      "Its awesome, great, fabulous, fantastic, amazing, you must try it. lets kill it. Letsssgo.",
    Icon: Brand,
    borderRadius: "7rem 0 7rem 0",
    color1: `${styles.White}`,
    color2: `${styles.White}`,
    textColor: `${styles.Green}`,
    descColor: `${styles.LightGrayUI}`,
    borderRadiusBtn: "2rem 0 2rem 0",
  },
];
const FeaturesData3 = [
  {
    title: "Monitor Clicks",
    description:
      "Its awesome, great, fabulous, fantastic, amazing, you must try it. lets kill it. Letsssgo.",
    Icon: Click,
    borderRadius: "7rem 0 7rem 0",
    color1: `${styles.White}`,
    color2: `${styles.White}`,
    textColor: `${styles.Green}`,
    descColor: `${styles.LightGrayUI}`,
    borderRadiusBtn: "2rem 0 2rem 0",
  },
];
const FeaturesData4 = [
  {
    title: "Expiration Date",
    description:
      "Its awesome, great, fabulous, fantastic, amazing, you must try it. lets kill it. Letsssgo.",
    Icon: ExpiryDate,
    borderRadius: "0 7rem 0 7rem",
    color1: `${styles.lightGreen}`,
    color2: `${styles.Green}`,
    textColor: `${styles.White}`,
    descColor: `${styles.White}`,
    borderRadiusBtn: "0 2rem 0 2rem",
  },
];
