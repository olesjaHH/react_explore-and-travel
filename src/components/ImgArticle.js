const ImgArticle = (props) => {
    console.log(props)
    return (
        <div className="two-columns" style={
            { flexDirection: props.direction }
        }>
            <div className="img">
                <img src={props.img} alt="" />
            </div>
            <div className="text">
                <h1>{props.headline}</h1>
                <p>{props.text}</p>
                <a href={props.btnTarget}>{props.btn}</a>
            </div>
        </div>
    );
}

export default ImgArticle;