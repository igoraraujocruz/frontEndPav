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
      background: #202024;  
    }

    body, input, button {
		font-family: 'Source Sans Pro', serif;
		font-size: 18px;
	}
	
    button {
		cursor: pointer;
	}
`;