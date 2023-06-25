import React, { useState } from 'react'

const SubmitForm = () => {
    //object to handle form data
    const [lineup, setLineup] = useState({
        name: '',
        map: '',
        nade: '',
        target: '',
        source: '',
        desc: '',
        yt: ''
    });

    // listens to input changes
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setLineup({
            ...lineup,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Display all the input values in an alert
        alert(JSON.stringify(lineup));
    };

    return (
        <div class="p-4 shadow-5-strong" style={{ backgroundColor: "#FBFBFB", marginBottom: '5rem', width: '26rem' }}>
            <form onSubmit={handleSubmit}>
                <h2>Submit lineup form</h2>
                <div class="mt-4 mb-4">
                    <input name="name" class="form-control w-100" type="text" id="inputLineup" placeholder="Enter lineup name" onChange={handleInputChange} />
                </div>

                <select class="form-control mb-4" id="inputMap" name="map" value={lineup.map} onChange={handleInputChange}>
                    <option select>Select map</option>
                    <option value="Mirage">Mirage</option>
                    <option value="Dust II">Dust II</option>
                    <option value="Inferno">Inferno</option>
                </select>

                <select class="form-control mb-4" id="inputGrenade" name="nade" value={lineup.nade} onChange={handleInputChange}>
                    <option select>Select grenade type</option>
                    <option value="Smoke Grenade">Smoke Grenade</option>
                    <option value="Flasbang">Flashbang</option>
                    <option value="Molotov">Molotov</option>
                </select>

                <div class="row">
                    <div class="mb-4 col">
                        <input name="target" class="form-control w-100" type="text" id="inputTarget" placeholder="Enter target location" value={lineup.target} onChange={handleInputChange} />
                    </div>

                    <div class="mb-4 col">
                        <input name="source" class="form-control w-100" type="text" id="inputSource" placeholder="Enter source location" value={lineup.source} onChange={handleInputChange} />
                    </div>
                </div>

                <div class="mb-4">
                    <textarea name="desc" class="form-control w-100" type="text" id="inputDesc" placeholder='Description' value={lineup.desc} onChange={handleInputChange} />
                </div>

                <div class="mb-4">
                    <input name="yt" class="form-control w-100" type="text" id="inputYT" placeholder="Enter YouTube link" value={lineup.yt} onChange={handleInputChange} />
                </div>

                <button type="button" class="btn btn-primary" data-mdb-toggle="modal" data-mdb-target="#exampleModal">
                    Submit
                </button>

                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Lineup details</h5>
                                <button type="button" class="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <span style={{ fontWeight: 'bold' }}>Lineup name:</span> {lineup.name} <br />
                                <span style={{ fontWeight: 'bold' }}>Map:</span> {lineup.map} <br />
                                <span style={{ fontWeight: 'bold' }}>Grenade type:</span> {lineup.nade} <br />
                                <span style={{ fontWeight: 'bold' }}>Target location:</span> {lineup.target} <br />
                                <span style={{ fontWeight: 'bold' }}>Source location:</span> {lineup.source} <br />
                                <span style={{ fontWeight: 'bold' }}>Description:</span> {lineup.desc} <br />
                                <span style={{ fontWeight: 'bold' }}>YouTube Link</span> {lineup.yt}
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-mdb-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary" data-mdb-dismiss="modal">Submit lineup</button>
                            </div>
                        </div>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default SubmitForm