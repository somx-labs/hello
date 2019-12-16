import React, {Component} from 'react';
// import './footer.scss'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as footerActions from "../../store/footer/actions";
export default class footer extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    render() {
      return (
        <div>
          SomX Labs &copy; 2019
        </div>
      );
    }
  }
// export default connect(
//     ({ footer }) => ({ ...footer }),
//     dispatch => bindActionCreators({ ...footerActions }, dispatch)
//   )( footer );