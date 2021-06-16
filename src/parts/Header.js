import React from 'react'
import { Link } from 'react-router-dom'


export default function Header({theme, position}) {
    return (
        <header className={[position, "absolute w-full z-50 px-4"].join(" ")}>
        <div className="container mx-auto py-5">
            <div className="flex flex-stretch items-center">
            <div className="w-36 items-center flex">
                <Link to="/">
                    <img src="/images/content/logo.png"/>
                </Link>
            </div>
            </div>
        </div>
    </header>
    )
}
