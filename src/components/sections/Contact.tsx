import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslation } from 'react-i18next'
import SectionTitle from '../ui/SectionTitle'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'
import { contactSchema, type ContactForm } from '../../lib/schemas'
import { cn } from '../../lib/utils'

const fieldClass =
  'w-full rounded-md border border-white/10 bg-card px-4 py-3 text-sm outline-none transition placeholder:text-white/40 focus:border-accent'

export default function Contact() {
  const { t } = useTranslation()
  const [sent, setSent] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactForm>({ resolver: zodResolver(contactSchema) })

  const err = (key?: string) => (key ? t(`contact.errors.${key}`) : null)

  const onSubmit = async (data: ContactForm) => {
    // TODO: ربط EmailJS أو Formspree بعد موافقة العميلة
    console.log(data)
    await new Promise((r) => setTimeout(r, 1000))
    setSent(true)
    reset()
  }

  return (
    <section id="contact" className="scroll-mt-16 py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2">
        <Reveal>
          <SectionTitle
            align="start"
            label={t('contact.label')}
            title={t('contact.title')}
            className="mb-6"
          />

          <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <input
                  {...register('firstName')}
                  placeholder={`${t('contact.firstName')}*`}
                  className={cn(fieldClass, errors.firstName && 'border-red-500')}
                />
                <p className="mt-1 text-xs text-red-400">
                  {err(errors.firstName?.message)}
                </p>
              </div>
              <div>
                <input
                  {...register('lastName')}
                  placeholder={`${t('contact.lastName')}*`}
                  className={cn(fieldClass, errors.lastName && 'border-red-500')}
                />
                <p className="mt-1 text-xs text-red-400">
                  {err(errors.lastName?.message)}
                </p>
              </div>
            </div>

            <div>
              <input
                type="email"
                dir="ltr"
                {...register('email')}
                placeholder={`${t('contact.email')}*`}
                className={cn(fieldClass, errors.email && 'border-red-500')}
              />
              <p className="mt-1 text-xs text-red-400">{err(errors.email?.message)}</p>
            </div>

            <div>
              <input
                type="tel"
                dir="ltr"
                {...register('phone')}
                placeholder={`${t('contact.phone')}*`}
                className={cn(fieldClass, errors.phone && 'border-red-500')}
              />
              <p className="mt-1 text-xs text-red-400">{err(errors.phone?.message)}</p>
            </div>

            <textarea
              rows={4}
              {...register('message')}
              placeholder={t('contact.message')}
              className={fieldClass}
            />

            <label className="flex cursor-pointer items-center gap-2 text-xs font-semibold uppercase">
              <input
                type="checkbox"
                {...register('trial')}
                className="h-4 w-4 accent-accent"
              />
              {t('contact.trial')}
            </label>

            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? t('contact.sending') : t('contact.send')}
            </Button>

            {sent && (
              <p role="status" className="text-sm text-accent">
                {t('contact.success')}
              </p>
            )}
          </form>
        </Reveal>

        <Reveal delay={150}>
          <img
            src="/images/about/contact.jpg"
            alt=""
            loading="lazy"
            className="aspect-4/5 w-full rounded-lg bg-card object-cover"
          />
        </Reveal>
      </div>
    </section>
  )
}