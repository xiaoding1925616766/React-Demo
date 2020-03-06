import React, {Component} from 'react';
import {List,Avatar} from 'antd'
import {Link} from 'react-router-dom'
class ReplyList extends Component {
    render() {
        let {replies,replyCount}=this.props;
        return (
            <div>
                <List
                    id={'list'}
                    dataSource={replies}
                    renderItem={
                        item => (<List.Item
                            className={'listitem'}
                            extra={item.ups.length>0?<span className={'answer'}>有{item.ups.length}个人赞了这个回复</span>:''}
                        >
                            <List.Item.Meta
                                avatar={
                                    <Avatar src={item.author.avatar_url} />
                                }
                                description={
                                    <span>
                                        <Link to={'/user'+item.author.loginname}>{item.author.loginname}</Link>
                                        发表于:{item.create_at.split("T")[0]}
                                    </span>
                                }
                            >
                            </List.Item.Meta>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html:item.content
                                }}
                            >
                            </div>
                        </List.Item>)
                    }
                >
                </List>
            </div>
        );
    }
}

export default ReplyList;