import React from "react";
import { Outlet } from "react-router";
import particlesJS from "particles.js";

export default function MainLayout() {
    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    particlesJS.load('particles-js', '../../assets/particles.json', function() {
        console.log('callback - particles.js config loaded');
    });
    return (
        <div id="particles-js"> {/* Wrap everything in a parent div */}
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