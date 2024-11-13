import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
    return (
      <section id="contact" className="py-16 bg-white text-center relative">
        
       
   <h2 className="text-3xl font-semibold relative mb-4 text-gray-800">
      Contact Me
      <span className="block w-20 h-1 bg-yellow-500 mx-auto mt-2"></span>
    </h2> 
        
        <form className="max-w-md mx-auto mt-8 space-y-4">
          <input type="text" placeholder="Name" className="w-full p-3 border rounded" />
          <input type="email" placeholder="Email" className="w-full p-3 border rounded" />
          <textarea placeholder="Message" className="w-full p-3 border rounded h-32"></textarea>
          <button className="bg-yellow-500 text-white py-2 px-6 rounded shadow-md hover:bg-yellow-600 transition">
            Send
          </button>
        </form>
        
        <div className="mt-8 flex justify-center space-x-6 text-gray-500">
          <a href="#" aria-label="Instagram" className="hover:text-yellow-500 w-912  h-102 top-2809">
            <FaInstagram size={24} />
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-yellow-500 w-912 h-102 top-2809">
            <FaLinkedin size={24} />
          </a>
          <a href="#" aria-label="Email" className="hover:text-yellow-500 w-912 top-2809">
            <FaEnvelope size={24} />
          </a>
        </div>

        <div className="font-[Nunito] text-[16px] font-normal leading-5 text-center mb-2">
            Madelyn Torff 2021{" "}
          </div>
        
        <div>
        <img src="/vector.png" alt="footer" width={1440} height={344} className="w-full h-auto" />
        </div>
      </section>
    );
}
