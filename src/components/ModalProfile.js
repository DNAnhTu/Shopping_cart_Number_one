import React from 'react'
import './ModalProfile.css';

function Modal({closeModal}){
  return <div className="modalBackground-profile">
    <div className="modalContainer-profile">
      <button className="closebtn-profile" onClick={() => closeModal(false)}>X</button>
      <div className="title-profile">
        <h3 style={{color: "red"}}>Thông tin thành viên</h3>
        <h6>Mai Thanh An - 4501104002</h6>
        <h6>Mai Sơn Tùng - 4501104270</h6>
        <h6>Đinh Hữu Điểm - 4501104051</h6>
        <h6>Hồng Quang Thành - 4501104213</h6>
        <h6>Đặng Nguyễn Anh Tú - 4501104265</h6>
      </div>
      <div className="footer-profile">
        <button className="btnCancel-profile" onClick={() => closeModal(false)}>Cancel</button>
      </div>
    </div>
  </div>
}
export default Modal;