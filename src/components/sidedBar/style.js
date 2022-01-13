import styled from 'styled-components'


export const SideBarS = styled.nav`
    display: flex;

    padding-top: 10px;

    flex-direction: column;

    width: 15%;
    height: 10vh;

    margin-right: 5px;

    hr {
        background-color: rgb(197, 197, 197);
    }
`;

export const NewFileButtonS = styled.a`
    display: flex;

    align-items: center;
    justify-content: center;

    margin-left: 22px;

    width: 110px;
    height: 40px;

    border-radius: 50px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.302), 0 1px 3px 1px rgba(67, 67, 67, 0.149);

    cursor: pointer;

    p {
        margin-left: 14px;
    }
`;

export const ItemS = styled.div`
    display: flex;

    padding: 10px 0;
    border-radius: 0 100px 100px 0;

    div {

        &:first-child {
            min-width: 20px;
            margin-left: 12px;
        }

        display: flex;
        align-items: center;

        p {
            margin-left: 12px;
            font-size: 0.9rem;
            /* font-weight: 500; */
        }
    }

    :hover {
        background-color: rgb(0, 0, 0, 0.04);
    }
`;

export const Content = styled.div`

`;
