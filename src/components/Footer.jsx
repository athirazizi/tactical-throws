import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer class="bg-light text-center fixed-bottom">
                <div class="text-center p-3 shadow-5-strong" style={{backgroundColor: '#FBFBFB'}}>
                    © 2023 Copyright :
                    <a class="text-dark" style={{fontWeight:"bold"}}>
                        <span style={{color: "#3B71CA"}}> tactical</span><span style={{color: "#54B4D3"}}>throws</span>
                    </a>
                </div>
            </footer>
        </div>
    )
}

export default Footer