import styled, { css } from 'styled-components';

export const ContactFormWrapper = styled.section`
  padding: 4.5rem 1.5rem;
`;

export const ContactFormTitle = styled.h2`
  text-align: center;
  line-height: ${({ theme }) => theme.lineHeight.large};
  margin-bottom: 4.5rem;

  @media (min-width: 768px) {
    font-size: 3rem;
    line-height: 4.5rem;
  }
`;

export const FormWrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.cream};
  border: 0.3rem solid ${({ theme }) => theme.colors.white};
  box-shadow: 0px 3px 9px 3px rgba(0, 0, 0, 0.23);
  padding: 3rem 1.5rem 5rem;
  max-width: 70rem;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding: 3rem 6rem 5rem;
  }
`;

export const FormTitle = styled.h3`
  font-size: 1.6rem;
  text-align: center;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.purple};
  font-weight: 700;
`;

export const StyledForm = styled.form`
  width: 100%;
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  input,
  textarea {
    ::placeholder {
      color: #909090;
      font-size: 1.4rem;

      @media (min-width: 768px) {
        font-size: 1.7rem;
      }
    }
  }
`;

export const TextInput = styled.input`
  width: 100%;
  font-size: 1.4rem;
  padding: 1.5rem 2.5rem;
  border: 0.1rem solid
    ${({ error, theme }) => (error ? theme.colors.red : theme.colors.lightPurple)};
  border-radius: 5px;
  outline: none;

  :focus {
    border: 0.1rem solid ${({ error, theme }) => (error ? theme.colors.red : theme.colors.green)};
  }

  @media (min-width: 768px) {
    font-size: 1.7rem;
  }
`;

export const MessageTextarea = styled.textarea`
  width: 100%;
  font-size: 1.4rem;
  padding: 1.5rem 2.5rem;
  border: 0.1rem solid
    ${({ error, theme }) => (error ? theme.colors.red : theme.colors.lightPurple)};
  border-radius: 5px;
  outline: none;
  resize: none;

  :focus {
    border: 0.1rem solid ${({ error, theme }) => (error ? theme.colors.red : theme.colors.green)};
  }

  @media (min-width: 768px) {
    font-size: 1.7rem;
  }
`;

export const FileInputWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

export const FileWrapText = styled.h1`
  font-size: 1.7rem;
  font-weight: normal;

  @media (min-width: 768px) {
    margin-right: 3rem;
  }
`;

export const FileInput = styled.input`
  border: none;
  width: 15rem;

  ::-webkit-file-upload-button {
    width: 15rem;
    border: none;
    border-radius: 1.2rem;
    font-weight: bold;
    color: white;
    background: ${({ theme }) => theme.colors.lightPurple};
    padding: 1rem 3rem;
    transition: all 0.3s ease-in-out;

    :hover {
      cursor: pointer;
      background: ${({ theme }) => theme.colors.purple};
    }
  }

  @media (min-width: 768px) {
    width: 100%;
  }
`;

export const SubmitButton = styled.button`
  position: relative;
  width: 100%;
  height: 4.4rem;
  margin-top: 6rem;
  border-radius: 3rem;
  border: none;
  background: ${({ theme }) => theme.colors.purple};
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in;

  @media (min-width: 768px) {
    font-size: 2.3rem;
    height: 7rem;
  }

  &::after {
    content: '';
    background-image: url('/images/desktop/white-arrow.svg');
    background-size: cover;
    display: block;
    height: 1.4rem;
    width: 1.8rem;
    background-repeat: no-repeat;
    margin-left: 1.5rem;

    @media (min-width: 768px) {
      margin-left: 2rem;
      height: 2.2rem;
      width: 2.8rem;
    }
  }

  :hover {
    cursor: pointer;
    background: #6465ba;
  }
`;

export const Label = styled.label`
  left: -100vw;
  position: absolute;
`;

export const Select = styled.select`
  width: 100%;
  height: 5.3rem;
  padding: 0 2.5rem;
  font-size: 1.4rem;
  border: 0.1rem solid
    ${({ error, theme }) => (error ? theme.colors.red : theme.colors.lightPurple)};
  border-radius: 0.5rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 0.1rem;
  background-image: url('/images/desktop/select-arrow-purple.svg');
  background-size: 1.4rem 0.7rem;
  background-repeat: no-repeat;
  background-position: 95% 50%;
  outline: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.black};

  &:required:invalid {
    color: #909090;
  }

  &:focus {
    border: 0.1rem solid ${({ error, theme }) => (error ? theme.colors.red : theme.colors.green)};
  }

  @media (min-width: 768px) {
    font-size: 1.7rem;
    background-size: 2.5rem 1.5rem;
  }
`;

export const Option = styled.option`
  color: ${({ theme }) => theme.colors.black};
`;

export const ErrorText = styled.p`
  font-size: 0.8rem;
  position: absolute;
  bottom: -1rem;
  left: 0.5rem;
  color: ${({ theme }) => theme.colors.red};

  @media (min-width: 768px) {
    font-size: 1rem;
    bottom: -1.2rem;
  }
`;

export const InputGroup = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 1.2rem;

  @media (min-width: 768px) {
    margin-bottom: 2.1rem;
  }

  ${({ select }) =>
    select &&
    css`
      margin-bottom: 3.7rem;

      @media (min-width: 768px) {
        margin-bottom: 3.2rem;
      }
    `}

  ${({ textarea }) =>
    textarea &&
    css`
      margin-bottom: 1.9rem;

      @media (min-width: 768px) {
        margin-bottom: 3.8rem;
      }
    `}
`;

export const Message = styled.h3`
  font-size: 1.8rem;
  font-weight: 500;
  color: ${({ error, theme }) => (error ? theme.colors.red : theme.colors.green)};
  text-align: center;
  margin-top: 2rem;
`;

export const InvisibleInput = styled.input`
  display: none;
`;
