import Contacto from "./Paginas/Contacto";
import Inicio from "./Paginas/Inicio";
import Productos from "./Paginas/Productos";

const AppRoutes = [
  {
    index: true,
    element: <Inicio/>
  },
  {
    path: '/Paginas/contacto',
    element: <Contacto/>,
    name: 'Contacto'
  },
  {
    path: '/Paginas/productos',
    element: <Productos/>,
    name: 'Productos'
  }
];

export default AppRoutes;