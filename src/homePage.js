import React, { Component } from 'react';

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <section className='section'>
          <div className='container'>
            <div className='columns is-vcentered'>
              <div className='column is-3'>
                <h1 className='is-size-1 title'>BB Онлайн сургалт</h1>
                <h2 className='is-size-2 subtitle'>Танилцуулга</h2>
                <p>
                  {' '}
                  Та юу ч зааж болно. Жишээ нь програмчлал, маркетинг, хувь
                  хүний хөгжил, бизнесийн арга ухаан, стартапын нууц, элсэлтийн
                  математик, ширээний теннис, англи хэлний орчуулга, хоол хийх
                  тухай, фэйсбүүк ашиглах арга, уран зураг, шатар... Хамгийн гол
                  нь та уг сэдвээ өөрөө сайн мэддэг байх ёстой бөгөөд
                  хичээлийнхээ видео бичлэгийг өөрөө хийсэн байна гэсэн ганц л
                  нөхцөлтэй.
                </p>
              </div>
              <div className='column is-5'>
                <img
                  src='https://images.pexels.com/photos/5054213/pexels-photo-5054213.jpeg?cs=srgb&dl=pexels-cottonbro-5054213.jpg&fm=jpg'
                  alt='zurag'
                  className='px-6'
                />
              </div>
              <div className='column is-4'>
                <div className='is-size-4 mb-4'>Зөвхөн Видео</div>
                <p className='mb-4'>
                  Бүх сургалт нь 3-30 минутын урттай видео хэлбэрээр хүргэгдэнэ.
                  Мянга уншсанаас нэг үзсэн нь дээр. Таны цаг завыг супер хэмнэх
                  болно гэдгийг амлая.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className='section'>
          <div className='container'>
            <div className='columns is-8 is-variable'>
              <div className='column is-7-tablet'>
                <div className='tabs is-boxed'>
                  <ul>
                    <li className='is-active' data-target='product-details'>
                      <p>Үйлчилгээний нөхцөл</p>
                    </li>
                  </ul>
                </div>
                <div className='px-2' id='tab-content'>
                  <div id='product-details'>
                    <p>
                      Манай сургалтын сайт-д бүртгүүлсэнээр та өөрийн бэлтгэсэн
                      хичээлийг нийтэд хүргэх боломжтой бөгөөд чанарын шаардлага
                      хангасан өөрийн бэлтгэсэн хичээлийг оруулна уу!
                    </p>
                  </div>
                </div>
              </div>
              <div className='column is-5-tablet'>
                <div className='message is-warning'>
                  <div className='message-header'>
                    <p>Анхааруулга!!!</p>
                  </div>
                  <div className='message-body'>
                    <p>
                      Та хэдэн ч сургалт явуулж болох бөгөөд зөвхөн өөрийн
                      хийсэн болон чанарын шаардлага хангасан сургалт илгээнэ
                      үү!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
