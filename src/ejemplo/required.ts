interface Pc {
    marca?: string;
    modelo?: string;
  }
  
  const computadoraRequerido: Required<Pc> = { marca: "Toshiba", modelo: "notebook elite" };
  // cocheRequerido debe tener ambas propiedades definidas
  
  const computadoraOpcional: Pc = {};
  