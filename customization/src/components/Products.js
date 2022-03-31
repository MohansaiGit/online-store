import React, { Component } from 'react'
import cap1 from './images/whitecap.jpg'
import { Card, Image, Row, Col } from 'antd';
import T_shirt from './images/collar-t-shirts.jpg'
import shirt from './images/white-shirt.webp'
import "antd/dist/antd.css"
import styles from './Store.module.css'
import CapCustomization from './CapCustomization'

const { Meta } = Card;

class Products extends Component {
  constructor(props) {
    super(props)

    this.state = {
         isCap:false
    }
  }
  clickTheProducts = () => {
    console.log('checked')
    this.setState({
      isCap:true
    })
  }
  render() {
    return (
      <div className={styles.containermainscreen}>
        {this.state.isCap ? <CapCustomization/>:<div><Row>
          <Col span={8}>
            <Card
              hoverable
              style={{ width: 250 }}
              cover={<Image alt="example" src={cap1} preview={false} onClick={this.clickTheProducts } />}
            >
              <Meta title="Caps" />
            </Card>
          </Col>
          <Col span={8}>
            <Card
              hoverable
              style={{ width: 250 }}
              cover={<Image alt="example" src={shirt} preview={false} />}
            >
              <Meta title="Shirts" />
            </Card>
          </Col>
          <Col span={8}>
            <Card
              hoverable
              style={{ width: 250 }}
              cover={<Image alt="example" src={T_shirt} preview={false} />}
            >
              <Meta title="T-Shirts" />
            </Card>
          </Col>

        </Row>
        </div>}
        
      
      </div>
    )
  }
}

export default Products 