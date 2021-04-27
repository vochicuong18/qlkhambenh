import React from 'react';
import axios from 'axios';

export default class Modal_AddKhoa extends React.Component {
    state = {
        name:'',
        description:'',
        //img:''
    }
   
    handleChangeName = event => {
        this.setState({name:event.target.value})
    }

    handleChangeDes = event => {
        this.setState({description:event.target.value})
    }
    handleSubmit = event =>{
       event.preventDefault(); 
       const obj = {
           name: this.state.name,
           description:this.state.description
       } 

       axios.post('http://113.173.154.51:9000/khoa/create', obj)
       .then(res =>{
            console.log(res.data)
        })

        this.setState({
            name: this.state.name,
            description:this.state.description
        });
        console.log("aaa");
        window.location.reload()
    }
    render () {
        return(
            <div>
                <div className="modal fade" id="themBacSi" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Thông tin khoa</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <form onSubmit = {this.handleSubmit}>
                            <div className="modal-body">                           
                                <div className="form-group">
                                    <label htmlFor="">Tên khoa:</label>
                                    <input type="text" name="" id="" className="form-control" placeholder="" aria-describedby="helpId" maxLength =  {50} onChange = {this.handleChangeName}/>
                                    <label htmlFor="">Chuyên khoa:</label>
                                    <input type="text" name="" id="" className="form-control" placeholder="" aria-describedby="helpId" onChange = {this.handleChangeDes} />
                                </div>  
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Đóng</button>
                                <button type="submit" className="btn btn-primary">Lưu</button>
                            </div>
                        </form>  
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}
