import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: ${({ theme }) => theme.spacing(100)};
  border-color: ${({ theme }) => theme.colors.dark};
  border-radius: ${({ theme }) => theme.spacing(4)};
  background-color: ${({ theme }) => theme.colors.light};
`;

export const ContactFormLabel = styled.label`
  margin-bottom: ${({ theme }) => theme.spacing(6)};
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.fontSizes.small};
`;

export const Input = styled.input`
  display: block;
  font-size: ${({ theme }) => theme.fontSizes.small};
  width: ${({ theme }) => theme.spacing(50)};
  height: ${({ theme }) => theme.spacing(8)};
  border-radius: ${({ theme }) => theme.spacing(2)};
`;

export const AddContactBtn = styled.button`
  display: block;
  font-size: ${({ theme }) => theme.fontSizes.smallest};
  width: ${({ theme }) => theme.spacing(30)};
  height: ${({ theme }) => theme.spacing(8)};
  border-radius: ${({ theme }) => theme.spacing(1)};
  border-color: transparent;
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  &:hover {
    border-color: ${({ theme }) => theme.colors.violet};
    background-color: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.violet};
  }
`;
