import { useTranslation } from 'react-i18next'
import { ArrowUpRight } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'
import Reveal from '../ui/Reveal'
import { socials, galleryImages } from '../../data/socials'

export default function Instagram() {
  const { t } = useTranslation()

  return (
    <section id="gallery" className="scroll-mt-16 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle
          align="start"
          label={t('instagram.label')}
          title={`${t('instagram.title1')} ${t('instagram.title2')}`}
          className="mb-4"
        />
        <p className="mb-8 max-w-xl text-white/60">{t('instagram.text')}</p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {galleryImages.map((src, i) => (
            <Reveal key={src} delay={i * 100}>
              <img
                src={src}
                alt=""
                loading="lazy"
                className="aspect-square w-full rounded-lg bg-card object-cover"
              />
            </Reveal>
          ))}
        </div>

        <a
          href={socials.instagram}
          target="_blank"
          rel="noreferrer"
          className="mt-6 flex items-center justify-end gap-1 text-xs font-semibold uppercase text-accent hover:underline"
        >
          {t('instagram.cta')}
          <ArrowUpRight size={14} className="rtl:-scale-x-100" />
        </a>
      </div>
    </section>
  )
}