import React,{ Component } from 'react';

class SerCal extends Component {
    render() {
        return(
          <div>
              <div className='sercal'>
                    <div className="img__call">
                        <img alt ='' src='./images/call.png'/>
                    </div>                   
                    <div className='content'>
                        <div>
                            <h2 className='title' data-aos="fade-up">Tư vấn sức khỏe từ xa 24/7 qua video và chat</h2>
                            <div className='color__title' data-aos="fade-up"></div>
                        </div>
                        <div className='text' data-aos="fade-up">
                            Bạn cần sự tư vấn chuyên môn khi gặp các vấn đề sức khỏe? Dù bạn ở đâu hay vào bất cứ lúc nào, 
                            các bác sĩ chuyên khoa của chúng tôi luôn sẵn sàng tư vấn, giải đáp đáp mọi thắc mắc của bạn.
                        </div>
                        <div className="icon__sercal row" data-aos="fade-up">
                            <div class="icon__item col">
                               
                                <img alt ='' className='sercalimg' src='https://cdn.jiohealth.com/jio-website/home-page/jio-website-v2.1.4/assets/icons/video-icon.svg'/>                           
                                Video call với bác sĩ
                            </div>
                            <div  className="icon__item col">
                                <img alt ='' className='sercalimg' src='https://cdn.jiohealth.com/jio-website/home-page/jio-website-v2.1.4/assets/icons/chat-icon.svg'/>
                                Chat với bác sĩ
                            </div>

                            
                            
                        </div>
                          
                    </div>
              </div>
          </div>  
        );
    }
}
export default SerCal;