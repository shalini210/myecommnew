import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Contact from './Contact';
import About from './About';
import Menu from './Menu';
import Kids from './kids/Kids';
import Kidsclothes from './kids/Kidsclothes';
import AllPosts from './posts/AllPosts';
import { Document, Page } from 'react-pdf';
import { useState } from 'react';
import Toys from './kids/Toys';
import Babygear from './kids/Babygear';
import Allcategories from './Allcategories';
import ToysDescription from './kids/ToysDescription';
import Category from './Category';
function App() {

  return (
  <>
  <h1>This is app com</h1>
  <Menu></Menu>
  <Routes>
    <Route path='/' element={<Allcategories></Allcategories>}></Route>
    <Route path='/contact' element={<Contact></Contact>}></Route>
    <Route path='/about' element={<About></About>}></Route>
    <Route path="/kids"  element={<Kids></Kids>}></Route>

    <Route path="/kidsclothes"element={<Kidsclothes></Kidsclothes>}></Route>
    <Route path='/posts' element={<AllPosts></AllPosts>}></Route>
    <Route path='/KidsToys' element={<Toys></Toys>}></Route>
    <Route path='/BabyGear' element={<Babygear></Babygear>}></Route>
    <Route path='/KidsToys/ProductDetails/:pid' element={<ToysDescription></ToysDescription>}></Route>
    <Route path="/category/:cname" element={<Category></Category>}></Route>
  </Routes>

  <h1>this is footer </h1>
  </>
  );
}

export default App;
