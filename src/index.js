import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { ProductsProvider } from './context/products_context';
import { FilterProvider } from './context/filter_context';
import { CartProvider } from './context/cart_context';
import { UserProvider } from './context/user_context';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));

// dev-1fsp36p77m25vn14.us.auth0.com
// T4ZK4xmaQFaQcOyjeqfohoyPLrPAPJRp

root.render(
    <Auth0Provider
        domain="dev-1fsp36p77m25vn14.us.auth0.com"
        clientId="T4ZK4xmaQFaQcOyjeqfohoyPLrPAPJRp"
        authorizationParams={{
            redirect_uri: window.location.origin
        }}
    >
        <ProductsProvider>
            <FilterProvider>
                <CartProvider>
                    <App />
                </CartProvider>
            </FilterProvider>
        </ProductsProvider>
    </Auth0Provider>
);
