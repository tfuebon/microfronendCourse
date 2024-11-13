# Micro-Frontend
## Definición
Los Microfrontends son similares a los microservicios, pero aplicados al front-end de una aplicación. Permiten dividir un front-end monolítico en múltiples microfrontends para mejorar la gestión y modularidad.

## Reglas del Micro-Frontend
1. Se puede usar **cualquier tecnología** como Angular, React, Vue...
2. Cada equipo debe de tener su **código aislado**. Por ejemplo: un equipo se encarga de listar los productos, otro de manejar el carrito de compra, otro de las búsquedas... Esto permitirá que no todos los equipos trabajen sobre el mismo código lo que implica que se minimicen problemas de código sobreescrito, trabjar sobre un repositorio no actualizado...
3. Tendrán prioridad a la hora de usarse las **funciones nativas** antes que las personalizadas. Por ejemplo: para comunicar componentes se usarán antes funciones como el localStorage que alguna creada por nosotros mismos que use web sockets.
4. Los micro-frontend debe ser **resilientes**, y que en el caso de que alguno de ellos falle, el resto de ellos puedan continuar funcionando con normalidad.

## Ventajas y desventajas
### Ventajas
- Repositorios altamente cohesivos, que resultan más fáciles de mantener y con menos líneas de código para ejecutar una acción.
- Equipos desacoplados y escalables.
- Los cambios que se realizan específicamente en una interfaz, se realizan de forma más rápida y sin llegar a afectar a las demás interfaces.
### Desventajas
- Dificultad para eliminar dependencias y comunicar los micro-frontends.
- Dependencias duplicadas.
- Mayor cantidad de archivos dentro del repositorio.
- Dificultad añadida para el ciclo de integración continua y despliegue, mayor tiempo de espera, para que terminen de compilar cada micro-frontend.
- Requiere de especialistas de micro-frontend.