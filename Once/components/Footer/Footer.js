import "./Footer.css";

const template = () => {
    return `  
    
    
<div id="contenedorFooter">
 <p>oprdipo</p>
</div>


`;
};


const Footer = () => {
    document.querySelector("Footer").innerHTML = template();
  };

  export default Footer;