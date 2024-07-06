
import React from 'react';

const About: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-12">
            <div className="container mx-auto px-6">
                <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
                    Acerca de Nosotros
                </h1>
                <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Nuestra Misión</h2>
                    <p className="text-gray-700 leading-relaxed">
                        En Ronners Shop, nuestra misión es proporcionar los últimos y mejores productos tecnológicos a nuestros clientes.
                        Nos esforzamos por ofrecer un servicio al cliente de primera, precios competitivos y una amplia selección de productos
                        para satisfacer todas tus necesidades tecnológicas. Ya seas un entusiasta de la tecnología, un gamer, o alguien que busca
                        los mejores gadgets para tu hogar u oficina, estamos aquí para ti.
                    </p>
                </div>
                <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Quiénes Somos</h2>
                    <p className="text-gray-700 leading-relaxed">
                        TechShop fue fundada en 2020 por un grupo de entusiastas de la tecnología que querían hacer que los productos tecnológicos más recientes
                        fueran accesibles para todos. Con experiencia en ingeniería de software, desarrollo de hardware y servicio al cliente, nuestro equipo
                        aporta una gran cantidad de experiencia y pasión. Creemos en el poder de la tecnología para transformar vidas y estamos comprometidos
                        a ayudar a nuestros clientes a mantenerse a la vanguardia.
                    </p>
                </div>
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Conoce al Equipo</h2>
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-1/2 lg:w-1/4 p-4">
                            <div className="bg-gray-200 rounded-lg p-6 text-center">
                                <img 
                                    src="https://via.placeholder.com/150" 
                                    alt="Miembro del Equipo" 
                                    className="rounded-full w-32 h-32 mx-auto mb-4"
                                />
                                <h3 className="text-lg font-semibold text-gray-800">Juan Pérez</h3>
                                <p className="text-gray-600">CEO & Fundador</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/4 p-4">
                            <div className="bg-gray-200 rounded-lg p-6 text-center">
                                <img 
                                    src="https://via.placeholder.com/150" 
                                    alt="Miembro del Equipo" 
                                    className="rounded-full w-32 h-32 mx-auto mb-4"
                                />
                                <h3 className="text-lg font-semibold text-gray-800">Ana García</h3>
                                <p className="text-gray-600">Directora de Tecnología</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/4 p-4">
                            <div className="bg-gray-200 rounded-lg p-6 text-center">
                                <img 
                                    src="https://via.placeholder.com/150" 
                                    alt="Miembro del Equipo" 
                                    className="rounded-full w-32 h-32 mx-auto mb-4"
                                />
                                <h3 className="text-lg font-semibold text-gray-800">Carlos López</h3>
                                <p className="text-gray-600">Jefe de Marketing</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/4 p-4">
                            <div className="bg-gray-200 rounded-lg p-6 text-center">
                                <img 
                                    src="https://via.placeholder.com/150" 
                                    alt="Miembro del Equipo" 
                                    className="rounded-full w-32 h-32 mx-auto mb-4"
                                />
                                <h3 className="text-lg font-semibold text-gray-800">María Fernández</h3>
                                <p className="text-gray-600">Líder de Soporte al Cliente</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;

