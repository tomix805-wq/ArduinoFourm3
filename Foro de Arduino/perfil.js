async function cargarPerfil(){

    const {data,error} = await supabaseClient
    .auth
    .getUser();


    if(error){
        console.log(error);
        return;
    }


    const usuario = data.user;


    const {data:perfil,error:perfilError} =
    await supabaseClient
    .from("perfiles")
    .select("*")
    .eq("id",usuario.id)
    .single();


    if(perfilError){
        console.log(perfilError);
        return;
    }


    return perfil;

}
async function mostrarPerfil(){


const {data:userData}=

await supabaseClient
.auth
.getUser();



const user=userData.user;



const {data:perfil}=

await supabaseClient
.from("perfiles")
.select("*")
.eq("id",user.id)
.single();



document.getElementById("fotoPerfil")
.src=perfil.foto;


document.getElementById("nombrePerfil")
.innerHTML=perfil.nombre;


document.getElementById("rangoPerfil")
.innerHTML=" "+perfil.rango;


document.getElementById("publicacionesPerfil")
.innerHTML=
" Publicaciones: "
+perfil.publicaciones;


}


mostrarPerfil();