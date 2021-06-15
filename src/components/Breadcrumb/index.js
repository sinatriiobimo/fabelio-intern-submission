import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Breadcrumb({ list }) {
    return (
        <section className="bg-gray-100 py-8 px-4">
        <div className="container mx-auto">
            <ul className="breadcrumb">
            {
                list?.map?.((product, index) => {
                    const arias = index === list?.length ? {"aria-label": "current-page"} : {}
                    return (
                        <li key={product.url}>
                            <Link to={product.url} {...arias}>{product.name}</Link>
                        </li>
                    )
                })
            }
            </ul>
        </div>
        </section>
    )
}

Breadcrumb.propTypes = {
    list: PropTypes.array.isRequired,
}