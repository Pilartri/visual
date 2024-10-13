import Image from "next/image";

import AthleteCard from './AthleteCard';

export default function Home() {
  const athletes = [
    {
      name: 'Natación',
      imageUrl:'/natacion.svg',
    },
    {
      name: 'Atletismo',
      imageUrl: '/run.svg',
    },
    {
      name: 'Ciclismo',
      imageUrl:'/bici.svg',
    },
    {
      name: 'Salto con garrocha',
      imageUrl: '/garrocha.svg',
    },
    {
      name: 'Gimnasia artística',
      imageUrl: '/gim.svg',
    },
    {
      name: 'Judo',
      imageUrl: '/judo.svg',
    },
    {
      name: 'Arco y flecha',
      imageUrl: '/arco.svg',
    },
    {
      name: 'Futbol',
      imageUrl: '/futbol.svg',
    },
    {
      name: 'Hockey',
      imageUrl: '/hockey.svg',
    },
    {
      name: 'Lucha',
      imageUrl: '/lucha.svg',
    },
    {
      name: 'Handball',
      imageUrl: '/handball.svg',
    },
    {
      name: 'Tenis',
      imageUrl: '/tenis.svg',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-black text-center text-[#5F1BBF]">
          VISUAL
        </h1>
        <p className="text-lg font-light text-center mb-16 text-gray-500"> 
          Juegos Olímpicos
        </p>

        <Image className='ml-[300px]'
          src="desarrollo.svg" 
          alt="Olympic Women Participation"
          width={700}
          height={700}
        />
        <h1 className="text-lg font-light text-center text-gray-500 mt-12">
         Colores
        </h1>

          <Image className='ml-[430px] mt-12'
          src="colores.svg" 
          alt="Olympic Women Participation"
          width={400}
          height={400}
        />

        <h1 className="text-2xl font-black text-center text-[#5F1BBF] mt-24">
         Logos
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-24"></div>
        <Image className='ml-[100px]'
          src="logo_par.svg" 
          alt="Olympic Women Participation"
          width={200}
          height={300}
        />
        <Image className='ml-[540px] mt-[-320px]'
          src="logo2.svg" 
          alt="Olympic Women Participation"
          width={200}
          height={300}
        />
       <Image className='ml-[960px] mt-[-320px]'
          src="logo3.svg" 
          alt="Olympic Women Participation"
          width={200}
          height={300}
        />

        <h1 className="text-2xl font-black text-center text-[#5F1BBF] mt-24">
         Íconos
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-24">
          {athletes.map((athlete) => (
            <AthleteCard key={athlete.name} {...athlete} />
          ))}
        </div>

        <h1 className="text-2xl font-black text-center text-[#5F1BBF] mt-24">
         Medallero
        </h1>

        <Image className='ml-[350px] mt-12'
          src="medallero.svg" 
          alt="Olympic Women Participation"
          width={600}
          height={600}
        />

        <h1 className="text-2xl font-black text-center text-[#5F1BBF] mt-24">
        Ilustraciones
        </h1>

        <Image className='ml-[300px] mt-12'
          src="simbolos olimpics-15.svg" 
          alt="Olympic Women Participation"
          width={400}
          height={400}
        />
        <Image className='ml-[600px] mt-[-320px]'
          src="simbolos olimpics-16.svg" 
          alt="Olympic Women Participation"
          width={400}
          height={400}
        />
        <Image className='mt-2'
          src="chicas-10.svg" 
          alt="Olympic Women Participation"
          width={400}
          height={400}
        />
        <Image className='ml-[450px] mt-[-300px]'
          src="chicas-11.svg" 
          alt="Olympic Women Participation"
          width={400}
          height={400}
        />

        <Image className='ml-[900px] mt-[-350px]'
          src="chicas-12.svg" 
          alt="Olympic Women Participation"
          width={400}
          height={400}
        />

        <Image className='ml-[200px]'
          src="chicas-13.svg" 
          alt="Olympic Women Participation"
          width={400}
          height={400}
        />
          <Image className='ml-[670px] mt-[-300px]'
          src="chicas-14.svg" 
          alt="Olympic Women Participation"
          width={400}
          height={400}
        />

        <h1 className="text-2xl font-black text-center text-[#5F1BBF] mt-24">
        Separadores
        </h1>  
        <Image className='ml-[570px] mt-12'
          src="femenino.svg" 
          alt="Olympic Women Participation"
          width={150}
          height={150}
        />
        <Image className='ml-[150px] mt-[-150px]'
          src="separadores-20.svg" 
          alt="Olympic Women Participation"
          width={300}
          height={300}
        />

        <Image className='ml-[850px] mt-[-150px]'
          src="separadores-21.svg" 
          alt="Olympic Women Participation"
          width={300}
          height={300}
        />   


        <h1 className="text-4xl font-black text-center text-[#5F1BBF] mt-36">
          APLICACIÓN A LA WEB
        </h1>
        <p className="text-lg font-light text-center mb-16 text-gray-500 mt-8"> 
          Inicio del Sitio Web
        </p>
        <Image className='ml-8 mt-12 shadow-lg'
          src="inicio.svg" 
          alt="Olympic Women Participation"
          width={600}
          height={800}
        />

          <Image className='ml-[670px] mt-[-665px] shadow-lg'
          src="inicio-1.svg" 
          alt="Olympic Women Participation"
          width={600}
          height={800}
        />

        <p className="text-lg font-light text-center mb-16 text-gray-500 mt-16"> 
          Sección de medallero
        </p>
        <Image className='ml-[350px] mt-6 shadow-lg'
          src="medallas.svg" 
          alt="Olympic Women Participation"
          width={600}
          height={650}
        />

      </div>
    </div>
  );
}

