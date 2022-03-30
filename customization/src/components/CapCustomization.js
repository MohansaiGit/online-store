import React, { Component } from 'react';
import { Row, Col,Image, Divider, Collapse} from 'antd';
import Style from './Products.module.css';
import 'antd/dist/antd.css';

const {Panel} = Collapse;

 class CapCustomization extends Component {
  render() {
    return (
      <div>
        <div className={Style.container}>
          <Row gutter={24}>
            <Col span={8}>
              <Image
                src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
              ></Image>
              <Divider type='vertical'/>
            </Col>

            <Col span={14}>
              <Collapse>
              <Panel header = "Select the color"></Panel>
              </Collapse><br></br>

              <Collapse>
              <Panel header = "Select the logo"></Panel>
              </Collapse>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default CapCustomization