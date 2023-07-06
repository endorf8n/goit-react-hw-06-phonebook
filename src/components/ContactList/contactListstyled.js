import styled from 'styled-components';

export const ListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  width: ${({ theme }) => theme.spacing(90)};
  padding: ${({ theme }) => theme.spacing(4)};
`;
