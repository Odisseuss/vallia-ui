import * as React from "react";
import styled from "styled-components";
import BigText from "./BigText";
import CustomContainer from "./CustomContainer";
import Paragraph from "./Paragraph";
import { ReactComponent as MailIcon } from "../svg/Mail.svg";
import { ReactComponent as PhoneIcon } from "../svg/Phone.svg";
import { animations, colors } from "../ThemeConfig";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "./Button";

export interface GetInTouchWithOneButtonProps {}

const GetInTouchWithOneButton: React.FunctionComponent<GetInTouchWithOneButtonProps> = (
  props
) => {
  return (
    <CustomContainer
      width="100%"
      flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <BigText fontSize="3rem" fontColor={colors.lightest_grey}>
        Get In Touch
      </BigText>
      <Paragraph fontSize="1.1rem" textAlign="center">
        I am available for freelance work. Connect with me via phone or email:
      </Paragraph>
      <Button
        outline
        elementColor={colors.primary}
        uppercase
        whileHover={animations.button_outline_fill}
      >
        Say hi
      </Button>
    </CustomContainer>
  );
};

export default GetInTouchWithOneButton;
