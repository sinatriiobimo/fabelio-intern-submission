import React from 'react'
import Header from 'parts/Header'
import Breadcrumb from 'components/Breadcrumb'
import Footer from 'parts/Footer'

export default function ProductDetails() {
    return (
        <>
         <Header theme="black" position="relative"/>
         <Breadcrumb list={[
             {url: '/', name: 'Home'},
             {url: '/categories/2021', name: 'Living Room'},
             {url: '/categories/2021/products/16', name: 'Details'},
         ]}/>
         <Footer/>  
        </>
    )
}
