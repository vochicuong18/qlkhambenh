import React, { Component } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faUserEdit } from '@fortawesome/free-solid-svg-icons'

class TableRow extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        axios.delete('http://localhost:3000/api/bacsi/'+this.props.obj.id)
            .then(console.log('Deleted')) 
            .catch(err => console.log(err))
            window.location.reload();       
    }

    render() {      
        return (
            <tr>
                <td>{this.props.obj.id}</td>
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.chuyenkhoa}</td>
                <td>{this.props.obj.noidaotao}</td>
                <td>{this.props.obj.bangcap}</td>
                <td></td>
                <td>
                <Link to={"/edit/"+ this.props.obj.id}>
                    <FontAwesomeIcon icon ={faUserEdit} style={{fontSize:'20px'}} />
                </Link>

                <button className='btn__row' onClick = {this.delete}><FontAwesomeIcon icon ={faTrash} style={{fontSize:'20px', color:'red',marginLeft:'5px'}}/></button> 
                </td>
            </tr>       
        );
    }
}

export default TableRow;