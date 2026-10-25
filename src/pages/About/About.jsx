import parallaxImage from "../../assets/products/other/parallax-image.jpg";
import aboutLastImage from "../../assets/products/other/about-last-image.jpg"
import './About.css'

const About = () => {
    return(
        <>
        <div className="about-container">
            <div className='about-text'>
                <h1>About</h1>
                <div className='about-dash'></div>
                <h3>TamLuxe is where swag meets casual: everyday t-shirts for men and women,
                 made to look good and feel even better.
                </h3>
                <p>We design for real life. Soft fabrics, clean cuts, and graphics with personality,
                 so you can put one on and head out the door without a second thought.
                 Every shirt we stock has to pass one test: would you want to wear it again tomorrow?
                </p>
            </div>
            <div className='parallax-rectangle'
            style={{ backgroundImage: `url(${parallaxImage})` }}
            >
                <div className='parallax-text'>
                    <h3>The Mission</h3>
                    <h1>At the heart of everything, we set out to offer the best quality.</h1>
                    <div className='parallax-dash'></div>
                </div>
                <div className='parallax-side-text'>
                    Quality is where we start, not something we add at the end.
                    We choose breathable, durable fabrics and keep our designs simple enough
                    to last longer than a single season. Good style should not cost you comfort,
                    and it should not fall apart after a few washes.
                    Whether you are shopping for yourself or for someone you care about,
                    we want every TamLuxe piece to feel like it was made for you.
                </div>
            </div>

            <div className="how-it-started-container">
                <div className="how-it-started-text">
                    <h1>How it Started</h1>
                    <div className="how-it-started-dash"></div>
                    <p>TamLuxe began with a simple frustration: finding a t-shirt that looks sharp,
                        fits well, and is incredibly durable.
                        So we set out to make it easier.
                    </p>
                </div>


                <div className="last-container">
                 <div className="left-side-image-div">
                    <h1>Made for everyday wear</h1>
                    <h3>Great style starts with the basics, so we put our energy into getting them right.
                    </h3>
                    
                    <p>From the first sketch to the final fold, we focus on fit, fabric, and finish.
                        Our range for men and women keeps growing, but the idea stays the same:
                        relaxed, well-made t-shirts you will reach for again and again.
                        Thank you for being part of the story as we keep building.
                    </p>
                  </div>

                  <div className="right-image"
                   style={{ backgroundImage: `url(${aboutLastImage})` }}
                  ></div>
                </div>
               
            </div>

         </div>
        </>
    )
}

export default About