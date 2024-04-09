export var NivelEducativo;
(function (NivelEducativo) {
    NivelEducativo["BACHILLERATO"] = "Bachillerato";
    NivelEducativo["UNIVERSITARIO"] = "Universitario";
    NivelEducativo["POSGRADO"] = "Posgrado";
})(NivelEducativo || (NivelEducativo = {}));
var Aprendiz = /** @class */ (function () {
    function Aprendiz(nombres, apellidos, avatar, edad, nivelEducativos) {
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.avatar = avatar;
        this.edad = edad;
        this.nivelEducativos = nivelEducativos;
    }
    return Aprendiz;
}());
export { Aprendiz };
