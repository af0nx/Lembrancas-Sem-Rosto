import React from 'react';
import { useTranslation } from 'react-i18next';

const Newsletter = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="bg-gray-50 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
          <div className="max-w-xl text-3xl font-bold tracking-tight text-zinc-800 sm:text-4xl lg:col-span-7">
            <h2 className="inline sm:block lg:inline xl:block">{t('headline')}</h2>
            <p className="inline sm:block lg:inline xl:block ">{t('subheadline')}</p>
          </div>
          <form className="w-full max-w-md lg:col-span-5 lg:pt-2">
            <div className="flex gap-x-4">
              <label htmlFor="email-address" className="sr-only">{t('emailPlaceholder')}</label>
              <input id="email-address" name="email" type="email" autoComplete="email" required className="min-w-0 flex-auto rounded-md border-0 bg-black/10 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-black placeholder:text-black/75 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6" placeholder={t('emailPlaceholder')}></input>
              <button type="submit" className="flex-none rounded-md bg-gray-300 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-zinc-800 hover:text-zinc-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">{t('subscribeButton')}</button>
            </div>
            <p className="mt-4 text-sm leading-6 text-black">{t('privacyNotice')} <a href="/termoscondicoes" className="font-semibold text-black hover:text-zinc-500">{t('terms')}</a>.</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;