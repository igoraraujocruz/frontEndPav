import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
`;

export const Cabecalho = styled.div`
    display: flex;
    justify-content: space-between;
    height: 50px;

    input {
        width: 250px;
        border: 1px;
        padding-left: 20px;
        margin: 10px 10px 0 0;
        opacity: 0.5;
        transition: 0.3s;

        &:hover {
            opacity: 1;
        }
    }

    h2 {
        margin-top: 30px;
    }

    .usuario {
        padding: 60px;
        text-align: center;
        img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
        }
    }
`;

export const Corpo = styled.div`
    table {
        border-collapse: collapse;
        border-radius: 20px;
        background: rgba(0, 0, 0, 0.2);
        display: table;
        flex-direction: column;
        align-items: center;
        margin-top: 170px;
        width: 100%;
        text-align: center;

        thead {
            
            font-weight: bold;
            color: #fff;
            width: 100%;
            padding: 10px;
            margin-top: 200px;
        }

        tbody tr:nth-child(2n) {
            background: rgba(0, 0, 0, 0.5);
            
        }

        tbody tr td:nth-child(1) {width: 20%;}
        tbody tr td:nth-child(10) {width: 1%;}

        th, td {
            padding: 10px 0;
        }

        tbody tr {
            transition: 0.4s;
        }

        tbody tr:hover {
            cursor: pointer;
            text-shadow: 1px 1px 4px #fff;
        }

        td img {
            width: 20px;
            margin-left: 5px;
        }

        .loading {
            width: 30px;
        }
    }
`;

export const Rodape = styled.div``;