import React, {Component} from 'react';

import {ErrorUI} from '../../constants/Strings';
import Logger from '../../utils/LoggerUtil';
import {Wrapper, ErrorTitle} from './styled';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {hasError: false};
  }
  static getDerivedStateFromError(error) {
    Logger.log('Error', error);
    return {hasError: true};
  }

  componentDidCatch(error, errorInfo) {
    Logger.log('Some JS error occurred', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Wrapper>
          <ErrorTitle>{ErrorUI.title}</ErrorTitle>
        </Wrapper>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
