import React, { Component } from 'react';
import { Row, Col, Image, Divider, Collapse, Button, Card } from 'antd';
import Style from './Products.module.css';
import Tshirts from './TshirtImages';
import './styling.css'
import 'antd/dist/antd.css';
import BCCI_LOGO from './images/BCCI_logo.png';
import Apple_Logo from './images/Apple_logo.png';
import Olympic_logo from './images/olympic_logo.webp';

const { Panel } = Collapse;

class TshirtCustomization extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         selectedTshirt : [Tshirts[0]]
      }
    }
    render() {
        return (
            <div className={Style.maincontainer}>
                <div className={Style.container}>
                    <Row gutter={16}>
                        <Col span={8}>
                            <Card className={Style.CardInTshirtCustomization}
                                cover={<Image
                                    className={Style.images}
                                    src={this.state.selectedTshirt}
                                    preview={false}
                                />}>
                            </Card>
                        </Col>

                        <Col span={14}>
                        <Collapse className={Style.Collapse1} expandIconPosition='right'>
                                <Panel header="Select the color">
                                    <div className={Style.image}>
                                    {Tshirts.map((img, index) =>
                                        <Image
                                            key={index}
                                            src={img}
                                            preview={false}
                                            alt='image'
                                            onClick={() => this.setState({
                                                selectedTshirt: img
                                            })}
                                        />
                                    )}
                                    </div>
                                </Panel>
                            </Collapse><br></br>

                            <Collapse className={Style.Collapse2} expandIconPosition='right'>
                                <Panel header="Select the color">
                                    <Button className={Style.redbutton} >R</Button>
                                    <Button className={Style.greenbutton}>G</Button>
                                    <Button className={Style.pinkbutton}>P</Button>
                                </Panel>
                            </Collapse><br></br>

                            <Collapse className={Style.Collapse2} expandIconPosition='right'>
                                <Panel header="Select the logo">
                                    <Row>
                                        <Col>
                                        </Col>
                                        <Image
                                            className={Style.logo}
                                            src={BCCI_LOGO}
                                            preview={false}
                                        ></Image>
                                        <Col>
                                            <Image
                                                className={Style.logo}
                                                src={Apple_Logo}
                                                preview={false}
                                            ></Image>
                                        </Col>

                                        <Col>
                                            <Image
                                                className={Style.logo}
                                                src={Olympic_logo}
                                                preview={false}
                                                onClick={() => { console.log('clicked') }}
                                            ></Image>
                                        </Col>
                                    </Row>

                                </Panel>
                            </Collapse>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default TshirtCustomization