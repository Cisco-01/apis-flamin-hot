import { ContactFont } from '../font';

export default function ContactPage() {
  return (
    <section>
      <h1
        className={`text-[#f0ffff] font-black h-96 text-3xl text-center ${ContactFont.className}`}
      >
        APIs Flamin Hot
      </h1>
      
      <div className="sticky w-full max-w-6xl mx-auto h-16 md:h-24 shadow-md rounded">
        {/*Mostrar foto de perfil }
            
            {userPic.map(avatar => (
              <img
                loading="lazy"
                decoding="async"
                className="h-24 w-24 m-auto items-center rounded-full opacity-60 cursor-pointer"
                id={user.email}
                src={avatar.img}
                alt="Profile Pic"
              />
              ))*/}

        {/*Opcione de Modal para elegir foto de perfil */}

        <span
          className="text-[#f0ffff]
          text-base pl-4 mt-3 p-2 "
        >
          <h2>Correo: </h2>
          <button
            className="contactPage__button py-2 px-5 text-base mt-4 w-52 text-[#f0ffff] 
                font-semibold cursor-pointer overflow-hidden border-0 rounded-3xl tracking-widest
                uppercase"
          >
            Send
          </button>
        </span>
      </div>
    </section>
  );
}
