import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';

class PassToMeMyRouterHistory extends PureComponent {

  redirectToHome = () => {
    const { history } = this.props
    if(history) history.push('/')
  }

  render() {
    const { history } = this.props;

    return(
      (history)
      ?
        <button className="btn2" onClick={this.redirectToHome}>Voltar</button>
      :
        <div>Oh, we did not get pathname!</div>
    );
  }

}

export default withRouter(PassToMeMyRouterHistory)