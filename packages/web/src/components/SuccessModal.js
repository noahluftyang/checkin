import React, { PureComponent } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

const portalNode = document.getElementById('portal');

class SuccessModalComponent extends PureComponent {
  render() {
    return createPortal(<div className={this.props.className}>hello</div>, portalNode);
  }
}

export const SuccessModal = styled(SuccessModalComponent)`
  background-color: rgba(0, 0, 0, 0.3);
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  position: absolute;
  z-index: 100;
`;
