import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../../actions/auth';

export const HeaderTrial = ({ startLogin }) => (
  <div className="header2">
    <div className="container">
      <div className="header__content">
      <p className="header2__title">Notehi</p>
      <button className="button2 button2--login" onClick={startLogin}>Google Login</button>
</div>
    </div>
  </div>
);


const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(HeaderTrial);

