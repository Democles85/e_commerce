import React from 'react';
import { commerce } from './lib/commerce';
import { Products, Navbar } from './components'

const App = () => {
    return (
        <div>
            <Navbar />
            <Products />
        </div>
    )
}

export default App;
