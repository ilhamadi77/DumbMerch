import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { NavBarsLayout } from '../../../components/NavBarLayout/NavBarsLayout'
import mouse from '../../../img/mouse.png'

const DetailProduct = () => {
  return (
    <>
      <NavBarsLayout />
      <Container>
        {/* <Row>
          <Col lg={3}></Col>
          <Col lg={2} className='bg-danger'>
            <img src={mouse} alt="" />
          </Col>
          <Col lg={7}>

            <div>
              <h1 className='text-danger'>Mouse</h1>
              <h6>stock: 600</h6>
            </div>
            <div>
              <p>- Wireless Mouse
                - Konektivitas wireless 2.4 GHz
                - Jarak wireless hingga 10 m
                - Plug and Play
                - Baterai tahan hingga 12 bulan

                Mouse Wireless Alytech AL - Y5D, hadir dengan desain 3 tombol mouse yang ringan dan mudah dibawa. Mouse ini menggunakan frekuensi radio 2.4GHz (bekerja hingga jarak 10m) dan fitur sensor canggih optik pelacakan dengan penerima USB yang kecil. Mouse ini didukung oleh 1x baterai AA (hingga 12 bulan hidup baterai). mendukung sistem operasi Windows 7,8, 10 keatas, Mac OS X 10.8 atau yang lebih baru dan sistem operasi Chrome OS.</p>
            </div>
            <div className='d-flex justify-content-end text-danger'>
              <h4>Rp. 600.300</h4>
            </div>
            <button className=' bg-danger' >Buy</button>
          </Col>
        </Row> */}


        <Row>
          <Col md="2"></Col>
          <Col md="3">
            <img src={mouse} height='350px' alt="mouse" />
          </Col>
          <Col md="6">
            <div className="text-header-product-detail">Mouse</div>
            <div className="text-content-product-detail">Stock : 300</div>
            <div className="text-content-product-detail mt-4">
              - Wirelles Mouse <br />- Konektivitas
            </div>
            <p className="text-content-product-detail mt-4">- Wireless Mouse
              - Konektivitas wireless 2.4 GHz
              - Jarak wireless hingga 10 m
              - Plug and Play
              - Baterai tahan hingga 12 bulan

              Mouse Wireless Alytech AL - Y5D, hadir dengan desain 3 tombol mouse yang ringan dan mudah dibawa. Mouse ini menggunakan frekuensi radio 2.4GHz (bekerja hingga jarak 10m) dan fitur sensor canggih optik pelacakan dengan penerima USB yang kecil. Mouse ini didukung oleh 1x baterai AA (hingga 12 bulan hidup baterai). mendukung sistem operasi Windows 7,8, 10 keatas, Mac OS X 10.8 atau yang lebih baru dan sistem operasi Chrome OS</p>
            <div className="text-price-product-detail text-end mt-4">Rp.600.000</div>
            <div className="d-grid gap-2 mt-5">
              <button className="btn btn-buy">Buy</button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}


export default DetailProduct