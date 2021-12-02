import React from 'react'
import './Modal.css';

function Modal({closeModal}){
  return <div className="modalBackground">
    <div className="modalContainer">
      <button className="closebtn" onClick={() => closeModal(false)}>X</button>
      <div className="title">
        <h3 style={{color: "red"}}>Đặt hàng thành công</h3>
        <h5>Cảm ơn quý khách đã đặt hàng</h5>
      </div>
      <div className="footer">
        <button className="btnCancel" onClick={() => closeModal(false)}>Cancel</button>
      </div>
    </div>
  </div>
}
export default Modal;