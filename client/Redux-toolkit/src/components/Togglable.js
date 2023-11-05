import { useState, forwardRef, useImperativeHandle } from 'react'
import { styled } from 'styled-components'

const SwitchButton = styled.button`
  background-color: #ff9234;
  color: white;
  font-size: 1.2rem;
  padding: 0.5em 1em;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #ffae5e;
  }
`
const Togglable = forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false)

  const toggleVisiblity = () => {
    setVisible(!visible)
  }

  useImperativeHandle(ref, () => {
    return {
      toggleVisiblity
    }
  })

  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }

  return (
    <div>
      <div style={hideWhenVisible}>
        <SwitchButton onClick={toggleVisiblity}>{props.buttonLabel}</SwitchButton>
      </div>
      <div style={showWhenVisible}>
        {props.children}
        <SwitchButton onClick={toggleVisiblity}>cancel</SwitchButton>
      </div>
    </div>
  )
})

Togglable.displayName = 'Togglable'

export default Togglable