import React, {Component} from 'react';

import { Alignment, Classes, Button, Navbar, NavbarDivider, NavbarHeading, NavbarGroup } from '@blueprintjs/core';

import xlogo from '../../static/images/x_logo.svg';
// import somxlogo from '../../static/images/somx_logo.png';

// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as headerActions from "../../store/header/actions";
export default class header extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    render() {
      return (
        <div>
          <Navbar>
            <NavbarGroup>
              <NavbarHeading><img src={ xlogo } style={{ height: 22 }} alt="SomX Labs"></img></NavbarHeading>
            </NavbarGroup>
            <NavbarGroup align={ Alignment.RIGHT }>
              <Button className={Classes.MINIMAL} icon="home" text="Home"></Button>
              <Button className={Classes.MINIMAL} icon="document" text="Files"></Button>
              <NavbarDivider />
              <Button className={Classes.MINIMAL} icon="user"></Button>
              <Button className={Classes.MINIMAL} icon="notifications"></Button>
              <Button className={Classes.MINIMAL} icon="cog"></Button>
            </NavbarGroup>
          </Navbar>
        </div>
      );
    }
  }
// export default connect(
//     ({ header }) => ({ ...header }),
//     dispatch => bindActionCreators({ ...headerActions }, dispatch)
//   )( header );