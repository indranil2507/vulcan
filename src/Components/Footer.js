import styled from "styled-components"

const FooterText = styled.p`
    font-size: 1.5rem;
    padding: 2rem 0;
`
const Footer = () => {
    return (
        <footer>
        <div className="row">
        <FooterText>
        &copy; Vulcan 2020
        </FooterText>
        </div>
        </footer>
    )
}

export default Footer