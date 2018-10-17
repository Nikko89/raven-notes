import styled from 'react-emotion';

const StyledSigninForm = styled('form')`
  height: 300px;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-evenly;
  text-align: center;
`;

const SigninText = styled('div')`
  font-size: 1.6em;
  font-weight: 300;
  margin-bottom: 5vh;
`;

const Input = styled('input')`
  margin: 0px 15px;
  display: flex;
  justify-content: center;
  background-color: transparent;
  color: ${props => props.theme.colors.text};
  border: none;
  padding: 0.5em 1.5em 1.5em 0.8em;
  border-bottom: 1.2px solid ${props => props.theme.colors.pdark};
  font-size: 0.8em;
  :focus {
    outline: none;
  }
  :valid {
    ${props => props.showValidationHints && `border-color: #3f51b5`};
  }
`;

const ButtonWrapper = styled('div')`
  margin: 0 15px;
  display: flex;
  justify-content: space-between;
`;

const Button = styled('button')`
  border: none;
  background: transparent;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 0.6em;
  cursor: pointer;
  border-radius: 10px;
  :focus {
    outline: none;
  }
  :nth-child(1) {
    flex-basis: 45%;
  }
  :nth-child(2) {
    flex-basis: 15%;
  }
`;

const FormError = styled('span')`
  font-size: 0.8rem;
  background: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.softWarning}
  padding: 0.5rem;
  margin: 1rem;
`;

export { StyledSigninForm, Input, Button, SigninText, ButtonWrapper, FormError };
