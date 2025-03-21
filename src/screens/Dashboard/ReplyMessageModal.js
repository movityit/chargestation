import React from 'react';

import { Modal, Button, Form, Divider, Message } from 'semantic';

import modal from 'helpers/modal';

@modal
export default class ReplyMessageModal extends React.Component {
  state = {
    payload: '{}',
    error: null,
  };

  onSubmit = () => {
    try {
      this.setState({ error: null });
      const payload = this.state.payload ? JSON.parse(this.state.payload) : '';
      this.props.onSave({ payload });
      this.props.close();
    } catch (e) {
      this.setState({ error: e.message });
      console.error(e);
    }
  };

  render() {
    const { call } = this.props;

    return (
      <>
        <Modal.Header>Reply Message</Modal.Header>
        <Modal.Content>
          <p>Reply a message from the Central System</p>
          <p>
            <b>Action:</b> {call.action}
          </p>
          <p>
            <b>Payload:</b> {call.from}
          </p>
          <p>
            <code>{JSON.stringify(call.payload, null, 2)}</code>
          </p>

          <Divider />
          <Form onSubmit={this.onSubmit} id="reply-message-form">
            <Form.TextArea
              label="Response (JSON format)"
              name="payload"
              value={this.state.payload}
              onChange={(e) => this.setState({ payload: e.target.value })}
            />
            <Divider hidden />
          </Form>
          {this.state.error && <Message error>{this.state.error}</Message>}
        </Modal.Content>
        <Modal.Actions>
          <Button primary form="reply-message-form" content="Reply" />
        </Modal.Actions>
      </>
    );
  }
}
