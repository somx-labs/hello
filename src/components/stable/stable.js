import React, {Component} from 'react';

import { Column, Table } from "@blueprintjs/table";

// import './stable.scss'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as stableActions from "../../store/stable/actions";
export default class stable extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    render() {
      return (
          <Table numRows={10}>
            <Column />
            <Column />
            <Column />

          </Table>
      );
    }
  }
// export default connect(
//     ({ stable }) => ({ ...stable }),
//     dispatch => bindActionCreators({ ...stableActions }, dispatch)
//   )( stable );