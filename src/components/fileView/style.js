import styled from 'styled-components';

export const FileItemView = styled.a`
    display: grid;

    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;

    align-items: center;

    height: 3em;
    width: 100%;

    border-bottom: 1px solid rgb(219, 219, 219);
    border-top: 1px solid rgb(219, 219, 219);
    
    text-decoration: none;
    color: rgb(85, 85, 85);

    div {
        display: flex;
        align-items: center;

        margin-left: 1em;

        &:last-child {
            display: flex;
            justify-content: flex-end;
            p {
                margin-left: 1em;

                &:last-child {
                    display: flex;
                    min-width: 4em;
                }
            }
            margin-right: 2em;
        }
    }

    /* * {
        margin: 1em;
    } */
`;

export const View = styled.div`
    display: flex;

    width: 100%;

    flex-wrap: wrap;
    flex-direction: column;

    section {

        display: flex;

        margin-left: 1em;

        &:last-child {
            flex-direction: column;
        }

        
        article {
            display: flex;

            &:first-child {
                flex: 1;
                flex-direction: column;
            }
    
            &:last-child {
                flex-direction: row;
                margin-right: 2.2em;
                p {
                    margin-left: 1em;
                }
            }
        }
        
    }
    header {
        display: flex;
    }

`;

export const Card = styled.main`
    height: 190px;
    width: 240px;
    border-radius: 10px;
    border: 1px solid rgb(219, 219, 219);
    margin: 1em;

    header {
        display: flex;
        align-items: center;
        justify-content: center;

        height: 70%;

        border-bottom: 1px solid rgb(219, 219, 219);
    }

    footer {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 100%;
        height: 30%;

        p {
            width: 90%;
            overflow: hidden;
            white-space: nowrap;
        }
    }
`;
