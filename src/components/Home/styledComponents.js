import styled from 'styled-components'
/* CardContainer,
  TextImageContainer,
  Heading,
  Image,
  UserContainer,
  UserInputContainer,
  EditingOptionsContainer,
  BoldStyle,
  ItalianStyle,
  Underline,
  UserInput, */
export const HomeBgContainer = styled.div`
  background-color: #25262c;
  padding: 2.5rem;
  width: 100%;
  min-height: 100vh;
`
export const CardContainer = styled.div`
  background-color: #1b1c22;
  display: flex;
  flex-direction: row;
  padding: 1.6rem;
  width: 100%
`
export const TextImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 45%;
  margin-right: 1.8rem;
`
export const Heading = styled.h1`
  font-size: 1.7rem;
  font-weight: bold;
  font-family: "Roboto";
  color:  #f8fafc;
  align-self: center;
`
export const Image = styled.img`
  width: 90%;
`
export const UserContainer = styled.div`
  background-color: #25262c;
  border: 1px solid #334155;
  border-radius: 10px;
  width: 55%;
`
export const EditingOptionsContainer = styled.div`
  display: flex;
  flex-direction: row:
  justify-content: flex-start;
  align-items: center;
  list-style: none;
  padding: 1rem 1.6rem;
`
export const BoldStyle = styled.button`
  list-style: none;
  font-size: 1.2rem;
  color:  ${props => props.btnColor}; 
  font-weight: bold;
  margin-right: 1.6rem;
  border-width: 0px;
  cursor: pointer;
  background-color: transparent;
`
export const ItalianStyle = styled.button`
  list-style: none;
  font-size: 1.3rem;
  color:  ${props => props.btnColor}; 
  font-style: italic;
  margin-right: 1.6rem;
  border-width: 0px;
  cursor: pointer;
  background-color: transparent;
`
export const Underline = styled.button`
  list-style: none;
  font-size: 1.2rem;
  color:  ${props => props.btnColor}; 
  text-decoration: underline;
  margin-right: 1.6rem;
  border-width: 0px;
  cursor: pointer;
  background-color: transparent;
`
export const UserInputContainer = styled.div`
  border-top: 1px solid #334155;
  padding: 1.6rem;
`
export const UserInput = styled.textarea`
  border-width: 0px;
  background-color: transparent;
  width: 100%;
  outline: none;
  color: #f1f5f9;
  font-size: 1.2rem;
  font-style: ${props => props.fontStyle};
  text-decoration: ${props => props.textDecoration};
  font-weight: ${props => props.fontWeight};
`
