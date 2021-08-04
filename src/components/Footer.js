
const Footer = () => {
    return ( 
        <footer>
            <section className="footer-section-one">
                <article>
                    <img src="./img/logo.png " alt="Logo" />
                    <p>
                        Plan and book your perfect trip with 
                        expert advice, travel tips destination
                        information from us
                    </p>
                    <div>©2020 Thousand Sunny. All rights reserved</div>
                </article>
                <article>
                    <table>
                        <tr>
                            <th>Destinations</th>
                            <th>Shop</th>
                            <th>Interests</th>
                        </tr>
                        <tr>
                            <td>Africa</td>
                            <td>Destination Guides</td>
                            <td>Adventure Travel</td>
                        </tr>
                        <tr>
                            <td>Antarctica</td>
                            <td>Pictorial & Gifts</td>
                            <td>Art And Culture</td>
                        </tr>
                        <tr>
                            <td>Asia</td>
                            <td>Special Offers</td>
                            <td>Wildlife And Nature</td>
                        </tr>
                        <tr>
                            <td>Europe</td>
                            <td>Delivery Times</td>
                            <td>Family Holidays</td>
                        </tr>
                        <tr>
                            <td>America</td>
                            <td>FAQs</td>
                            <td>Food And Drink</td>
                        </tr>
                    </table>
                </article>
            </section>
            <div className="line-long"></div>
           <section className="socialmedia">
                <a href="twitter"> <img src="./img/1_twitter.png" alt="twitter" /></a>
                <a href="facebook"> <img src="./img/2_facebook.png" alt="facebook" /></a>
                <a href="instagram"> <img src="./img/3_instagram.png" alt="instagram" /></a>
                <a href="linkedIn"> <img src="./img/4_linkedIn.png" alt="linkedIn" /></a>
                <a href="youtube"> <img src="./img/5_youtube.png" alt="youtube" /></a>
           </section>
            
        </footer>
     );
}
 
export default Footer;