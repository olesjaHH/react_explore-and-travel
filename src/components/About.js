import ImgArticle from "./ImgArticle";

const About = () => {
    return ( 
    <section>
         <ImgArticle 
             img="/img/thousand-03.png"
             headline="Guides by Thousand Sunny"
             text="Packed with tips and advice from our on-the-ground experts, our city guides app (iOS and Android) is the ultimate resource before and during a trip."
             btn="Download"
             btnTarget=""
             direction={"row-reverse"}
         />
    </section>
     );
}
 
export default About;