import React from 'react';
import screen from 'helpers/screen';
import { Header } from 'semantic';
import { Breadcrumbs } from 'components';

@screen
export default class NotFound extends React.Component {
  render() {
    const { message, ...rest } = this.props;
    return (
      <React.Fragment>
        <Breadcrumbs {...rest} />
        <Header as="h1">
          {this.props.message || 'Sorry that page was not found.'}
        </Header>
      </React.Fragment>
    );
  }
}
