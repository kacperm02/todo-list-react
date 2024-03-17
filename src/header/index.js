import {StyledHeader} from './styled'

const Header = ({title}) => (
    <StyledHeader className="header flex__item">
        <h1>{title}</h1>
    </StyledHeader>
);

export default Header;