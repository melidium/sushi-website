import React from 'react'

export default function Loader() {
    window.onload = (() => {
        document.getElementById("loading-screen").style.display ="none"
    })
    return (
        <div id="loading-screen">
            <span id="loading-icon" class="material-icons">cached</span>
        </div>
    )
}
