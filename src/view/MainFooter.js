import React, {Component} from 'react';
import {Layout} from 'antd'
import './style.css'
class MainFooter extends Component {
    render() {
        return (
            <div>
                <Layout.Footer style={{textAlign:'center'}}>
                    <a href="http://beian.miit.gov.cn">备案号：豫ICP备19039689号-1</a>
                </Layout.Footer>
            </div>
        );
    }
}

export default MainFooter;