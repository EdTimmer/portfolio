import styled from 'styled-components';
import colors from '../styles/colors';

export const CardContainer = styled.div`
  background: ${colors.onyx};
  border-radius: 0.5rem;
  padding: 2rem;
  width: 40rem;
  z-index: 3;
`;

export const CardTitle = styled.h2`
  color: ${colors.seasalt};
  font-size: 2.4rem;
  margin-bottom: 2rem;
  letter-spacing: 0.1rem;
  padding: 0;
  font-weight: 300;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 20rem;
  margin-bottom: 2rem;
  object-fit: cover;
  border-radius: 0.5rem;
`;

export const LinksRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 2rem;
  margin-bottom: 2rem;
`;

export const WebLink = styled.a`
  color: ${colors.seasalt};
  font-size: 1.6rem;
  text-decoration-line: underline;
  text-underline-offset: 5px;
`;
