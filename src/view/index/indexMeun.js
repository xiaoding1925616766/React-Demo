import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {Menu} from 'antd'
class IndexMeun extends Component {
    render() {
        return (
            <div>
                <Menu
                    id={this.props.id}
                >
                    <Menu.Item> <Link to={'/index/all'}></Link>全部</Menu.Item>
                    <Menu.Item> <Link to={'/index/good'}></Link>精华</Menu.Item>
                    <Menu.Item> <Link to={'/index/ask'}></Link>问答</Menu.Item>
                    <Menu.Item> <Link to={'/index/share'}></Link>分享</Menu.Item>
                    <Menu.Item> <Link to={'/index/job'}></Link>招聘</Menu.Item>
                    <Menu.Item> <Link to={'/index/dev'}></Link>测试</Menu.Item>
                </Menu>
            </div>
        );
    }
}

export default IndexMeun;