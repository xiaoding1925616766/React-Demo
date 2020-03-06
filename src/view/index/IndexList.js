import React, {Component} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import  {List,Avatar} from 'antd'
import TxtTag from "../TxtTag";
import {connect} from 'react-redux'
class IndexList extends Component {
    constructor(arg) {
        super(arg);
        this.state={
            page:1
        }
        this.getData(this.props.tab,this.state.page)
    }
    // componentWillReceiveProps(nextProps) {
    //     if (this.props.tab !==nextProps.tab){
    //         this.state.page=1
    //         this.getData(nextProps.tab,1)
    //     }
    // }
    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.tab !==nextState.page){
            this.getData(nextProps.tab,nextState.page)
        }
        if (this.props.tab !==nextProps.tab){
            this.state.page=1
            this.getData(nextProps.tab,1)
        }
        return true
    }

    getData(tab,page) {
        this.props.dispatch((dispatch) => {
            axios.get(`https://cnodejs.org/api/v1/topics?tab=${tab}&page=${page}&limit=20`)
                .then((res) => {
                    console.log(res)
                    dispatch({
                        type: 'LIST_UPDATA_SUCC',
                        data: res.data
                    })
                })
                .catch((err) => {
                    console.log(err)
                })
        })
    }
        render() {
            let {loading,data}=this.props
            let pagination={
                connect:this.state.page,
                pageSize:20,
                total:500,
                onChange:((current)=>{
                    this.setState({
                        page:current
                    })
                })
        }
            return (
                <div>
                    <List
                        loading={loading}
                        dataSource={data}
                        pagination={pagination}
                        renderItem={
                            item => (
                                <List.Item
                                    actions={
                                        [
                                            "回复"+item.reply_count,
                                            '访问'+item.visit_count
                                        ]
                                    }
                                >
                                    <List.Item.Meta
                                        className={'pic'}
                                        avatar={
                                            <Avatar src={item.author.avatar_url} />
                                        }
                                        title={

                                            <div>
                                                <TxtTag
                                                    data={item}
                                                > </TxtTag>
                                                <Link to={'/details/'+item.id}>{item.title}</Link>
                                            </div>
                                        }
                                        description={
                                            <p>
                                                <Link to={'/user'+item.author.loginname}>{item.author.loginname}</Link>
                                                发表于:{item.create_at.split("T")[0]}
                                            </p>
                                        }
                                    >

                                    </List.Item.Meta>

                                </List.Item>
                            )
                        }
                    >

                    </List>
                </div>
            );
        }
    }

    export default connect(state=>state.list)(IndexList);