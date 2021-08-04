import ImgArticle from "./ImgArticle";

const Home = (props) => {
    return ( 
        <section>
            <ImgArticle 
                img="/img/thousand-02.png"
                headline="A new way to explore the world "
                text="For decades travellers have reached for Lonely Planet books when looking to plan 
                and execute their perfect trip, but now, they can also let Lonely Planet Experiences 
                lead the way"
                btn="Learn more"
                btnTarget=""
                direction={"row"}
            />
        </section>
     );
}
 
export default Home;