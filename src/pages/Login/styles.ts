import styled from 'styled-components';
import {shade} from 'polished';

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

    input {
        background: #fff;
        border-radius: 10px;
        border: 1px solid #1C6A33;
        padding: 16px;
        width: 100%;
        height: 50px;

        & + input {
        margin-top: 3px;
        }

        &::placeholder {
			color: #666360;
		}
    }

    button {
        margin-top: 50px;
        background: #1C6A33;
        border-radius: 10px;
        border: 2px;
        padding: 16px;
        width: 50%;
        color: #fff;
        transition: 0.8s;
        

        &:hover {
			background: ${shade(0.2, '#1C6A33')}
		}    

    }

    .creditos {
        margin-top: 100px;
    }
`;

export const Logo = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-bottom: 100px;

`;