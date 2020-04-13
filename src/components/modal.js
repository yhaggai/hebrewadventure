import ReactDOM from 'react-dom';
import OutsideAlerter from '../utils/outside-alerter';
// Use a ternary operator to make sure that the document object is defined
const portalRoot =
  typeof document !== `undefined` ? document.getElementById('portal') : null;

const Modal = ({ callback, children }) => {
  return ReactDOM.createPortal(
    // <OutsideAlerter>
    <div
      style={{
        position: 'absolute',
        top: '0',
        bottom: '0',
        left: '0',
        right: '0',
        position: 'fixed',
        display: 'grid',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.8)',
      }}
    >
      <div
        style={{
          padding: 20,
          background: 'tranparent',
          borderRadius: '2px',
          display: 'inline-block',
          minHeight: '300px',
          margin: '1rem',
          position: 'relative',
          minWidth: '300px',
          boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
          justifySelf: 'center',
        }}
      >
        {children}
        <hr />
        <button onClick={callback}>Close</button>
      </div>
    </div>,
    // </OutsideAlerter>,
    portalRoot
  );
};

export default Modal;
