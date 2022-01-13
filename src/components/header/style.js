import styled from 'styled-components'


export const HeaderS = styled.header`
  --search-bar: #f2f2f2;

  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  height: 60px;

  border-bottom: 1px solid #dbdbdb;

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      color: gray;
      font-size: 1.2rem;
      font-weight: 500;
      margin-left: 16px;
    }
  }
  
  input {
    border-style: none;
    background-color: var(--search-bar);

    border-color: var(--search-bar);

    width: 450px;
    height: 25px;

    margin-left: 6px;

    &:focus {
      outline-width: 0;
    }
  }

  img {
    width: 30px;
    height: 30px;

    object-fit: contain;
  }

  #searchBar {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 500px;
    height: 40px;

    padding: 0px 10px 0px 10px;

    border-radius: 20px;
    border: 1px solid var(--search-bar);

    background-color: var(--search-bar);
    color: #000000;

    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
  }

  #userSection {
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      width: 30px;
      height: 30px;

      object-fit: contain;

      border-radius: 100%;
    }
  }
`;
