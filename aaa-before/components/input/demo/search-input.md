---
order: 4
title:
    zh-CN: 搜索框
    en-US: Search box
---

## zh-CN

带有搜索按钮的输入框。

## en-US

Example of creating a search box by grouping a standard input with a search button.

````jsx
import { Input, Button } from 'rubix';
import classNames from 'classnames';
const InputGroup = Input.Group;

const SearchInput = React.createClass({
  getInitialState() {
    return {
      value: '',
      focus: false,
    };
  },
  handleInputChange(e) {
    this.setState({
      value: e.target.value,
    });
  },
  handleFocusBlur(e) {
    this.setState({
      focus: e.target === document.activeElement,
    });
  },
  handleSearch() {
    if (this.props.onSearch) {
      this.props.onSearch(this.state.value);
    }
  },
  render() {
    const { style, size, placeholder } = this.props;
    const btnCls = classNames({
      'rubix-search-btn': true,
      'rubix-search-btn-noempty': !!this.state.value.trim(),
    });
    const searchCls = classNames({
      'rubix-search-input': true,
      'rubix-search-input-focus': this.state.focus,
    });
    return (
      <div className="rubix-search-input-wrapper" style={style}>
        <InputGroup className={searchCls}>
          <Input placeholder={placeholder} value={this.state.value} onChange={this.handleInputChange}
            onFocus={this.handleFocusBlur} onBlur={this.handleFocusBlur} onPressEnter={this.handleSearch}
          />
          <div className="rubix-input-group-wrap">
            <Button icon="search" className={btnCls} size={size} onClick={this.handleSearch} />
          </div>
        </InputGroup>
      </div>
    );
  },
});

ReactDOM.render(
  <SearchInput placeholder="input search text"
    onSearch={value => console.log(value)} style={{ width: 200 }}
  />
, mountNode);
````