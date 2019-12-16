import React, {Component} from 'react';
import { Classes, InputGroup, Tab, Tabs } from '@blueprintjs/core';
import Stable from '../stable';
// import './tabs.scss'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as tabsActions from "../../store/tabs/actions";
export default class tabs extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    render() {
      return (
        <Tabs vertical="true">
          <Tab id="1" title="Tab One" panel={ <Stable />}/>
          <Tab id="2" title="Tab Two" />
          <Tab id="3" title="Tab Three" />
          <Tabs.Expander /> 
          <InputGroup className={Classes.FILL} type="text" placeholder="Search" />
        </Tabs>
      );
    }
  }
// export default connect(
//     ({ tabs }) => ({ ...tabs }),
//     dispatch => bindActionCreators({ ...tabsActions }, dispatch)
//   )( tabs );