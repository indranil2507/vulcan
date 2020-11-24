const { default: Features } = require("../Components/FeatureSection/FeatureSection");
const { default: LandingPage } = require("../Components/LandingPage/LandingPage");



const Homepage = () => (
    <>
    <LandingPage />
    <Features />
    </>
)

export default Homepage