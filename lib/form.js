
import { Component, PropTypes } from 'react'

function noop() {}

export class Input extends Component {
  static propTypes = {
    onKeyPress: PropTypes.func,
    onChange: PropTypes.func,
    onEnter: PropTypes.func
  }

  static defaultProps = {
    onKeyPress: noop,
    onChange: noop,
    onEnter: noop
  }

  onKeyPress = e => {
    const {
      onKeyPress,
      onEnter
    } = this.props

    onKeyPress(e)

    if (e.key === 'Enter') {
      onEnter(e.target.value, e)
    }
  }

  render() {
    const {
      onChange,
      onEnter, // eslint-disable-line
      ...rest,
    } = this.props

    return (
      <input {...rest} onKeyPress={this.onKeyPress}
        onChange={e => onChange(e.target.value, e)} />
    )
  }
}

export class Textarea extends Component {
  static propTypes = {
    onChange: PropTypes.func
  }

  render() {
    const {
      onChange = noop
    } = this.props

    return (
      <textarea {...this.props} onChange={
        e => onChange(e.target.value, e)
      } />
    )
  }
}

export class Checkbox extends Component {
  static propTypes = {
    onChange: PropTypes.func
  }

  render() {
    const {
      onChange = noop
    } = this.props

    return (
      <input {...this.props} type='checkbox' onChange={
        e => onChange(e.target.checked, e)
      } />
    )
  }
}

export class Radio extends Component {
  static propTypes = {
    onChange: PropTypes.func
  }

  render() {
    const {
      onChange = noop
    } = this.props

    return (
      <input {...this.props} type='radio' onChange={
        e => onChange(e.target.checked, e)
      } />
    )
  }
}
