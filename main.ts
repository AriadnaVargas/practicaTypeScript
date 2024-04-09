import {Aprendiz, NivelEducativo } from "./aprendiz.js";
import { Curso } from "./curso.js";

let cursos=[new Curso("EDA", 72,100, true, 2022), 
new Curso("Abstracta_1", 64, 100, true, 2023), 
new Curso("Analisis", 64,100,true,2023),
new Curso("Vectorial",72,100,false,2023)]

export const ap= new Aprendiz("Laura", "Rodriguez Sierra", "avatar.png", 20, NivelEducativo.UNIVERSITARIO, cursos);
console.log(ap.cursos);
let aprendizTable: HTMLElement = document.getElementById("aprendiz")!;
let estadisticasTable: HTMLElement= document.getElementById("estadisticas")!;
mostrarDatoAprendiz(ap);
mostrarEstadisticas(ap);

function mostrarDatoAprendiz(aprendiz: Aprendiz):void{
    let tbodyAprendiz = document.createElement("tbody");
    tbodyAprendiz.innerHTML= `<tr><td colspan=2><img src="./${aprendiz.avatar}" height= 100></td></tr>
    <tr><td>Nombres</td><td>${aprendiz.nombres}</td></tr>
     <tr><td>Apellidos:</td><td>${aprendiz.apellidos}</td></tr>
     <tr><td>Nivel Educativo:</td><td>${aprendiz.nivelEducativos}</td></tr>
     <tr><td>Edad:</td><td>${aprendiz.edad}</td></tr>`
     aprendizTable.appendChild(tbodyAprendiz);   
}


function mostrarEstadisticas(aprendiz:Aprendiz):void{
    let numeroCertificados:number=aprendiz.darCursosCertificados();
    let trElement:HTMLElement = document.createElement("tr");
    trElement.innerHTML=`<td><b>Cursos certificados</td><td>${numeroCertificados}</td>`;
    estadisticasTable.appendChild(trElement);
}

