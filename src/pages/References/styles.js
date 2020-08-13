import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 75%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;

  #cardaction {
    flex-direction: column;
    align-items: inherit;
    height: 100%;
    outline: 0px;
  }
`;
