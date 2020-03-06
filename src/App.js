import React from 'react';
import MainHeader from './view/MainHeader'
import MainFooter from './view/MainFooter'
import RouterIndex from './router/index'
import './view/style.css'
class App  extends React.Component{

    render(){
        return(
            <div className='pageWrap'>
                <MainHeader />
                <main className={'main'}>
                    <RouterIndex />
                </main>
                <MainFooter />

            </div>
    )
    }
}

export default App;
