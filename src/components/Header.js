import Navigation from "./Navigation"

const Header = () => {
    return ( 
        <header>
            <Navigation />
            <section className="header">
                <article>
                    <h1>Explore and Travel</h1>
                    <h3>Holiday finder</h3>
                    <div className="line"></div>
                    <form action="">
                        <select name="location">
                            <option value="">Location</option>
                        </select>
                        <select name="activity">
                            <option value="">Acticvity</option> 
                        </select>
                        <br />
                        <select name="grade">
                            <option value="">Grade</option>
                        </select>
                        <select name="date">
                            <option value="">Date</option> 
                        </select>
                        <br />
                        <input type="button" value="Explore" />
                    </form>
                </article>
                <img src="/img/thousand-01.png" alt="travel" />
            </section>
        </header>
     );
}
 
export default Header;