import React, { useEffect, useState } from 'react';

export const Cards = () => {
  const [personajes, setPersonajes] = useState([]);

  // Función para obtener los datos de la API
  const getPersonajes = async () => {
    try {
      const res = await fetch(
        'https://dummyjson.com/users?limit=10'
      );
      const data = await res.json();
      setPersonajes(data.users); // Acceder a la propiedad 'users' del objeto de respuesta
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Ejecutar la función cuando el componente se monte
  useEffect(() => {
    getPersonajes();
  }, []);

  return (
    <div>
      <h1 className="text-center font-bold text-3xl">DB MF</h1>

      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {personajes.map((personaje) => (
              <div key={personaje.id}>
                <a href={`/personajes/${personaje.firstName}`}>
                  <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                    <img
                      src={personaje.image}
                      alt={personaje.firstName}
                      height="150"
                      className="w-full object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">
                    Fecha de nacimiento: {personaje.birthDate}
                  </h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">
                    {personaje.firstName} {personaje.lastName}
                  </p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
