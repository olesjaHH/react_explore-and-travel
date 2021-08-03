import FeaturedImg from "./FeaturedImg";

const trendingArray = [
    { img: "/img/blog01.png" },
    { img: "/img/blog02.png" },
    { img: "/img/blog03.png" },
    { img: "/img/blog04.png" }
]
const Partner = () => {
    return ( 
        <section>
            <article>
                <div>
                    <h2>Testimonials</h2>
                    <img src="/img/5stars.png" alt="stars" />
                    <p>“Quisque in lacus a urna fermentum euismod. Integer mi nibh, dapibus ac scelerisque eu, facilisis quis purus. Morbi blandit sit amet turpis nec”</p>
                    <h3>Edward Newgate</h3>
                    <p>Founder Circle</p>
                </div>
                <figure>
                    <img src="/img/testimonial_photo.png" alt="testimonial" />
                </figure>
            </article>
            <div className="featured">
            <h2>Trending stories <span className="view">View all</span></h2> 
        {trendingArray.map((ele, i) => <FeaturedImg
            key={i}
            data={ele}
        />)}
    </div>
        </section>
     );
}
 
export default Partner;