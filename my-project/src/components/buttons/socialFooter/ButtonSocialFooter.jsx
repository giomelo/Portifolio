import './ButtonSocialFooter.css';

const ButtonSocial = ({ icon, alt, href, width, height }) => (
  <a className="btn-social-footer" href={href} target="_blank" rel="noopener noreferrer">
    <img width={width} height={height} src={icon} alt={alt} />
  </a>
);

export default ButtonSocial;