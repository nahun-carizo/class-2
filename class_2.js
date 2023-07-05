class CEmpleado {
    constructor(nombre, anioIngreso, salario, direccion) {
      this.nombre = nombre;
      this.Ingreso = Ingreso;
      this.direccion = direccion;
      this.salario = salario;
     
    }
  
    calcularAntiguedad() {
      const fechaActual = new Date().getFullYear();
      return fechaActual - this.Ingreso;
    }
  
    viveEnWallStreet() {
      return this.direccion.includes('WallStreet');
    }
  }
  
  const empleado1 = new CEmpleado('Robert', 2014, 5000, '64C- WallStreet');
  const empleado2 = new CEmpleado('tomas', 2016, 6000, '32B- Main Street');
  
  // Lo que sigue de aca me volvio loco.... mas errores no me quiso tirar y magicamente funciono
  console.log('Name\tYear of joining\tAddress');
  console.log(`${empleado1.nombre}\t${empleado1.Ingreso}\t\t${empleado1.direccion}`);
  console.log(`${empleado2.nombre}\t${empleado2.Ingreso}\t\t${empleado2.direccion}`);
  
  console.log(`\nAños de antigüedad de ${empleado1.nombre}: ${empleado1.calcularAntiguedad()}`);
  console.log(`Años de antigüedad de ${empleado2.nombre}: ${empleado2.calcularAntiguedad()}`);
  
  console.log(`\n${empleado1.nombre} vive en Wall Street: ${empleado1.viveEnWallStreet()}`);
  console.log(`${empleado2.nombre} vive en Wall Street: ${empleado2.viveEnWallStreet()}`);
  
