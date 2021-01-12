import React from 'react'
import { CreatePost, Navbar } from '../../containers'
import Feed from '../../containers/feed'
import "./style.css"

export default function Home() {
    return (
        <div className="home">
        <Navbar/>
        <CreatePost/>
        <Feed/>
        </div>
    )
}
