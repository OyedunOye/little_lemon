import OnlineMenu from "./OnlineMenu";
const Main =()=>{
    return(
        <main className="main" id="main" style={{display:'flex', flexDirection:'column'}}>
            <div style={{display:'flex', flexWrap:'wrap', alignContent:'space-between', alignItems:'center', margin: '0rem 10rem 0rem 10rem'}}>
            <h1>This week's specials!</h1>
            <button type="button" style={{alignItems:'end'}} >Online Menu</button>
            </div>
            <article className='menucard' id='menucard' style={{marginLeft:'10rem',display:'flex', flexWrap:'wrap', marginRight:'10rem'}}>
                <OnlineMenu/>
            </article>
        </main>
    );
};

export default Main;