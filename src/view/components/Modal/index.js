import React, {useEffect, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideModal } from "../../../actions/modalActions";
import { CONTACT, LOGIN } from '../../../constants/modalModes'
import Contact from './Contact'
import Login from './Login'
import "./modal.scss";


export default function Modal () {

  const mode = useSelector(state => state.modal)
  const dispatch = useDispatch()
  const ref = useRef(null)

  useEffect(() => {
    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
    }
  })

  function handleClick (event) {
    if (ref.current && !ref.current.contains(event.target)) {
      handleClickOutside()
  }}

  function handleClickOutside () {
    dispatch(hideModal())
  }
  
  return (
    <div id="modal">
      <div id="modal-content" ref={ref}>
        <button className="modal-close" onClick={handleClickOutside}>
          &times;
        </button>
        {mode === CONTACT && <Contact />}
        {mode === LOGIN && <Login />}
      </div>
    </div>
  );
}
