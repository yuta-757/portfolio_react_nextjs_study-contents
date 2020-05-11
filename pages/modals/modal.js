import React from 'react';
import Modal from 'react-modal';
import Head from 'next/head';
import Swiper from './swiper'
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
 }
};

// Modal.setAppElement('root') //任意のアプリを設定する　create-react-appなら#root
class ModalWindow extends React.Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  openModal() {
    this.setState({modalIsOpen: true});
  }
  closeModal() {
    this.setState({modalIsOpen: false});
  }
  render() {
    return (
      <div>
        <Head>
            <link rel="stylesheet" href="/css/modal.css" />
        </Head>

        <button onClick={this.openModal} className="btn">スライドで確認</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="CSS Modal"
        >
          {/* 引数が一つの場合、アロー関数を省略 */}
          {/* <div className="modal">
            <img src="images/css_slides_01.jpeg" alt="slide01"/>
            <button onClick={this.closeModal} className="btn">閉じる</button>
          </div> */}
          <Swiper></Swiper>


        </Modal>
      </div>
    );
  }
}
export default ModalWindow;