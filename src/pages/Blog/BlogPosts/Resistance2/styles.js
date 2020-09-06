import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TitleContainer = styled.div`
  background: #363636;
  width: 100%;
  padding: 0 100px 0 100px;

  h1 {
    font-size: 3.5rem;
    font-weight: 300;
    line-height: 1.2;
    color: #fafafa !important;
    margin-top: 3rem !important;
    margin-bottom: 0.5rem !important;
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 300;
    margin-bottom: 3rem !important;
    color: #d3d3d3 !important;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

// ------ Other Components ------

export const SubmitButton = styled.button.attrs(() => ({
  type: 'submit',
}))`
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 30px;

  li {
    padding: 15px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & + li {
      border-top: 1px solid #eee;
    }
  }
`;

export const Link = styled.a`
  font-size: 24px;
  text-decoration: none;
  color: #808080;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  input {
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
  }
`;
