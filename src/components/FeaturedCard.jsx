import React from 'react'
import Featured from '../data/featured.json'
import '../components/FeaturedCard.css'

const FeaturedCard = () => {
  console.log(Featured.video)
  return (
    <div class="container col-md-4" style={{marginBottom:'5rem'}}>
      <div class="col">
        <div class="card rounded-0">
          <div class="card-body">
            <h5 class="card-title">{Featured.lineup}</h5>
            <h6 class="card-subtitle text-muted">{Featured.grenadeType} from {Featured.sourceLocation} to {Featured.targetLocation}</h6>
            <hr></hr>

            <div class="video_wrapper">
              <iframe src={Featured.video} title="de_mirage 64 tick smokes" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>

            <p class="card-text mt-3">{Featured.description}</p>

          </div>
          <div class="card-footer text-muted">
            Submitted on {Featured.date}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedCard