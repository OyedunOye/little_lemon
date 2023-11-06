//import Nav from "./Nav";
const Footer=()=>{
    return(
        <footer className="footer" id="footer" style={{display:'flex', marginLeft:'10rem', marginRight:'10rem', backgroundColor: 'D9D9D9'}}>
            <div style={{marginRight:'2rem'}}>
                <img src="/images/little lemon logo.jpg" alt ="little lemon restaurant logo" width="100vw"/>
            </div>
            <div style={{marginRight:'2rem'}}>
                <h2> Doormat Navigation</h2>
                <nav style={{display: 'flex', flexDirection:"column"}}>
                    <a href="/#home" >Home </a>
                    <a href="/#about" >About </a>
                    <a href="/#menu" >Menu </a>
                    <a href="/#reservations" >Reservations </a>
                    <a href="/#orderOnline" >Order Online </a>
                    <a href="/#login" >Login </a>
                </nav>
            </div>
            <div>
                <h2 style={{display: 'flex', flexDirection:"column"}}> Contact</h2>
                
                    <p>Address: Saint Louis Ave, 56-598 Chicago</p>
                    <p>Phone number: +12 456 7896 77</p>
                    <p>Email: littlelemon@delicious.com</p>
                
            </div>
            <div>
                <h2 style={{marginRight:'2rem', marginLeft:'2rem'}}>Social media links</h2>
                <nav>
                    <ul>
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>Whatsapp</li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
