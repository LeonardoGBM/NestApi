interface Usuario {
    nombre: string;
    edad: number;
  }
  
  const usuarioParcial: Partial<Usuario> = { nombre: "Leonardo" };

  
  const usuarioCompleto: Usuario = { nombre: "Gustavo", edad: 23 };

  console.log(usuarioParcial)