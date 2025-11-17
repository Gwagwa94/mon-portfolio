import Layout from '@/components/Layout';
import React from 'react';

export default function ContactPage() {
  return (
    <Layout>
      <section className="text-center bg-deepViolet rounded-xl shadow-2xl p-8 md:p-12 max-w-3xl w-full">
        <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
          Contacte-moi
        </h2>
        <p className="text-lg md:text-xl text-lightBlue mb-8">
          N&apos;hésite pas à me contacter pour toute question ou opportunité.
        </p>
        <div className="text-left max-w-md mx-auto">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lightBlue text-lg font-medium mb-2">Nom</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 rounded-md bg-nightBlueLight text-white border border-nightBlue focus:outline-none focus:ring-2 focus:ring-coralMain"
                placeholder="Ton nom"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lightBlue text-lg font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 rounded-md bg-nightBlueLight text-white border border-nightBlue focus:outline-none focus:ring-2 focus:ring-coralMain"
                placeholder="Ton email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lightBlue text-lg font-medium mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full p-3 rounded-md bg-nightBlueLight text-white border border-nightBlue focus:outline-none focus:ring-2 focus:ring-coralMain"
                placeholder="Ton message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-coralMain text-nightBlue font-bold py-3 px-8 rounded-full shadow-lg hover:bg-coralHover transition-all duration-300 transform hover:scale-105"
            >
              Envoyer
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
}
