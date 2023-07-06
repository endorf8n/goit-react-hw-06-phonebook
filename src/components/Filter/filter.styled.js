import styled from 'styled-components';

export const FilterTitle = styled.label`
  display: flex;
  flex-direction: column;
  font-size: ${({ theme }) => theme.fontSizes.small};
`;

export const FilterInput = styled.input`
  width: ${({ theme }) => theme.spacing(50)};
  height: ${({ theme }) => theme.spacing(5)};
  border-radius: ${({ theme }) => theme.spacing(2)};
`;
