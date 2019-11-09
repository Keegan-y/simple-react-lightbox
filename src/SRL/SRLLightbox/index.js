import React, { useContext } from "react";
import { CSSTransition } from "react-transition-group";
import Portal from "../SRLPortal";
import PropTypes from "prop-types";
import SRLLightboxGallery from "./SRLLightboxGallery";
import { SRLCtx } from "../SRLContext";
import styled from "@emotion/styled";
const duration = 500;

const PortalWithTransitionStyles = styled(Portal)`
  &.portal-transition-enter {
    opacity: 0;
  }
  &.portal-transition-enter-active {
    opacity: 1;
    transition: opacity ${duration}ms ease-in-out;
  }
  &.portal-transition-exit {
    opacity: 1;
  }
  &.portal-transition-exit-active {
    opacity: 0;
    transition: opacity ${duration}ms ease-in-out;
  }
`;



const Test = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 9991;
  background-color: red;
`

function SRLLightbox() {
  const context = useContext(SRLCtx);
  return (
    <CSSTransition
      in={context.isOpened}
      className="portal-transition"
      classNames="portal-transition"
      timeout={duration}
    >
      <PortalWithTransitionStyles
        selector="SRLLightbox"
        isOpened={context.isOpened}
      >
        <Test>Hello Portal</Test>
      </PortalWithTransitionStyles>
    </CSSTransition>
  );
}

SRLLightbox.propTypes = {
  context: PropTypes.object
};

export default SRLLightbox;
