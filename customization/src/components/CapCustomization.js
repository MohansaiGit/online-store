import React, { Component } from 'react';
import { Row, Col,Image, Divider, Collapse} from 'antd';
import Style from './Products.module.css';
import 'antd/dist/antd.css';
import Cap from './images/white-cap.png' 

const {Panel} = Collapse;

 class CapCustomization extends Component {
  render() {
    return (
      <div>
        <div className={Style.container}>
          <Row gutter={24}>
            <Col span={8}>
              <Image
              className={Style.image}
                src={Cap}
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