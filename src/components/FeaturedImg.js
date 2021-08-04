const FeaturedImg = (props) => {
    console.log(props)
    return (
        <figure>
            <img src={props.data.img} alt="" />
        </figure>
    );
}

export default FeaturedImg;