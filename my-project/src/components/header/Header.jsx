import React, { useState, useEffect } from 'react';
import './Header.css';
import useTexts from '../../hooks/useTexts';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const texts = useTexts();
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [scrolled, setScrolled] = useState(false);
    const isPortfolioPage = window.location.pathname === '/portifolio';

    //Lida com resize da tela
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
            if (window.innerWidth > 768) setMenuOpen(false);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    //Lida com scroll da página
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavigation = (section) => {
        const isOnHome = window.location.pathname === '/portifolio';
        if (isOnHome) {
            scrollToSection(section);
        } else {
            navigate('/', { state: { scrollTo: section } });
        }
    };

    const scrollToSection = (section) => {
        const sectionMap = {
            about: 'about',
            projects: 'projects',
            contact: 'contact',
        };
        const el = document.getElementById(sectionMap[section]);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <header className={`header ${!isPortfolioPage ? 'header-solid' : (scrolled ? 'scrolled' : '')}`}>
            <a href="/portifolio" className="header-logo">GIOMELO</a>

            {isMobile ? (
                <>
                    <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                        ☰
                    </button>
                    <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
                        <ul>
                            <li>
                                <button className="nav-option" onClick={() => handleNavigation('about')}>
                                    {texts.About_Header}
                                </button>
                                <Link to="/projects">
                                    <button className="nav-option">
                                        {texts.Project_Header}
                                    </button>
                                </Link>
                                <button className="nav-option" onClick={() => handleNavigation('contact')}>
                                    {texts.Contact_Header}
                                </button>
                            </li>
                        </ul>
                    </nav>
                </>
            ) : (
                <nav className="nav-header">
                    <ul>
                        <li>
                            <button className="nav-option" onClick={() => handleNavigation('about')}>
                                {texts.About_Header}
                            </button>
                            <Link to="/projects">
                                <button className="nav-option">
                                    {texts.Project_Header}
                                </button>
                            </Link>
                            <button className="nav-option" onClick={() => handleNavigation('contact')}>
                                {texts.Contact_Header}
                            </button>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default Header;