import "./Xtdok.css";

const template = () => {
  return `

<section id="imagenPrincipal">
  <div id="ProgramadoresMonitor">
  <img src="images/programadores-que-desarrollan-codigos-sus-computadoras_1.jpg" alt="programadores" id="programadores"/>
  </div> 
  <div id="contenedor">
  </div>
  <div id="textoCabezera">
  <h3> XTalentoDigital ofrece un curso de programación para personas con autismo
  </h3>
  </div>
</section>



<div id="cuadroInformacion">
<div id="InformacionTexto">
  <h1>¿Qué es el Programa Por Talento Digital?</h1>
  <p id="textoInformacion">
    Por Talento Digital es un programa de formación permanente en
    competencias digitales y profesiones tecnológicas de la Fundación ONCE
    orientado a la adquisición de conocimientos y cualificación
    tecnológica y digital de las personas con discapacidad para favorecer
    así su inclusión laboral en profesiones con alta demanda en el mercado
    de trabajo, multiplicando de esta forma sus perspectivas
    profesionales.
  </p>
</div>

<div id="InformacionImagen">
  <div id="textoImagen">
    <h3>II Convocatoria de becas</h3>
    <p id="textoBanner">
      ¡Ya se ha abierto la II Convocatoria de becas de formación
      individual. No pierdas la oportunidad!
    </p>
  </div>
</div>

<div id="contenedorBanner">
  <img src="images/banner_home.png" alt="banner" id="banner" />
</div>
</div>

<section id="cursos">
<div class="contenedorCursos"></div>

<div class="contenedorCursos"></div>
</section>

  `;
};

const Xtdok = () => {
  document.querySelector("main").innerHTML = template();
};

export default Xtdok;