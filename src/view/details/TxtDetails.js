import React, {Component} from 'react';
import data from "./data";
import TxtTag from "../TxtTag";
import {Card,Avatar} from 'antd'
import {Link} from 'react-router-dom'
class TxtDetails extends Component {
    render() {
        return (
            <div>
                <Card>
                    <Card.Meta
                        title={
                            <div>
                                <h2> { data.data.title } </h2>
                                <TxtTag
                                    data={ data.data }
                                > </TxtTag>
                                <Avatar src={data.data.author.avatar_url}> </Avatar>
                                <Link to={'/user/'+data.data.author.loginname}> {data.data.author.loginname} </Link>
                                发表于:{data.data.create_at.split("T")[0]}
                            </div>
                        }
                    >
                    </Card.Meta>
                    <div
                        dangerouslySetInnerHTML={{
                            __html:data.data.content
                        }}
                    >

                    </div>
                </Card>
            </div>
        );
    }
}

export default TxtDetails;