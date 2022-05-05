function validar(){
    var cursos = document.getElementById("contraseña").value;
    if ( cursos == "Derivadas" || cursos=="derivadas" || cursos== "DERIVADAS" ){
    window.location = "https://aeon-merx.github.io/AEON-MERX/bgzdbndgljblnjdzgnlbjnldg.pdf"; 
    }
      
    else if( cursos == "Programacion" || cursos=="programacion" || cursos=="PROGRAMACION" || cursos=="Programación"){
    window.location = "https://aeon-merx.github.io/AEON-MERX/"; 
    }
    else
    alert("Escribe correctamente el nombre del curso que deseas");
    }
