import '../../variables/Colors.css';
import './ProjectsPage.css';

import useTexts from '../../hooks/useTexts';
import Header from '../../components/header/Header';
import Footer from "../../components/footer/Footer";

import imageIntroducion from '../../assets/img/project/introducion.png';

import iconLink from '../../assets/icon/link.svg';

// Imagem dos projetos
import imageHooked from '../../assets/img/project/hooked.jpg';
import imageBrocolli from '../../assets/img/project/broccoli.jpg';
import imageBlockar from '../../assets/img/project/blockar.jpeg';
import imageChaotic from '../../assets/img/project/chaotic.jpg';
import imageTooMuch from '../../assets/img/project/toomuch.jpg';
import imageTransitandoLegal from '../../assets/img/project/transitolegal.webp';
import imageItauRunner from '../../assets/img/project/itaurunner.webp';
import imageMeuMalvadoFav from '../../assets/img/project/malvadoFav.webp';
import imageTimMapa from '../../assets/img/project/timMapa.jpg';
import imageTimOrgulho from '../../assets/img/project/diaOrgulho.webp';
import imageDiveb from '../../assets/img/project/diveb.png';
import imageTimBlackFriday from '../../assets/img/project/timBlackFriday.png';
import imagefonteOuro from '../../assets/img/project/fonteOuro.jpg';
import imagecafeAioros from '../../assets/img/project/cafeAioros.jpg';


const allProjectsData = [
    { id: 1, path: 'https://play.google.com/store/apps/details?id=com.Aioros.TLDigital&hl=pt_BR', title: 'Transitando Legal Digital', category: 'Aioros Studios', image: imageTransitandoLegal, tags: ['Unity', 'Android/iOS', 'Educational'], type: 'professional' },
    { id: 2, path: 'https://store.steampowered.com/app/3997950/Hooked/', title: 'Hooked', category: 'Indie', image: imageHooked, tags: ['Unity', 'Windows', 'Linux'], type: 'personal' },
    { id: 3, path: 'https://mamacabra.itch.io/blockar', title: 'Blockar ', category: 'Indie', image: imageBlockar, tags: ['Unity', 'Windows', 'Linux'], type: 'personal' },
    { id: 4, path: 'https://mamacabra.itch.io/chaoticsea', title: 'Chaotic Sea', category: 'Indie', image: imageChaotic, tags: ['Unity', 'Windows', 'Linux'], type: 'personal' },
    { id: 5, path: 'https://giovana-melo.itch.io/too-much-work-for-only-one-godess', title: 'Too Much Work For Only One Godess', category: 'Game Jam', image: imageTooMuch, tags: ['Construct', 'Windows', 'Linux'], type: 'personal' },
    { id: 6, path: 'https://giovana-melo.itch.io/brocolli', title: 'Brocolli ', category: 'Game Jam', image: imageBrocolli, tags: ['Construct', 'Windows', 'Linux'], type: 'personal' },
    { id: 7, path: 'https://drive.google.com/file/d/1TeISWDMRWdXyG_1ntQQTxJAHQrSaIXkX/view?usp=sharing', title: 'Itaú Runner ', category: 'Aioros Studios', image: imageItauRunner, tags: ['Unity', 'Phygital'], type: 'professional' },
    { id: 8, path: 'https://drive.google.com/file/d/19iqXeNrILq1pDC6wQ42d2_sBb4UX82qZ/view?usp=sharing', title: 'Campanha Meu Malvado Favorito 4', category: 'Aioros Studios', image: imageMeuMalvadoFav, tags: ['Unity', 'Phygital'], type: 'professional' },
    { id: 9, path: 'https://drive.google.com/file/d/1bdJkud8-iZHSIhJ93q2FBxRi-6ZScyud/view?usp=sharing', title: 'Tim Dia do Orgulho Nerd', category: 'Aioros Studios', image: imageTimOrgulho, tags: ['Unity', 'Phygital'], type: 'professional' },
    { id: 10, path: 'https://drive.google.com/file/d/1ERE4YnOgKc3QG0Asa8Li6amVI-kMwEOI/view?usp=sharing', title: 'Tim Mapa Interativo', category: 'Aioros Studios', image: imageTimMapa, tags: ['Unity', 'Phygital'], type: 'professional' },
    { id: 11, path: 'https://drive.google.com/file/d/1hZLAMKMcvmLr7XEQFE2NqvefhXRpH4c9/view?usp=sharing', title: 'Jogos Educativos Bernoulli', category: 'Aioros Studios', image: imageDiveb, tags: ['Unity', 'PC', 'Educational'], type: 'professional' },
    { id: 12, path: 'https://drive.google.com/file/d/1gY_kbKFIFmwMIyEKz9Qzw-Rt1v4YHSf4/view?usp=sharing', title: 'Tim Black Friday', category: 'Aioros Studios', image: imageTimBlackFriday, tags: ['Unity', 'Phygital'], type: 'professional' },
    { id: 13, path: 'https://drive.google.com/file/d/1idGE-0z4tB4uDBrNIU1OrG7gb7PIBz2L/view?usp=sharing', title: 'Banco do Brasil - Fonte de Ouro', category: 'Aioros Studios', image: imagefonteOuro, tags: ['Unity', 'Phygital'], type: 'professional' },
    { id: 14, path: 'https://drive.google.com/file/d/1lXTRqFogZmb2u8Hi9R2wTRbFdTwhHReL/view?usp=sharing', title: 'Aioros Café', category: 'Aioros Studios', image: imagecafeAioros, tags: ['Unity', 'Phygital'], type: 'professional' },
];

const ProjectsPage = () => {
    const texts = useTexts();
    const professionalProjects = allProjectsData.filter(p => p.type === 'professional');
    const personalProjects = allProjectsData.filter(p => p.type === 'personal');

    return (
        <>
            <Header />
            <div className="section-projectsAll">
                <div className="image-panel-projectsAll">
                    <div className="projects-bg-image">
                        <img src={imageIntroducion} alt="Background pattern" />
                    </div>
                    <div className="projects-text-content">
                        <h1 className="projects-title">{texts.Game_Projects}</h1>
                        <p className="projects-subtitle">{texts.GameText_Projects}</p>
                    </div>
                </div>

                {/* Seção Profissional */}
                <div className="header-projectsAll">
                    <h1 className="header-title-projectsAll">{texts.TitlePage_ProjectsProfessional}</h1>
                    <div className="header-divider-projectsAll"/>
                </div>
                <div className="header-link-projectsAll">
                    <a  className="text-link-projectsAll" href="https://www.aioros.com.br/#Cases" target="_blank" rel="noopener noreferrer">Projetos Aioros Studios</a>
                    <img className="icon-link-projectsAll" src={iconLink} alt="icone link" />
                </div>
                <div className="projectsAll-grid">
                    {professionalProjects.map(project => (
                        <a 
                          href={project.path} 
                          key={project.id} 
                          className="projectsAll-card" 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                            <img src={project.image} alt={project.title} className="card-image" />
                            <div className="card-content">
                                <h3 className="card-title">{project.title}</h3>
                                <p className="card-category">{project.category}</p>
                                <div className="card-tags-projectsAll">
                                    {project.tags.map(tag => <span key={tag} className="card-tag-projectsAll">{tag}</span>)}
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Seção Pessoal */}
                <div className="header-projectsAll">
                    <h1 className="header-title-projectsAll">{texts.TitlePage_ProjectsPersonal}</h1>
                    <div className="header-divider-projectsAll"/>
                </div>
                <div className="projectsAll-grid">
                    {personalProjects.map(project => (
                        <a 
                          href={project.path} 
                          key={project.id} 
                          className="projectsAll-card" 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                            <img src={project.image} alt={project.title} className="card-image" />
                            <div className="card-content">
                                <h3 className="card-title">{project.title}</h3>
                                <p className="card-category">{project.category}</p>
                                <div className="card-tags-projectsAll">
                                    {project.tags.map(tag => <span key={tag} className="card-tag-projectsAll">{tag}</span>)}
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default ProjectsPage;