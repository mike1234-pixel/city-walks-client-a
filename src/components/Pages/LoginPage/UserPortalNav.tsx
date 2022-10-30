import React, { useState, useEffect } from "react";
import {
  MDBIcon,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBHamburgerToggler,
  MDBCollapse,
  MDBContainer,
} from "mdbreact";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { RootState } from "../../../store";
import {
  setLoggedIn,
  setUserId,
  setUserFirstName,
  setUserLastName,
} from "../../../actions/actions";
import * as Actions from "../../../types/Actions";
import "./UserPortalNav.scss";

interface Props {
  loggedIn: boolean;
  setLoggedIn: (loggedIn: boolean) => Actions.SetLoggedIn;
  setUserId: (userId: string) => Actions.SetUserId;
  setUserFirstName: (userFirstName: string) => Actions.SetUserFirstName;
  setUserLastName: (userLastName: string) => Actions.SetUserLastName;
}

const UserPortalNav: React.FC<Props> = (props: Props) => {
  const {
    loggedIn,
    setLoggedIn,
    setUserId,
    setUserFirstName,
    setUserLastName,
  } = props;

  const [toggleLoginPanel, setToggleLoginPanel] = useState<boolean>(false);

  const handleToggleLoginPanel: () => void = () => {
    setToggleLoginPanel(!toggleLoginPanel);
  };

  const pushSlug: Function = useHistory().push;

  const logOut: () => void = () => {
    localStorage.clear();
    localStorage.setItem("popupVisible", "false");
    setLoggedIn(false);
    setUserId("");
    setUserFirstName("");
    setUserLastName("");
    alert("Logged out successfully.");
    pushSlug("/forum");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="user-portal" key="login-page">
      {loggedIn ? (
        <div>
          <MDBNavbar className="login-panel" dark expand="md">
            <MDBContainer>
              <MDBNavbarBrand>
                <strong className="white-text user-portal-logo">
                  User Portal
                </strong>
              </MDBNavbarBrand>
              <MDBHamburgerToggler
                color="#fff"
                className="hamburger1"
                id="hamburger2"
                onClick={handleToggleLoginPanel}
              />
              <MDBCollapse
                id="navbarCollapse3"
                isOpen={toggleLoginPanel}
                navbar
              >
                <MDBNavbarNav right>
                  <MDBNavItem>
                    <a className="user-portal-link" onClick={logOut}>
                      Logout <MDBIcon icon="key" />
                    </a>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBContainer>
          </MDBNavbar>
        </div>
      ) : (
        <div>
          <MDBNavbar className="login-panel" dark expand="md">
            <MDBContainer>
              <MDBNavbarBrand>
                <strong className="white-text user-portal-logo">
                  User Portal
                </strong>
              </MDBNavbarBrand>
              <MDBHamburgerToggler
                color="#fff"
                className="hamburger1"
                id="hamburger2"
                onClick={handleToggleLoginPanel}
              />
              <MDBCollapse
                id="navbarCollapse3"
                isOpen={toggleLoginPanel}
                navbar
              >
                <MDBNavbarNav justify="true">
                  <MDBNavItem>
                    <Link to="/forum/login" className="user-portal-link">
                      Login <MDBIcon icon="key" />
                    </Link>
                  </MDBNavItem>
                  <MDBNavItem>
                    <Link to="/forum/register" className="user-portal-link">
                      Register <MDBIcon far icon="edit" />
                    </Link>
                  </MDBNavItem>
                  <MDBNavItem>
                    <Link to="/forum/verify" className="user-portal-link">
                      Resend Email <MDBIcon far icon="envelope" />
                    </Link>
                  </MDBNavItem>
                  <MDBNavItem>
                    <Link
                      to="/forum/reset-password"
                      className="user-portal-link"
                    >
                      Reset Password <MDBIcon icon="unlock-alt" />
                    </Link>
                  </MDBNavItem>
                  <MDBNavItem>
                    <Link
                      to="/forum/forgot-password"
                      className="user-portal-link"
                    >
                      Forgot Password <MDBIcon far icon="question-circle" />
                    </Link>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBContainer>
          </MDBNavbar>
        </div>
      )}
    </div>
  );
};

const mapStateToProps: (state: RootState) => void = (state) => ({
  loggedIn: state.loginState.loggedIn,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    dispatch,
    ...bindActionCreators(
      { setLoggedIn, setUserId, setUserFirstName, setUserLastName },
      dispatch
    ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPortalNav);
