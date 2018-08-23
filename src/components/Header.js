import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
  <div className="header2">
    <div className="container">
      <div className="header__content">
        <Link className="header__title" to="/home">
          <p className="header2__title">Notehi</p>
        </Link>
        <button className="button2 button2--login" onClick={startLogout}>Logout</button>
      </div>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);