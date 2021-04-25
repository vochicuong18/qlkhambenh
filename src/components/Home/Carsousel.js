import React,{ Component} from 'react';

class Carsousel extends Component {
    render () {
        return (
            <div>
                <div id="carouselId" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselId" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselId" data-slide-to="1"></li>
                        <li data-target="#carouselId" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active">
                            <img src='https://www.alten.com/wp-content/uploads/2019/04/computer-1149148_1920.jpg' alt="First slide"/>
                        </div>
                        <div className="carousel-item">
                            <img src='https://news-tunisia.tunisienumerique.com/wp-content/uploads/2020/10/annulation_de_la_greve_des_collecteurs_du_lait_1603740119-1.jpg' alt="Second slide"/>
                        </div>
                        <div className="carousel-item">
                            <img src='https://wallpaperaccess.com/full/619997.png' alt="Third slide"/>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselId" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselId" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                <div className="feel">
                <h2 className="title">Bạn cảm thấy thế nào?</h2>
                <p className="">Hãy nói với chúng tôi để LCHealth giúp bạn giải quyết vấn đề</p>
                <div className="wapper__feel">
                    <div className="input__feel">
                        <input type="text" name="" id="" className="form-control textfeel" placeholder="Triệu chứng bệnh"></input>
                        <button type="button" className="btn btn-info">Chẩn đoán</button>
                    </div>
                </div>  
            </div>
            </div>
        );

    }
}
export default Carsousel
