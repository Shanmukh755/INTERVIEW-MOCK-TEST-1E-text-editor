import React, {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import {
  HomeBgContainer,
  CardContainer,
  TextImageContainer,
  Heading,
  Image,
  UserContainer,
  UserInputContainer,
  EditingOptionsContainer,
  BoldStyle,
  ItalianStyle,
  Underline,
  UserInput,
} from './styledComponents.js'

class Home extends Component {
  state = {
    textToBold: false,
    textToItalic: false,
    textToUnderline: false,
  }

  onClickBold = () => {
    this.setState(prevState => ({textToBold: !prevState.textToBold}))
  }

  onClickItalic = () => {
    this.setState(prevState => ({textToItalic: !prevState.textToItalic}))
  }

  onClickUnderline = () => {
    this.setState(prevState => ({textToUnderline: !prevState.textToUnderline}))
  }

  render() {
    const {textToBold, textToItalic, textToUnderline} = this.state
    const fontWeight = textToBold === false ? 'normal' : 'bold'
    const fontStyle = textToItalic === false ? 'normal' : 'italic'
    const textDecoration = textToUnderline === false ? 'normal' : 'underline'
    const boldBtnColor = textToBold === false ? '#f1f5f9' : '#faff00'
    const italicBtnColor = textToItalic === false ? '#f1f5f9' : '#faff00'
    const underlineBtnColor = textToUnderline === false ? '#f1f5f9' : '#faff00'

    return (
      <HomeBgContainer>
        <CardContainer>
          <TextImageContainer>
            <Heading>Text Editor</Heading>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </TextImageContainer>
          <UserContainer>
            <EditingOptionsContainer>
              <BoldStyle
                type="button"
                onClick={this.onClickBold}
                btnColor={boldBtnColor}
                data-testid="bold"
              >
                <VscBold />
              </BoldStyle>
              <ItalianStyle
                type="button"
                onClick={this.onClickItalic}
                btnColor={italicBtnColor}
                data-testid="italic"
              >
                <GoItalic />
              </ItalianStyle>
              <Underline
                type="button"
                onClick={this.onClickUnderline}
                btnColor={underlineBtnColor}
                data-testid="underline"
              >
                <AiOutlineUnderline />
              </Underline>
            </EditingOptionsContainer>
            <UserInputContainer>
              <UserInput
                type="text"
                rows="30"
                fontWeight={fontWeight}
                fontStyle={fontStyle}
                textDecoration={textDecoration}
              />
            </UserInputContainer>
          </UserContainer>
        </CardContainer>
      </HomeBgContainer>
    )
  }
}

export default Home
