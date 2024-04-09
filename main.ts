import {Aprendiz, NivelEducativo } from "./aprendiz.js";

export const ap= new Aprendiz("Laura", "Rodriguez Sierra", "avatar.png", 20, NivelEducativo.UNIVERSITARIO);

let aprendizTable: HTMLElement = document.getElementById("aprendiz")!;
mostrarDatoAprendiz(ap);

function mostrarDatoAprendiz(aprendiz: Aprendiz):void{
    let tbodyAprendiz = document.createElement("tbody");
    tbodyAprendiz.innerHTML= `<tr><td colspan=2><img src="./${aprendiz.avatar}" height= 100></td></tr>
    <tr><td>Nombres</td><td>${aprendiz.nombres}</td></tr>
     <tr><td>Apellidos:</td><td>${aprendiz.apellidos}</td></tr>
     <tr><td>Nivel Educativo:</td><td>${aprendiz.nivelEducativos}</td></tr>
     <tr><td>Edad:</td><td>${aprendiz.edad}</td></tr>`
     aprendizTable.appendChild(tbodyAprendiz);

    
    
    
}

