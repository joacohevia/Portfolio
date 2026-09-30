import { useTranslation } from 'react-i18next';
import fotoPerfil from '../../assets/FotoPerfilcomp.png';

export default function SobreMi() {
  const { t } = useTranslation();

  return (
    <section id="sobre-mi" className="about-section">
      <div className="about-grid">
        <div className="about-photo-wrapper">
          <div className="about-photo">
            <img src={fotoPerfil} alt="Joaquín Hevia" />
            <div className="about-gradient-overlay" />
          </div>
        </div>
        <div className="about-content">
          <h3>{t('sobreMi.title')}</h3>
          <p>
            {t('sobreMi.presentacion.p1')}
            <strong>{t('sobreMi.presentacion.strong')}</strong>
            {t('sobreMi.presentacion.p2')}
          </p>
          <p>
            {t('sobreMi.perfil.text')}
            <strong>{t('sobreMi.perfil.strong')}</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
