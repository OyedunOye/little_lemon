import Founders from "./Founders";
import OnlineMenu from "./OnlineMenu";
import Testimonial from "./Testimonial";
const Main =()=>{
    return(
        <main className="main" id="main" style={{display:'flex', flexDirection:'column'}}>
            <div style={{display:'flex', alignSelf:'center'}}>
            <h1 style={{marginRight:'20rem'}}>This week's specials!</h1>
            <button type="button"  style={{marginLeft:'8rem'}}>Online Menu</button>
            </div>
            <article className='menucard' id='menucard' style={{marginLeft:'10rem',display:'flex', alignSelf:'center', flexWrap:'wrap', marginRight:'10rem'}}>
                <OnlineMenu/>
            </article>
            <div style={{display:'flex'}}>
            <Testimonial />
            </div>
            <div style={{display:'flex', alignSelf:'center', marginTop:'3rem', marginBottom:'3rem'}}>
                <Founders />
            </div>
        </main>
    );
};

export default Main;