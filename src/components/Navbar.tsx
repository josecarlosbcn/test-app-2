
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import miLogo from "/images/logo_v1.webp"; // añadido por IBS


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    // Cerrar el menú móvil cuando se cambia de ruta
    setIsMobileMenuOpen(false);
  }, [location]);
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Novedades', path: '/novedades' },
    { name: 'Equipo', path: '/equipo' },
    { name: 'Resultados', path: '/resultados' },
    { name: 'Contacto', path: '/contacto' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link 
          to="/" 
          className="text-2xl font-bold text-scienceBlue flex items-center gap-2"
          aria-label="ECODigital - Página principal"
        >
          <img src={miLogo} alt="Logo ECODigital" className="w-10 h-10 squared-full" />
          <span className="hidden sm:inline">ECODigital</span>
          {/* <span className="w-8 h-8 rounded-full bg-scienceBlue flex items-center justify-center text-white text-sm">EC</span> */}
          {/* <span className="hidden sm:inline">ECODigital</span> */}
        </Link>
        
        {/* Navegación para desktop */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${isActive(link.path) ? 'nav-link-active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
          
          {/* <div className="ml-4">
            <Link to="/login">
              <Button variant="outline" size="sm" className="mr-2">
                Iniciar sesión
              </Button>
            </Link>
            <Link to="/registro">
              <Button variant="default" size="sm">
                Registro
              </Button>
            </Link>
          </div> */}
        </div>
        
        {/* Botón de menú móvil */}
        <button 
          className="md:hidden text-scienceBlue"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isMobileMenuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>
      </div>
      
      {/* Menú móvil */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg animate-fade-in">
          <div className="flex flex-col p-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`py-2 px-4 ${isActive(link.path) ? 'text-scienceBlue font-semibold' : 'text-foreground/80'}`}
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-2 px-4">
              <Link to="/login">
                <Button variant="outline" className="w-full justify-start">
                  Iniciar sesión
                </Button>
              </Link>
              <Link to="/registro">
                <Button variant="default"  className="w-full justify-start">
                  Registro
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
