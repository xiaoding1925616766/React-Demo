import React, {Component} from 'react';
import {Row,Col} from 'antd'
import IndexMeun from "./indexMeun";
import IndexList from './IndexList'
class Index extends Component {
    render() {
        let tab=this.props.match.params.id;
        return (
            <Row className={'wrap'}>
                <Col md={6}>
                    <IndexMeun id={'MeumIndex'}/>
                </Col>
                <Col md={18} className={'IndexList'}>
                    <IndexList
                        tab={tab}
                    > </IndexList>
                </Col>
            </Row>
        );
    }
}

export default Index;