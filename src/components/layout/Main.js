import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Main = (props) => {
    return (
        <div id='root'>
            <main id='lsx'>
                <div id='page' style={{ overflow: 'hidden' }}>
                    <Header />
                    <Footer />
                </div>
            </main>
        </div>
    );
};

export default Main;