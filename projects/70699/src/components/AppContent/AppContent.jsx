import React, { useContext } from 'react';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import NavBar from '../NavBar/NavBar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import CheckOut from '../CheckOut/CheckOut';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import CartScreen from '../CartScreen/CartScreen';

import { DarkModeContext } from '../context/DarkModeProvider';
import './AppContent.css'



function AppContent() {

    const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext)
    const style = {
        background: isDarkMode ? '#333' : '#fff',
        color: isDarkMode ? '#fff' : '#333'
    }

    return (
                <div style={style}>
                   
                    <Router>
                        <NavBar toggleDarkMode={toggleDarkMode}/>
                        <Routes>
                            <Route exact path='/' element={<ItemListContainer />} />
                            <Route exact path='/productos/:categoryId' element={<ItemListContainer />} />
                            <Route exact path='/detail/:itemId' element={<ItemDetailContainer />} />
                            <Route exact path='/check' element={<CheckOut />} />
                            <Route exact path='/cart' element={<CartScreen />} />
                        </Routes>
                        
                    </Router>
                </div>

    )
}

export default AppContent
