import React, { Component } from 'react'
import Image from 'react-bootstrap/Image'
import { Form, Button} from "react-bootstrap"
export default class list extends Component {
    render() {
        
        return (
            <div className="list__item">
                <div  className="item__avatar">
                    <Image src="https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png" width="37%" roundedCircle />
                </div>
                <div className="item__name">
                    <Form.Label >{this.props.obj.name}</Form.Label>
                </div>
                <div className="item__chuyenkhoa">
                    <Form.Label >{this.props.obj.chuyenkhoa}</Form.Label>
                </div>
                {/* <div className="br"> </div> */}
                <div className="item__content">
                    <Form.Label >Description</Form.Label>
                </div>
                <div className="item__btn">
                    <Button variant='primary'>Xem thêm</Button>
                </div>
            </div>
        )
    }
}
