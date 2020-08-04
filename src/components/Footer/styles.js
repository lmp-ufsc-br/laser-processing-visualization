import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  flex-shrink: 0;
  min-height: 64px;
  width: 100%;
  background-color: #343a40 !important;

  @media (max-width: 300px) {
    min-width: 270px;
  }

  p {
    text-align: center !important;
    color: #fff !important;
  }

  a {
    text-decoration: none;
    color: #fff;
  }
`;
