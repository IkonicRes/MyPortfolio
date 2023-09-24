import React from "react";
import { Outlet } from "react-router";


export default function MainLayout() {
    return (
        <div>
            <header>
                <h1>Michael Ikonomou</h1>
                <nav>
                    <a href="/">Home</a>
                    <a href="/contact">Contact</a>
                    <a href="/aboutMe">About Me</a>
                    <a href="/resume">Resume</a>
                </nav>
            </header>
            <Outlet/>
            <footer>
                Copyright 2023 Michael Ikonomou
            </footer>
        </div>
   )
}
