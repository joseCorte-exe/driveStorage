import styled from 'styled-components';

export const SideIconsS = styled.main`
    display: flex;
    align-items: center;
    flex-direction: column;

    width: 50px;

    border: 1px solid rgb(219, 219, 219);

    div {
        &:first-child {
            display: flex;
            flex-direction: column;
            align-items: center;

            width: 100%;
        }

        &:last-child {
            display: flex;
            align-items: center;
        }
    }

    hr {
        margin: 12px 0;
        width: 90%;
    }

    img {
        object-fit: contain;

        width: 20px;

        margin: 10px 0;
    }
`;
