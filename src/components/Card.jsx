import React from 'react'
import mirageLineups from '../data/mirageLineups.json'
import dust2Lineups from '../data/dust2Lineups.json'
import infernoLineups from '../data/infernoLineups.json'

const Card = ({ data }) => {

    function getJsonData(data) {
        // this fetches data from the json files using DOM manipulation
        switch (data) {
            case 'mirage':
                return mirageLineups;
            case 'dust2':
                return dust2Lineups;
            case 'inferno':
                return infernoLineups;
            default:
                return null;
        }
    }
    const jsonData = getJsonData(data);
    console.log(jsonData);
    return (
        <div class="container" style={{ marginBottom: '5rem' }}>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                {
                    jsonData.map((item) => (
                        <>
                            <div class="col">
                                <div class="card h-100 shadow-5-strong rounded-0" style={{ backgroundColor: "#FBFBFB" }}>
                                    <div class="card-body">
                                        <h5 class="card-title">{item.lineup}</h5>
                                        <h6 class="card-subtitle text-muted">{item.grenadeType} from {item.sourceLocation} to {item.targetLocation}</h6>
                                        <hr></hr>

                                        <div class="video_wrapper">
                                            <iframe src={item.video} title="de_mirage 64 tick smokes" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                        </div>

                                        <p class="card-text mt-3">{item.description}</p>
                                    </div>
                                    <div class="card-footer text-muted">
                                        Submitted on {item.date}
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}
            </div>
        </div>
    )
}

export default Card