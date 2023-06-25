import React from 'react'

const MolotovJumbotron = () => {
    return (
        <div class=" p-4 shadow-5-strong rounded-0 h-100" style={{ backgroundColor: "#FBFBFB", marginBottom:'5rem' }}>
            <div class="row">
                <div class="col-md-3">
                    <img src="https://i.imgur.com/ea0GI22.png" alt="Image" class="img-fluid" />
                </div>
                <div class="col-md-9">
                    <h4>Molotov</h4>
                    <h5 class="text-muted">Price: $400</h5>
                    <blockquote class="blockquote mb-0">
                        <p>"The Molotov is a powerful and unpredictable area denial weapon that bursts into flames when thrown on the ground, injuring any player in its radius."</p>
                        <footer class="blockquote-footer">Official description in CS:GO</footer>
                    </blockquote>
                </div>

            </div>
        </div>
    )
}

export default MolotovJumbotron