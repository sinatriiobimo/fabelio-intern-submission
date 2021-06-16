import React, {useEffect} from 'react'
import Header from 'parts/Header'
import Breadcrumb from 'components/Breadcrumb'
import ProductDetail from 'parts/ProductDetail'
import Footer from 'parts/Footer'
import { useParams } from 'react-router-dom'
import useAsync from 'helpers/useAsync'
import fetch from 'helpers/fetch'

export default function Homepage() {
    const {id} = useParams();
    const {data, run, isLoading} = useAsync();

    useEffect(() => {
        run(fetch({url: `/api/products/${id}`}))
    }, [run, id])

    return (
        <>
         <Header theme="black" position="relative"/>
         <Breadcrumb 
             list={[
                 {url: "/", name: "Home"},
                 {url: "/categories/1", name: "Sofa"},
                 {url: "/categories/1/products/1", name: "Details"},
             ]}
         />

        {isLoading ? "Loading" : <ProductDetail data={data}/>}
         
         <Footer/>
        </>
    )
}
