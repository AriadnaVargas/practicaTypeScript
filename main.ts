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
let cursosTable:HTMLElement=document.getElementById("cursos")!;
let btnFiltro: HTMLElement = document.getElementById("boton-filtro")!;
let textoBusqueda:HTMLInputElement = <HTMLInputElement>document.getElementById("texto-busqueda")!;

btnFiltro.onclick = ()=>{
    
        let text:string= textoBusqueda.value;
        text = (text==null)?"":text;
        cursosTable.getElementsByTagName("tbody")[0].remove();
        let cursosFiltrados: Curso[]=ap.cursos.filter(c=>c.nombre.match(text)); 
        mostrarCursosAprendiz(cursosFiltrados);    
};

mostrarDatoAprendiz(ap);
mostrarEstadisticas(ap);
mostrarCursosAprendiz(ap.cursos);



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

function mostrarCursosAprendiz(cursos: Curso[]):void{
    let cursosTbody:HTMLElement=document.createElement("tbody");
    let estado: string[] = cursos.map(c => (c.calificacion>60)?`green` : `red`);
    let index: number =0;
    for (let curso of cursos){
        let trElement: HTMLElement = document.createElement("tr");
        trElement.innerHTML=`<td>${curso.nombre}</td>
        <td>${curso.horas}</td>
        <td style="color:${estado[index]}">${curso.calificacion}</td>
        <td>${curso.certificado}</td>
        <td>${curso.anio}</td>`;
        cursosTbody.appendChild(trElement);
        index++;
    }
    
    cursosTable.appendChild(cursosTbody);
}

