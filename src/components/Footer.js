//import Nav from "./Nav";
const Footer=()=>{
    return(
        <footer className="footer" id="footer" style={{display:'flex', alignContent:'center', backgroundColor: '#D9D9D9'}}>
            <div style={{marginRight:'2rem', backgroundColor: '#D9D9D9'}}>
                <img src="/images/little lemon logo.jpg" alt ="little lemon restaurant logo" width="100vw"/>
            </div>
            <div style={{marginRight:'2rem', backgroundColor: '#D9D9D9'}}>
                <h2 style={{backgroundColor: '#D9D9D9'}}> Doormat Navigation</h2>
                <nav style={{display: 'flex', flexDirection:"column", backgroundColor: '#D9D9D9'}}>
                    <a href="/#home" style={{backgroundColor: '#D9D9D9'}} >Home </a>
                    <a href="/#about" style={{backgroundColor: '#D9D9D9'}}>About </a>
                    <a href="/#menu" style={{backgroundColor: '#D9D9D9'}}>Menu </a>
                    <a href="/#reservations" style={{backgroundColor: '#D9D9D9'}}>Reservations </a>
                    <a href="/#orderOnline" style={{backgroundColor: '#D9D9D9'}}>Order Online </a>
                    <a href="/#login" style={{backgroundColor: '#D9D9D9'}}>Login </a>
                </nav>
            </div>
            <div style={{backgroundColor:'#d9d9d9'}}>
                <h2 style={{display: 'flex', flexDirection:"column", backgroundColor:'#d9d9d9'}}> Contact</h2>
                
                    <p style={{backgroundColor: '#D9D9D9'}}>Address: Saint Louis Ave, 56-598 Chicago</p>
                    <p style={{backgroundColor: '#D9D9D9'}}>Phone number: +12 456 7896 77</p>
                    <p style={{backgroundColor: '#D9D9D9'}}>Email: littlelemon@delicious.com</p>
                
            </div>
            <div style={{backgroundColor: '#D9D9D9'}}>
                <h2 style={{marginRight:'2rem', marginLeft:'2rem', backgroundColor:'#d9d9d9'}}>Social media links</h2>
                <nav>
                    <ul style={{backgroundColor: '#D9D9D9'}}>
                        <li style={{backgroundColor: '#D9D9D9'}}>Facebook</li>
                        <li style={{backgroundColor: '#D9D9D9'}}>Instagram</li>
                        <li style={{backgroundColor: '#D9D9D9'}}>Whatsapp</li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
