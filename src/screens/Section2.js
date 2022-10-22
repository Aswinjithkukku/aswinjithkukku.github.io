import React from "react";
import Brandshop from "../images/Brandshop.png";
import shopify from "../images/shopify.png";
import questionBank from "../images/question-bank.png";

function section2() {
  return (
    <div className="bg-black relative">
      <div className=" absoluteSection2div absolute md:ml-10">
        <h1 className=" absoluteSection2heading font-extrabold text-5xl md:text-9xl">
          Some cool stuffs I have made
        </h1>
      </div>
      <div className="relative max-w-screen-xl md:mx-auto mx-3">
        <div className="md:pt-36 pt-20 pb-10">
          <h2 className="section2heading md:text-6xl text-3xl tracking-widest">
            Some cool stuffs I have made
          </h2>
        </div>
        <div className="relative block py-4">
          <div className="md:flex">
            <div className="box md:w-2/6  my-14 md:mr-10">
              <a href=" http://brandshopy.herokuapp.com">
              <img
                className="opacity-50 scale-90 hover:scale-105 hover:opacity-100 duration-700"
                src={shopify}
                alt="brandshopify"
              /></a>
            </div>
            <div className="md:flex items-center md:w-1/2 md:ml-10 my-14">
              <p className="text-slate-400 ">
              <h3 className="text-xl text-yellow-600">Brand Shop</h3>
                <ul>
                  <li>Implemented all the necessary e-commerce functionalities like product listing, cart, orders, etc</li>
                  <li>Complete React and tailwind css framework is used. </li>
                  <li>Redux State management and Cloudinary Cloud Service is Used</li>
                  <li>Full-featured shopping cart with Stripe payment method</li>
                  <li>Payment gateways integrated: Stripe</li>
                </ul>
                
              </p>
            </div>
          </div>
          <div className="md:flex md:flex-row-reverse">
            <div className="box md:w-2/6  my-14 md:ml-10">
              <a href=" https://aswinjithkukku.github.io/questinBank-managementSystem">
              <img
                className="opacity-50 scale-90 hover:scale-105 hover:opacity-100 duration-700"
                src={questionBank}
                alt="question-bank"
              /></a>
            </div>
            <div className="md:flex items-center md:w-1/2 md:mr-10 my-14">
              <p className="text-slate-400">
              <h3 className="text-xl text-yellow-600">Question Bank</h3>
              <ul>
                  <li>Build frontend side of web page for Question Bank Management System</li>
                  <li>Html,Css,Tailwind css is used. </li>
                </ul>
              </p>
            </div>
          </div>
          <div className="md:flex">
            <div className="box md:w-2/6  my-14 md:mr-10">
              <a href="https://github.com/Aswinjithkukku/Brandshop-ecommerce-Website"></a>
              <img
                className="opacity-50 scale-90 hover:scale-105 hover:opacity-100 duration-700"
                src={Brandshop}
                alt="brandshop"
              />
            </div>
            <div className="md:flex items-center md:w-1/2 md:ml-10 my-14">
              <p className="text-slate-400 ">
              <h3 className="text-xl text-yellow-600">Brand Store</h3>
              <ul>
                  <li>Implemented all the necessary e-commerce functionalities like product listing, cart, orders, etc</li>
                  <li>Complete React and Bootstrap framework is Used </li>
                  <li>Redux state management and Amazon S3 bucket is used.</li>
                  <li>Full-featured shopping cart with PayPal & credit/debit payments</li>
                  <li>Payment gateways integrated: PayPal</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default section2;
