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
                <h3>Proin eu ante vel mauris molestie dignissim non eget nunc. Integer ac
                 massa orci. Suspendisse vulputate semper nunc eget rhoncus.
                </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu ante vel mauris molestie 
                 dignissim non eget nunc. Integer ac massa orci. Suspendisse vulputate semper nunc eget rhoncus.
                 Ut sit amet porta sem, interdum tincidunt libero. Nulla vel quam lobortis, varius est <br />
                 scelerisque, dapibus nisl.
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
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. In a odit perspiciatis. 
                    Facere velit assumenda, ad magnam corrupti quaerat facilis?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                    Autem omnis unde porro dolorem culpa? Ad similique minus dolor ratione? 
                    Quidem officia nemo nobis eum? Itaque vitae quo repellat dicta?
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam fugit eveniet cumque nulla 
                    voluptate voluptatem sunt magni! Sequi at exercitationem ut, minima, 
                    consequuntur perspiciatis commodi quas voluptatem, corrupti nisi aliquam?
                </div>
            </div>

            <div className="how-it-started-container">
                <div className="how-it-started-text">
                    <h1>How it Started</h1>
                    <div className="how-it-started-dash"></div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Provident, laboriosam. Enim quasi ea in magni.
                         Et explicabo unde natus amet.
                    </p>
                </div>


                <div className="last-container">
                 <div className="left-side-div">
                    <h1>Vel mauris molestie dignissim</h1>
                    <h3>Proin eu ante vel mauris molestie dignissim non eget nunc.
                         Integer ac massa orci. Suspendisse vulputate semper nunc 
                         eget rhoncus.
                    </h3>
                    <p>Praesent vel faucibus ligula. 
                        Sed sit amet ipsum eget velit aliquet faucibus. 
                        Maecenas et odio id turpis sollicitudin pulvinar sit amet vitae augue. 
                        Phasellus nec ultricies arcu.
                        Quisque efficitur tellus sit amet bibendum molestie. Duis id egestas odio.
                        Phasellus lacinia ex quis faucibus tempor. Sed feugia.
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