export default function About() {
    return (
      <section id="about" className="flex flex-col md:flex-row items-center justify-between text-left py-16 px-8 bg-gray-100 min-h-screen">
        
        
        <div className="relative z-10 max-w-md">
         <h2 className="text-5xl p-0 font-bold mt-2 leading-snug">About Me</h2>
          <p className="mt-4 text-gray-700">
          Nisi arcu, scelerisque neque ut. Tincidunt amet, tempor duis tortor neque auctor dis ipsum. Pretium cras amet odio amet eleifend id sed cras sed. Aliquet risus posuere aliquet imperdiet sit.

          </p>
          <div className="mt-6 space-x-4">
            <button className="border border-primaryYellow text-black bg-yellow-400 py-2 px-4 rounded shadow-md">Resume</button>
          </div>
        </div>
        
        
        <div className="relative md:w-1/2 flex justify-center">
          
          <div className="absolute w-48 h-48 bg-yellow-400 rounded-full -z-10 transform translate-x-[-25%]"></div>
          
          
          <img
            src="/bg-2.png" 
            alt="About Me"
            className="w-524 h-524 rounded-full object-cover top-94 left-796"
          />
        </div>
      </section>
    );
}
