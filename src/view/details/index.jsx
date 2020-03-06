import React, {Component} from 'react';
import TxtDetails from "./TxtDetails";
import data from "./data";
import ReplyList from './ReplyList'
class Details extends Component {
    render() {
        return (
            <div className={'wrap'}>
                <TxtDetails></TxtDetails>
                <ReplyList
                    replies={data.data.replies}
                    replyCount={data.data.reply_count}
                >

                </ReplyList>
            </div>
        );
    }
}

export default Details;