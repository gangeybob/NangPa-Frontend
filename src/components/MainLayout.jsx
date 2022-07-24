import styled from 'styled-components';

const StyledMainLayout = styled.div`
    position: relative;
    max-width: 768px;
    height: 100vh;
    margin: 0 auto;
`;

const MainLayout = ({ children }) => {
    return <StyledMainLayout>{children}</StyledMainLayout>;
};

export default MainLayout;
