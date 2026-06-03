import { useTranslation } from 'react-i18next';
import fotoPerfil from '../../assets/FotoPerfilcomp.png';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <div className="hero-visual">
        <div className="avatar-ring">
          <img src={fotoPerfil} alt="Joaquin Hevia" className="avatar-inner" />
          <div />
        </div>
      </div>

      <div className="hero-content">
        <h1><span>Joaquín Ramiro</span><br />Hevia</h1>
        <p className="hero-sub">{t('hero.subtitle')}</p>
        <p className="hero-desc">
          {t('hero.descriptionPart1')}
          <strong>{t('hero.descriptionStrong')}</strong>
        </p>
      </div>
    </section>
  );
}
