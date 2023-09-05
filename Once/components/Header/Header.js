import "./Header.css";


const template = () => {
    return `  
    
    
<nav id='navSecundario'>   



<div id="secundario">
  <ul id='ulSecundario'>

  <li>
  <a href="null">
  <img src="icons/icon-facebook.png" alt="icono de Facebook">
  </a>
  </li>

  <li>
  <a href="null">
  <img src="icons/icon-instagram.png" alt="icono de Instagram">
  </a>
  </li>

  <li>
  <a href="null">
  <img src="icons/icon-linkedin.png" alt="icono de Linkedin">
  </a>
  </li>

    <li>
  <a href="null">
  <img src="icons/icon-twitter.png" alt="icono de Twitter">
  </a>
  </li>

    <li>
  <a href="null">
  <img src="icons/icon-youtube.png" alt="icono de Youtube">
  </a>
  </li>


  </ul>
 </div>

 <div>
 <img src="icons/logo-gso2021.png" id='logotipo' alt="logotipo">
 </div>

 </nav>

 <hr>




<nav id='navPrimario'>
<div id="Segundo">


<ul id='ulPrimario'>

<li>
<a href="#null" id="xtd-link">¿Qué es XTD?</a>
</li>

<li>
<a href="#null" id="cursos-link">Cursos</a>
</li>

<li>
<a href="#null" id="becas-link">Becas</a>
</li>

</div>


<img src="icons/logo.png" id='logo' alt="Logo" class='logo'>



<div id="Primero">
<ul id='ulPrimario2'>

<li>
<a href="#null" id="blog-link">Blog</a>
</li>

<li>
<a href="#null" id="alumnos-link">Alumnos</a>
</li>

<li>
<a href="#null" id="colaboradores-link">Colaboradores</a>
</li>

</nav>

<hr>

`;
};



 const Header = () => {
    document.querySelector("header").innerHTML = template();
  };

  export default Header;
