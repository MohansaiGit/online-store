import React, { Component } from 'react'
import cap1 from './images/whitecap.jpg'
import { Card, Image, Row, Col } from 'antd';
import T_shirt from './images/collar-t-shirts.jpg'
import shirt from './images/white-shirt.webp'
import "antd/dist/antd.css"
import styles from './Store.module.css'
import CapCustomization from './CapCustomization';
import ShirtsCustomization from './ShirtsCustomization';
import TshirtCustomization from './TshirtCustomization';

const { Meta } = Card;

class Products extends Component {
  constructor(props) {
    super(props)

    this.state = {
         isCap:false,
         type: null
    }
  }
  clickTheProducts(type) {
    console.log(type)
    this.setState({
      type:type
    })
  }

  getBack(){
    this.setState({type: null})
  }
  
  render() {
    return (
      <div className={styles.containermainscreen}>
      {/* //   {this.state.isCap ? <CapCustomization/>:<div> */}
      {this.state.type ? <>
       {/* {this.state.type == 'cap'? <CapCustomization type={this.state.type} goBack={this.getBack.bind(this)}/> : null}
       {this.state.type == 'shirt'? <ShirtsCustomization />   : null}
       {this.state.type == 'tshirt'? <TshirtCustomization /> : null} */}
       <CapCustomization type={this.state.type} goBack={this.getBack.bind(this)}/>
      </>:
        <Row>
          <Col span={8}>
            <Card
              hoverable
              style={{ width: 250 }}
              cover={<Image alt="example" src={cap1} preview={false} onClick={()=>{this.clickTheProducts('cap')}} />}
            >
              <Meta title="Caps" />
            </Card>
          </Col>
          <Col span={8}>
            <Card
              hoverable
              style={{ width: 250 }}
              cover={<Image alt="example" src={shirt} preview={false} onClick={()=>{this.clickTheProducts('shirt')}}/>}
            >
              <Meta title="Shirts" />
            </Card>
          </Col>
          <Col span={8}>
            <Card
              hoverable
              style={{ width: 250 }}
              cover={<Image alt="example" src={T_shirt} preview={false} onClick={()=>{this.clickTheProducts('tshirt')}}/>}
            >
              <Meta title="T-Shirts" />
            </Card>
          </Col>

        </Row>}
        {/* // </div>} */}
        
      
      </div>
    )
  }
}

export default Products 