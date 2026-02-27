import pnLogo from '../assets/pn-logo.png'
function  Header (props){
    return (
    <>
    <header id="header">
            <img src={pnLogo} alt="PN Logo" />
            <h1>Students results for ({props.title})</h1>
          </header>
          
        </>
        )
}
export default Header;