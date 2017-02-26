import React, { Component } from 'react';
import Editor from './shared/editor.jsx';
import Reviewer from './shared/reviewer.jsx';
import FlashMessage from './shared/flash_message.jsx';
import TitleInput from './shared/title_input.jsx';
import { connect } from 'react-redux';
import { clear_message } from '../../actions/index';

class UpdateEditor extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let id = this.props.params["document_id"];
    let user_id = this.props.params["user_id"];
    let flashMessage = this.props.flash_message.type ? <FlashMessage flash_message={this.props.flash_message} clear={this.props.clear} /> : null;
    return (
      <div className="document">
        {flashMessage}
        <TitleInput
          isNewDoc={false} />
        <div className="ui two column grid row">
          <Editor
            isNewDoc={false}
            params={{id: id, user_id: user_id}}
            id={id}
            user_id={user_id} />
          <Reviewer />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {flash_message: state.document.flash_message};
}

function mapDispatchToProps(dispatch) {
  return {
    clear: () => dispatch(clear_message())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateEditor);
