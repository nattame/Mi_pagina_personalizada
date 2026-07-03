
//const sobrebtn = document.getElementById("sobrebtn")
// const habbtn = document.getElementById("habilidadesbtn")
const pjbtn = document.getElementById("personajebtn")
// const bossbtn = document.getElementById("jefesbtn")
// const sobrediv = document.getElementById("sobredivv")
const foto1 = document.getElementById("foto1")

// const fotos = ["assets/legacy.webp","assets/Shifter11.webp"]

// let index = 0;
// sobrebtn.addEventListener("click",()=>{
    
//     if(index===0){
//         index=1;
//     }else{
//         index=0;
//     }
//     foto1.src = fotos[index];
    
// })

const personajes = [document.getElementById("raziel"),document.getElementById("kain"),document.getElementById("melchiah"),document.getElementById("zephon"),document.getElementById("rahab"),document.getElementById("dumah"),document.getElementById("moebius"),document.getElementById("turel")]
const nombrebtn = ["1- RAZIEL","2- KAIN","3- MELCHIAH","4-ZEPHON","5- RAHAB","6- DUMAH","7- MOEBIUS","8- TUREL"]
let index2=0
personajes[index2].style.display = "block";
pjbtn.innerHTML = nombrebtn[index2];


pjbtn.addEventListener("click",()=>{


    if(index2===7){
        index2=0;
        personajes[index2].style.display = "none";
        personajes[7].style.display = "none";
        personajes[index2].style.display = "block"; 
        pjbtn.innerHTML = nombrebtn[index2];
       
        
    }else if(index2>=0 && index2<=7){
    index2++;
    personajes[index2].style.display = "block"; 
    personajes[index2-1].style.display = "none";
    pjbtn.innerHTML = nombrebtn[index2];
    

    }})


pjbtn.addEventListener("mouseover",()=>{
    pjbtn.style.backgroundColor = "black";
})
pjbtn.addEventListener("mouseleave",()=>{
    pjbtn.style.backgroundColor = "#063d31";
})
// habbtn.addEventListener("mouseover",()=>{
//     habbtn.style.backgroundColor = "black";
// })
// habbtn.addEventListener("mouseleave",()=>{
//     habbtn.style.backgroundColor = "#063d31";
// })
// bossbtn.addEventListener("mouseover",()=>{
//     bossbtn.style.backgroundColor = "black";
// })
// bossbtn.addEventListener("mouseleave",()=>{
//     bossbtn.style.backgroundColor = "#063d31";
// })
// pjbtn.addEventListener("mouseover",()=>{
//     pjbtn.style.backgroundColor = "black";
// })
// pjbtn.addEventListener("mouseleave",()=>{
//     pjbtn.style.backgroundColor = "#063d31";
// })


// const habilidadess = [document.getElementById("diving"),document.getElementById("shift"),document.getElementById("phasing"),document.getElementById("climbing"),document.getElementById("shooting"),document.getElementById("swimming"),document.getElementById("constricting")]

// let index3=0
// habilidadess[index3].style.display= "block";
// habbtn.addEventListener("click",()=>{
//     index3++;
//     habilidadess[index3].style.display = "block";
    
//     habilidadess[index3-1].style.display = "none";
    

// })



// const jefess = [document.getElementById("melchiahboss"),document.getElementById("zephonboss"),document.getElementById("kainboss"),document.getElementById("rahabboss"),document.getElementById("dumahboss"),document.getElementById("kainboss2")]


// let index4=0
// jefess[index4].style.display= "block";
// bossbtn.addEventListener("click",()=>{
//     index4++;
//     jefess[index4].style.display = "block";
    
//     jefess[index4-1].style.display = "none";
    

// })


// const sections = [document.getElementById(sobre),document.getElementById(introduction),document.getElementById(habilidades),document.getElementById(jefes),document.getElementById(magia)]


// let index5=0
// sections[index5].style.display= "block";
// sobrediv.addEventListener("click",()=>{
//     index5++;
//     sections[index5].style.display = "block";
    
//     sections[index5-1].style.display = "none";
    

// })

const inputnom = document.getElementById("nombreinput");
const inputemail = document.getElementById("contactos");
const inputmen = document.getElementById("mensajes")
const enviado = document.getElementById("btnV");
const errordiv= document.getElementById("error");

class Formulario {
    constructor(nombre,email,mensaje){
        this.nombre = nombre;
        this.email = email;
        this.mensaje = mensaje;
    }
}
enviado.addEventListener("mouseover",()=>{
    enviado.style.backgroundColor = "black";
})
enviado.addEventListener("mouseleave",()=>{
    enviado.style.backgroundColor = "#063d31";
})
enviado.addEventListener("click", ()=>{
   
   try{

    if(inputnom.value.toString()===""){
        document.getElementById("error").textContent = "No dejes este espacio vacio.";
        
    }
    if (inputemail.value.toString()===""){
        document.getElementById("error2").textContent = ("Por favor escriba su email.")
    }
    if (inputmen.value.toString()===""){
        document.getElementById("error3").textContent = ("Por favor escriba un mensaje.")
    }
    if(inputnom.value.toString()!="" && inputemail.value.toString()!="" && inputmen.value.toString()!=""){
    const Form1 = new Formulario(inputnom.value.toString(),inputemail.value.toString(),inputmen.value.toString())
    console.log(Form1);
    }

   }catch(e){
        errordiv.textContent = e.message;
   }
    
        // error.innerHTML = inputnom.toString();
        
    
    // return inputnom;
})

