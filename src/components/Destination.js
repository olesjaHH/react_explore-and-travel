import FeaturedImg from "./FeaturedImg";

const featuredArray = [
    { img: "/img/d1_Raja_ampat.png" },
    { img: "/img/d2_Fanjingshan.png" },
    { img: "/img/d3_Vevey.png" },
    { img: "/img/d4_Skadar.png" }
]

const Destination = () => {
    return ( 
        <div className="featured">
            <h2>Featured destinations <span className="view">View all</span></h2> 
        {featuredArray.map((ele, i) => <FeaturedImg
            key={i}
            data={ele}
        />)}
    </div>
     );
}
 
export default Destination;