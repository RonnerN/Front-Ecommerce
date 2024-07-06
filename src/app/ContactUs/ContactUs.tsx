
import React from 'react';

const ContactUs: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-12">
            <div className="container mx-auto px-6">
                <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
                    Contáctanos
                </h1>
                <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Estamos aquí para ayudarte</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Si tienes alguna pregunta, comentario o inquietud, no dudes en comunicarte con nosotros. Nuestro equipo de soporte está disponible
                        para asistirte con cualquier cosa que necesites. Puedes contactarnos a través de cualquiera de los métodos abajo mencionados.
                    </p>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Nuestra Oficina</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Dirección: Calle Falsa 123, Ciudad, País
                    </p>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Correo Electrónico</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        support@techshop.com
                    </p>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Teléfono</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        +1 (234) 567-890
                    </p>
                </div>
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Formulario de Contacto</h2>
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Nombre
                            </label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                id="name" 
                                type="text" 
                                placeholder="Tu nombre" 
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Correo Electrónico
                            </label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                id="email" 
                                type="email" 
                                placeholder="tu@correo.com" 
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                                Mensaje
                            </label>
                            <textarea 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                id="message" 
                                placeholder="Tu mensaje" 
                                rows={5}
                            ></textarea>
                        </div>
                        <div className="flex items-center justify-between">
                            <button 
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                                type="button"
                            >
                                Enviar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
