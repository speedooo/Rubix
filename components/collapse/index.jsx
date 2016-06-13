import RcCollapse from 'rc-collapse';
import React from 'react';

export default class Collapse extends React.Component {
  static Panel = RcCollapse.Panel;

  static defaultProps = {
    prefixCls: 'rubix-collapse',
  }

  render() {
    return <RcCollapse {...this.props} />;
  }
}
