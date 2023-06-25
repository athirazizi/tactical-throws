import React from 'react'

const FlashJumbotron = () => {
    return (
        <div class=" p-4 mb-3 shadow-5-strong rounded-0 h-100" style={{ backgroundColor: "#FBFBFB" }}>
            <div class="row">
                <div class="col-md-3">
                    <img src="https://i.imgur.com/JRferOM.png" alt="Image" class="img-fluid" />
                </div>
                <div class="col-md-9">
                    <h4>Flashbang</h4>
                    <h5 class="text-muted">Price: $200</h5>
                    <blockquote class="blockquote mb-0">
                        <p>"The non-lethal flashbang grenade temporarily blinds anybody within its concussive blast, making it perfect for flushing out closed-in areas. Its loud explosion also temporarily masks the sound of footsteps."</p>
                        <footer class="blockquote-footer">Official description in CS:GO</footer>
                    </blockquote>
                </div>

            </div>
        </div>
    )
}

export default FlashJumbotron