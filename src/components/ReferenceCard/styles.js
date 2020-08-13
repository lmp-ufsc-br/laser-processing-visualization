import styled from 'styled-components';

export const Card = styled.a`
  display: flex;
  flex-direction: column;
  width: 275px;
  height: 300px;
  margin: 30px 30px 30px 30px;
  background: white;
  text-decoration: none;
  word-break: normal;
  word-wrap: break-word;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 0.25rem;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.05);

  &:hover,
  &:focus {
    z-index: 1;
    color: #495057;
    text-decoration: none;
    background-color: #f8f9fa;
    background-color: #dae0e5 !important;
  }

  img {
    border-radius: 0.25rem;
    height: 150px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
`;

export const TextContent = styled.div`
  padding: 16px;

  h2 {
    font-size: 1.5rem;
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    font-weight: 400;
    line-height: 1.334;
    letter-spacing: 0rem;
    margin-bottom: 0.35rem;
  }

  p {
    color: rgba(0, 0, 0, 0.54);
    font-size: 0.875rem;
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    font-weight: 400;
    line-height: 1.43;
  }
`;
