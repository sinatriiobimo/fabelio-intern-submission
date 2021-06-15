import React from 'react'
import Header from 'parts/Header'
import Hero from 'parts/Hero'
import Product from 'parts/Product'
import Footer from 'parts/Footer'
import useScrollAnchor from 'helpers/useScrollAnchor'
import useModalDOM from 'helpers/useModalDOM'

export default function Homepage() {
    useScrollAnchor();
    useModalDOM();

    return (
        <>
            <Header theme="white" position="absolute"/>
            <Hero/>
            <Product/>
            <Footer/>
        </>
    )
}
