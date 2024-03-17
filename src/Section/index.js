import { StyledSection, StyledUl, ListHeader } from "./styled";

const Section = ({title, body, extraHeaderContent}) => (
    <StyledSection>
            <StyledUl>
                <ListHeader>{title}</ListHeader>
                {extraHeaderContent}
            </StyledUl>
           {body}
    </StyledSection>
);

export default Section;