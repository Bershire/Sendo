import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Index from './Index';

const Main = (props) => {
    return (
        <div id='root'>
            <main id='lsx'>
                <div id='page' style={{ overflow: 'hidden' }}>
                    <Header />
                    <Index />
                    <Footer />
                </div>
            </main>
        </div>
    );
};

export default Main;