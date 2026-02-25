import React, { useState, useEffect } from 'react';
import './ButtonScroll.css';
import { FaArrowUp } from 'react-icons/fa';

const ButtonScroll = () => {
    const [isVisible, setIsVisible] = useState(false);

    //Função para voltar para o topo
    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    //Função para verificar a posição do scroll na tela
    const toggleVisibility = () => {
        if (window.pageYOffset > 200) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        isVisible && (
            <button
                className="scroll-top"
                onClick={scrollTop}
                aria-label="Voltar para o topo"
            >
                <FaArrowUp />
            </button>
        )
    );
};

export default ButtonScroll;