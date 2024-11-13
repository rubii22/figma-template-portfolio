export default function Home() {
    return (
      <section className="relative flex items-center justify-between px-8 py-16 bg-lightGray overflow-hidden">
        
        <div className="relative z-10 max-w-md">
          <h2 className="text-sm text-primaryYellow font-semibold">UI/UX Designer</h2>
          <h1 className="text-5xl font-bold mt-2 leading-snug">Hello, my name is Madelyn Torff</h1>
          <p className="mt-4 text-gray-700">
            Short text with details about you, what you do, or your professional career. 
            You can add more information on the about page.
          </p>
          <div className="mt-6 space-x-4">
            <button className="bg-primaryYellow text-white py-2 px-4 rounded shadow-md">Projects</button>
            <button className="border border-primaryYellow text-primaryYellow py-2 px-4 rounded shadow-md">LinkedIn</button>
          </div>
        </div>
  
        
        <div className="absolute top-0 right-0 w-2/3 h-full bg-primaryYellow rounded-bl-full -z-10"></div>
  
        
        <div className="relative z-10 w-1/2 h-auto -mt-16">
          <img
            src="/image.png" 
            alt="Madelyn Torff"
            className="object-cover w-full h-full"
          />
        </div>
      </section>
    );
  }
   