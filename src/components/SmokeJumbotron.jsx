import React from 'react'

const SmokeJumbotron = () => {
    return (
        <div class=" p-4 mb-3 shadow-5-strong rounded-0" style={{ backgroundColor: "#FBFBFB" }}>
            <div class="row">
                <div class="col-md-3">
                    <img src="https://i.imgur.com/utgEd2x.png" alt="Image" class="img-fluid" />
                </div>
                <div class="col-md-9">
                    <h4>Smoke Grenades</h4>
                    <h5 class="text-muted">Price: $300</h5>
                    <blockquote class="blockquote mb-0">
                        <p>"The smoke grenade creates a medium-area smoke screen. It can effectively hide your team from snipers, or even just create a useful distraction."</p>
                        <footer class="blockquote-footer">Official description in CS:GO</footer>
                    </blockquote>
                </div>
            </div>
        </div>

    )
}

export default SmokeJumbotron