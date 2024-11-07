import {  Route, Routes} from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header.jsx'
import PrivateRoutes from './utils/PrivateRoutes.jsx'
import { AuthProvider } from './utils/AuthContext.jsx'
import Home from './Pages/Home.jsx'
import LoginPage from './Pages/LoginPage.jsx'
import SignupPage from './Pages/SignupPage.jsx'
import ProductPage from './Pages/ProductsPage.jsx'
import CartPage from './Pages/CartPage.jsx'
import CheckoutPage from './Pages/CheckoutPage.jsx' 
import WishlistPage from './Pages/WishlistPage.jsx' 
import ProfilePage from './Pages/ProfilePage.jsx' 
import Layout from './Layout.jsx'
import Footer from './Components/Footer.jsx'
import ProductDetails from './Pages/ProductDetails.jsx'   
import { Provider } from 'react-redux'
import store from './Store/Store.js'


function App() {

  return (
    <Provider store={store}>
    <Router>
        <AuthProvider>
        <Header/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Login" element={<LoginPage/>}/>
            <Route path="/Signup" element={<SignupPage/>}/>
            <Route path="/products" element={<ProductPage/>}/>
            <Route path='/ProductDetails' element={<ProductDetails/>}/>

            <Route element={<PrivateRoutes />}>
              <Route path="/cart" element={<CartPage/>}/>
              {/* <Route path="/checkout" element={<CheckoutPage/>}/> */}
              <Route path="/wishlist" element={<WishlistPage/>}/>
            </Route>
          </Routes>
          <Footer/>
        </AuthProvider>
    </Router>
    </Provider>
  )
}

export default App
