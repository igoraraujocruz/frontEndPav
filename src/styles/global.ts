import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
		color: #fff;
        background-image: linear-gradient(15deg, #13547a 0%, #80d0c7 100%);
    }

    body, input, button {
		font-family: 'Source Sans Pro', serif;
		font-size: 18px;
	}
	
    button {
		cursor: pointer;
	}
`;