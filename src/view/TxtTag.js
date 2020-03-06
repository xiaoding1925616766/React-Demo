import React, {Component} from 'react';
import {Tag} from 'antd'
const tab={
    top:{
        color:'red',
        txt:'置顶'
    },
    good:{
        color:'lime',
        txt:'精华'
    },
    ask:{
        color:'green',
        txt:'问答'
    },
    job:{
        color:'magenta',
        txt:'招聘'
    },
    dev:{
        color:'purple',
        txt:'测试'
    },
    share:{
        color:'orange',
        txt:'分享'
    },
}

function getTab(data){
    return(
        data.top?'top':
            data.good?'good':
                data.tab
    )
}
class TxtTag extends Component {
    render() {
        let nowTab=tab[getTab(this.props.data)];
        return (
            <div>
                <Tag color={nowTab.color}>
                    {nowTab.txt}
                </Tag>
            </div>
        );
    }
}

export default TxtTag;