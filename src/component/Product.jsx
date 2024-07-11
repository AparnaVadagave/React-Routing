import React from 'react'

export default function Product() {
  return (
    <div>
       <Navbar/>
     <div class="div">
      <div class="row">
        <div className="col-lg-2">
          <Sidebar/>
        </div>
        {/* <div class="col-lg-2"><div style="line-height: 2;">
          <ul class="text-warning" style="background-color: rgb(233, 236, 239); font-size: 20px;">
          <li class="nav-link text-warning"><a class="text-dark" href="/admin/dashboard">Dashboard</a></li>
          <li class="nav-link link-dark"><a class="text-dark" href="/admin/productlists">Products</a></li>
          <li class="nav-link link-dark"><a class="text-dark" href="/admin/AddProduct">Add Product</a></li>
          <li class="nav-link link-dark"><a class="text-dark" href="/admin/order">Order</a></li>
          <li class="nav-link link-dark"><a class="text-dark" href="/admin/sidebar">Sidebar</a></li>
          <li class="nav-link link-light">
            <button type="button" class="btn btn-primary" fdprocessedid="2ejry" style="background-color: rgb(136, 200, 188); color: black;">Logout</button>
            </li>
            </ul>
          </div>
          </div> */}
          <div class="col-lg-10">
            <div>
            <div>
            {/* <div class="breadcrumbs">
              <div class="container">
      <div class="row">
        <div class="col"><p class="bread"><span><a href="">Admin</a></span> / <span>Product</span></p>
        </div>
        </div>
        </div>
        </div> */}
        <div>
          <div class="container">
            <div class="mt-3">
            <table class="table bg-white">
              <thead class="border rounded-pill" style={{backgroundColor: "rgb(136, 200, 188);"}}>
            <tr class="text-center">
            <th scope="col">#</th>
          <th scope="col">Image</th>
          <th scope="col">Title</th>
          <th scope="col">Category</th>
          <th scope="col">Price</th>
          <th scope="col">MRP</th>
          <th scope="col">Action</th>
        </tr>
        </thead>
        <tbody class="text-center"><tr>
          <th scope="row">1</th><td>
      <img src="" alt="Shoes" width="100" height="100"/></td>
      <td>Marie CLAIRE GUNMETAL CHAPPAL FOR WOMEN</td>
      <td>Women</td>
      <td>499</td>
      <td><del>1699</del></td>
     <td>
      <a href="/admin/AddProduct/3">
      <button class="btn" fdprocessedid="0eyzej" style={{backgroundColor:"rgb(136, 200, 188)",color: "black"}}>Edit</button></a>
     <button class="btn" fdprocessedid="fut6rg" style={{backgroundColor:"rgb(136, 200, 188)", color:"black"}}>Delete</button></td>
     </tr><tr>
      <th scope="row">2</th><td>
      <img src="" alt="Shoes" width="100" height="100"/></td>
      <td>Emergence Men's Running Shoes</td>
      <td>Men</td>
      <td>3299</td>
      <td>
        <del>5499</del>
      </td>
     <td>
        <a href="/admin/AddProduct/5">
      <button class="btn" fdprocessedid="u2prv" style={{backgroundColor: "rgb(136, 200, 188)", color:"black"}}>Edit</button></a>
     <button class="btn" fdprocessedid="bpy108" style={{backgroundColor: "rgb(136, 200, 188)", color: "black"}}>Delete</button></td>
     </tr><tr>
      <th scope="row">3</th><td>
      <img src=""/></td>
      <td>Cool Cat 2.0 Logo Power Unisex Slides</td>
      <td>Men</td>
      <td>2799</td>
      <td><del>3499</del></td>
     <td>
        <a href="/admin/AddProduct/6">
      <button class="btn" fdprocessedid="pz134s" style={{backgroundColor: "rgb(136, 200, 188)", color: "black"}}>Edit</button></a>
     <button class="btn" fdprocessedid="v71waq" style={{backgroundColor: "rgb(136, 200, 188)", color: "black"}}>Delete</button></td>
     </tr><tr>
      <th scope="row">4</th><td>
    
      <img src="" alt="Shoes" width="100" height="100"/></td>
        <td>BATA GREY CHAPPAL FOR WOMEN</td>
        <td>Women</td>
        <td>1499</td>
        <td><del>1999</del></td>
      <td>
        <a href="/admin/AddProduct/7">
        <button class="btn" fdprocessedid="tym5js" style={{backgroundColor: "rgb(136, 200, 188) ",color: "black"}}>Edit</button></a>
      <button class="btn" fdprocessedid="rg0el" style={{backgroundColor: "rgb(136, 200, 188) ",color: "black"}}>Delete</button></td>
      </tr><tr>
        <th scope="row">5</th><td>
        <img src="" alt="Shoes" width="100" height="100"/>
</td>
        <td>Arbaz Shoes</td>
        <td>Male</td>
        <td>3999</td>
        <td><del>9999</del></td>
      <td>
        <a href="/admin/AddProduct/8">
        <button class="btn" fdprocessedid="to7map" style={{backgroundColor: "rgb(136, 200, 188)", color: "black"}}>Edit</button></a>
      <button class="btn" fdprocessedid="0yj67v" style={{backgroundColor: "rgb(136, 200, 188)", color: "black"}}>Delete</button></td>
      </tr><tr>
        <th scope="row">6</th><td>
        <img src="" alt="Shoes" width="100" height="100"/>
</td>
        <td>Adidas Sport Shoes (For GYM)</td>
        <td>Male</td>
        <td>999</td>
        <td><del>15000</del></td>
      <td>
        <a href="/admin/AddProduct/11">
        <button class="btn" fdprocessedid="18lsq9" style={{backgroundColor: "rgb(136, 200, 188)", color: "black"}}>Edit</button></a>
      <button class="btn" fdprocessedid="vnomlc" style={{backgroundColor: "rgb(136, 200, 188)", color: "black"}}>Delete</button>
     </td>
     </tr>
     </tbody>
     </table>
     </div>
     </div>
     </div>
     </div>
     </div>
     </div>
     </div>
     </div>

    </div>
  )
}
