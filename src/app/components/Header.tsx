export default function Header() {
    return (
      <header className="flex justify-between items-center p-4 shadow-md bg-white">
        <h1 className="text-lg font-semibold">Madelyn Torff</h1>
        <nav className="space-x-6">
          <a href="#about" className="hover:text-primaryYellow">About</a>
          <a href="#projects" className="hover:text-primaryYellow">Projects</a>
          <a href="#contact" className="hover:text-primaryYellow">Contact</a>
        </nav>
      </header>
    );
  }