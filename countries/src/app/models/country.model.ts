export interface Country {
  name: string;
  image: string;
  capital: string;
  currency: string;
}

export const countries: Country[] = [
  {name: 'Argentina', image: 'assets/Argentina.png', capital: 'Buenos Aires', currency: 'ARS'},
  {name: 'Colombia', image: 'assets/Colombia.png', capital: 'Bogotá', currency: 'COP'},
  {name: 'Brazil', image: 'assets/Brazil.svg', capital: 'Brasilia', currency: 'BRL'},
  {name: 'Venezuela', image: 'assets/Venezuela.png', capital: 'Caracas', currency: 'VES'},
  {name: 'Chile', image: 'assets/Chile.svg', capital: 'Santiago', currency: 'CLP'},
  {name: 'Perú', image: 'assets/Perú.jpg', capital: 'Lima', currency: 'PEN'},
  {name: 'Paraguay', image: 'assets/Paraguay.png', capital: 'Asunción', currency: 'PYG'},
  {name: 'Mexico', image: 'assets/Mexico.webp', capital: 'Mexico D.F', currency: 'MXN'},
  {name: 'Estados Unidos', image: 'assets/USA.svg', capital: 'Washington', currency: 'USD'},
  {name: 'Uruguay', image: 'assets/Uruguay.webp', capital: 'Montevideo', currency: 'UYU'},
  {name: 'Canada', image: 'assets/Canada.svg', capital: 'Ottawa', currency: 'CAD'},
  {name: 'Panamá', image: 'assets/Panama.png', capital: 'Ciudad de Panamá', currency: 'USD'},
];
