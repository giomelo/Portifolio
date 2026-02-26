import './Footer.css';

import useTexts from '../../hooks/useTexts';
import ButtonSocial from '../buttons/socialFooter/ButtonSocialFooter';

import iconGithub from '../../assets/icon/footer/github-footer.svg';
import iconItchio from '../../assets/icon/footer/itchio-footer.svg';
import iconLinkedin from '../../assets/icon/footer/linkedin-footer.svg';

const Footer = () => {
    const texts = useTexts();

    return (
        <section id="footer">
            <div className="panel-footer">
                <div className="header-footer">
                    <div>
                        <p className="title-footer">{texts.TitlePage_Footer}</p>
                        <p className="subtitle-footer">{texts.SubtitlePage_Footer}</p>
                    </div>
                    <div>
                        <p className="text-footer">{texts.SocialPage_Footer}</p>
                            <div className="social-footer">
                                <ButtonSocial height={"38px"} width={"38px"} icon={iconLinkedin} alt="Botão Linkedin" href="https://www.linkedin.com/in/giovana-melo-a3771a200/"/>
                                <ButtonSocial height={"38px"} width={"38px"} icon={iconGithub} alt="Botão github" href="https://github.com/giomelo"/>
                                <ButtonSocial height={"42px"} width={"42px"} icon={iconItchio} alt="Botão Itchi.io" href="https://giovana-melo.itch.io"/>
                            </div>
                    </div>
                </div>
                <div className="divider-footer"/>
                <p className="created-footer">{texts.Created_Footer} <a className="created-link-footer" href="https://matheusfelipe20.github.io/portfolio/">MatheusFelipe20</a></p>
            </div>
        </section>
    );
};

export default Footer;