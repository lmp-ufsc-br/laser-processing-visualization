import styled from 'styled-components';

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  flex-grow: 0;
  max-width: 100%;
  flex-basis: 100%;

  pre {
    overflow-x: scroll;
  }

  @media (min-width: 960px) {
    max-width: 66.666667%;
    flex-basis: 66.666667%;
  }
  div {
    padding: 24px 0px;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.43;
    letter-spacing: 0.01071em;
  }
  hr {
    border: none;
    height: 1px;
    margin: 0;
    flex-shrink: 0;
    background-color: rgba(0, 0, 0, 0.12);
  }
  h6 {
    margin-bottom: 0.35em;
    font-size: 1.25rem;
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    font-weight: 500;
    line-height: 1.6;
    letter-spacing: 0.0075em;
  }
  h5 {
    margin-bottom: 0.35em;
    font-size: 1.5rem;
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    font-weight: 400;
    line-height: 1.334;
    letter-spacing: 0em;
  }
  p {
    margin-bottom: 16px;
    font-size: 1rem;
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 0.00938em;
    text-align: justify;
  }
  a {
    color: #3f51b5;
    font-size: 1rem;
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 0.00938em;
    :not(:hover) {
      text-decoration: none;
    }
  }
`;
