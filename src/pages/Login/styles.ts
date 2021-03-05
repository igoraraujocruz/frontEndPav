import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    form {
        width: 250px;
        text-align: center;
    }

    > h1 {
        margin-bottom: 5px;
    }

    .creditos {
        margin-top: 100px;
    }
`;

export const Logo = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    margin-bottom: 20px;

    img {
        width: 50px;
    }
`;