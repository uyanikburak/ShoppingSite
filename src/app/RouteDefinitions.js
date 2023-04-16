import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RouteOutlet from './RouteOutlet'
import CategoriesComponent from '../inventory/CategoriesComponent'
import ProductComponent from '../inventory/ProductComponent'
import ProductsComponent from '../inventory/ProductsComponent'
import CartSummary from '../shopping/CartSummary'
import CartDetail from '../shopping/CartDetail'
import CartCheckout from '../shopping/CartCheckout'
import HomePage from './HomePage'

export default function RouteDefinitions() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<RouteOutlet />}>
                    <Route path="home" element={<HomePage/>} />
                    <Route path="categories" element={<CategoriesComponent/>} />
                    <Route path="product/:productId" element={<ProductComponent />} />
                    <Route path="products/:categoryId" element={<ProductsComponent />} />
                    <Route path="cartSummary/:cartId" element={<CartSummary/>} />
                    <Route path="cartDetail/:cartId" element={<CartDetail/>} />
                    <Route path="cartCheckout/:cartId" element={<CartCheckout/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}