import React from 'react'
import Carousel from 'react-material-ui-carousel'

function UpperSlider() {
    const slides = [
        {
            name:"Ravishankar kumar",
            image: "https://billetto.co.uk/blog/wp-content/uploads/2019/07/nicholas-green-nPz8akkUmDI-unsplash-e1563462058230.jpg"
        },{
            name: "Rootrsk",
            image: "https://www.todayifoundout.com/wp-content/uploads/2014/11/crowd.jpg"
        },{
            name:"Raviranjan",
            image: "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/325466_1100-1100x628.jpg"
        }
    ]
    return (
        <div>
            <Carousel animation={'slide'}>
                {
                    slides.map((slide,index)=><Slides {...slide} key={index} />)
                }
            </Carousel>
        </div>
    )
}

const Slides = (props) =>{
    return(
        <div>
            <img src={props.image} alt='poster'  height='400px' width='100%' style={{borderRadius:'2px'}}/>
        </div>
    )
}

export default UpperSlider
