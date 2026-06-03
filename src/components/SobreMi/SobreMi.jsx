import { useTranslation } from 'react-i18next';

export default function SobreMi() {
  const { t } = useTranslation();

  return (
    <section id="sobre-mi" className="section">
      <div className="section-label">{t('sobreMi.label')}</div>
      <h2 className="section-title">{t('sobreMi.title')}</h2>

      <div className="about-grid">
        <div className="about-card wide">
          <h3>{t('sobreMi.cards.presentacion.title')}</h3>
          <p>
            {t('sobreMi.cards.presentacion.textPart1')}
            <strong>{t('sobreMi.cards.presentacion.textStrong')}</strong>
            {t('sobreMi.cards.presentacion.textPart2')}
          </p>
        </div>

        <div className="about-card">
          <h3>{t('sobreMi.cards.perfil.title')}</h3>
          <p>
            {t('sobreMi.cards.perfil.text')}
          </p>
        </div>
      </div>
    </section>
  );
}
