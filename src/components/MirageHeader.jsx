import React from 'react'

const MirageHeader = () => {
    return (
        <div class="p-5 text-center bg-image rounded-0 shadow-5-strong" style={{
            backgroundImage: 'url("https://i.imgur.com/EBAD7Y8.png")',
            height: '10rem',
            marginTop: '5rem',
            marginBottom: '1rem'
        }}>
            <div class="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}>
                <div class="d-flex justify-content-center align-items-center h-100">
                    <div class="text-white">
                        <h1 class="display-4">Mirage</h1>
                        <h4 class="lead">Updated for version December 9, 2020</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MirageHeader