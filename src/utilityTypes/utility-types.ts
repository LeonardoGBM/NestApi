
interface Computadora {
    marca: string;
    modelo: string;
    año: number;
  }
  
  type PcPartial = Partial<Computadora>;
  
  const pcPartial: PcPartial = {
      marca: "Toyota",
      modelo: "toshiba",
      año: 12,
    };
  
  console.log(pcPartial);



interface Computadora {
    marca: string;
    modelo: string;
    año: number;
  }
  
  type PcRequired = Required<Computadora>;
  
  const pcRequired: PcRequired = {
      marca: "Toyota",
      modelo: "toshiba",
      año: 12,
    };
  
  console.log(pcRequired);
  

  