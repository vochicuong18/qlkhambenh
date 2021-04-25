import React,{ Component } from 'react';

class frmDatLich extends Component {
  render () {
    return (
      <div>
          <div className="item">
          <div className="item__contact col-sm">
          <h4>ĐẶT HẸN KHÁM ONLINE</h4>
            <div className="form-group">             
              <label htmlFor='true'></label>Họ tên:
              <input type="text" name="" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
              <label htmlFor='true'>Số điện thoại:</label>
              <input type="text" name="" id="" className="form-control" placeholder="" aria-describedby="helpId"/> 
              <label htmlFor='true'>Nội dung:</label>
              <textarea type="text" name="" id="" className="form-control" placeholder="" aria-describedby="helpId"/>           
            </div>
          </div>
          <div className="item__contact col-sm">
            <h4>THÔNG TIN LIÊN HỆ</h4>
          </div>
          <div className="item__contact col-sm">
            <h4>THỜI GIAN LÀM VIỆC</h4>
          </div>       
        </div>
      </div>
    )

  };

}

export default frmDatLich;
