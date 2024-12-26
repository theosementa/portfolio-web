import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'; // Icons for hamburger menu
import { Link, useNavigate } from 'react-router-dom';
import { LanguagePicker } from './pickers/LanguagePicker';

export const Navbar = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="font-sans sticky top-0 bg-background-100 shadow-md z-50 p-8">
      <div className="flex justify-between items-center">
        <Link to="/">
          <div className="flex flex-row items-center space-x-4">
            <img
              src="assets/images/theosementa.jpg"
              alt="theo's img"
              className="rounded-full border border-white shadow-lg w-10 h-10"
            />
            <p className="text-2xl font-bold text-white">Théo Sementa</p>
          </div>
        </Link>

        <div className="hidden md:flex space-x-6 items-center text-lg text-white font-semibold">
          <Link to="/projects">
            <p>{t('projects.title')}</p>
          </Link>
          <button onClick={() => navigate('/#skills')}>{t('skills.title')}</button>
          <button onClick={() => navigate('/#experiences')}>{t('experiences.title')}</button>
          <button onClick={() => navigate('/#studies')}>{t('studies.title')}</button>
          <Link to="/contact">
            <p>{t('contact.title')}</p>
          </Link>
          <LanguagePicker />
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white text-2xl">
            {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 mt-4 text-white text-lg font-semibold">
          <Link to="/projects" onClick={toggleMenu}>
            <p>{t('projects.title')}</p>
          </Link>
          <button onClick={() => { toggleMenu(); navigate('/#skills'); }}>
            {t('skills.title')}
          </button>
          <button onClick={() => { toggleMenu(); navigate('/#experiences'); }}>
            {t('experiences.title')}
          </button>
          <button onClick={() => { toggleMenu(); navigate('/#studies'); }}>
            {t('studies.title')}
          </button>
          <Link to="/contact" onClick={toggleMenu}>
            <p>{t('contact.title')}</p>
          </Link>
          <LanguagePicker />
        </div>
      )}
    </nav>
  );
};
