import React from 'react';
import AuthContextProvider from './contexts/AuthContext';
import Home from './components/Home'

function App() {
    return (
        <AuthContextProvider>
            <Home />
        </AuthContextProvider>
    );
}

export default App;
