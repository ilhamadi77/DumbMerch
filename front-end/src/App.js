import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Complain, DetailProduct, Profile, Shop } from './pages';
import { ComplainAdmin, EditCategory, EditProduct, ListProduct, ProductCategory } from './pages/admin';
import Private from './pages/admin/Private';
import LandingPage from './pages/landingPage/LandingPage';




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/auth' element={<LandingPage />} />
        <Route path='/' element={<Shop />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/detail' element={<DetailProduct />} />
        <Route path='/complain' element={<Complain />} />

        {/* //! Route Admin  */}
        <Route path='/admin' element={<Private />}>
          <Route path='/admin/complain' element={<ComplainAdmin />} />
          <Route path='/admin/category' element={<ProductCategory />} />
          <Route path='/admin/product' element={<ListProduct />} />
          <Route path='/admin/edit-category' element={<EditCategory />} />
          <Route path='/admin/edit-product' element={<EditProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
