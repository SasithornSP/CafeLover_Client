import React from 'react';
import { Route, Routes} from 'react-router';


const AppRoutes = () => {
  return (
  <>
  <Routes>
    <Route path="/" element={<h1>Home Cafe Lover</h1>} />
    <Route path="/menu" element={<h1>Menu</h1>} />
  </Routes>
  </>
  );
};

export default AppRoutes;