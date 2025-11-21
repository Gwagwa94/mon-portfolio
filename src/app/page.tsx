import Layout from '@/components/Layout';
import CtaButton from '@/components/CtaButton'; // Import the new CtaButton component
import React from 'react';

export default function HomePage() {
  return (
    <Layout>
      <section className="text-center bg-nightBlueLight rounded-xl shadow-2xl p-8 md:p-12 max-w-3xl w-full">
        <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
          Bienvenue dans mon portfolio
        </h2>
        <p className="text-lg md:text-xl text-lightBlue mb-8">
          Développeur Fullstack passionné par la création d&apos;expériences web uniques.
          Explorez mes projets et découvrez mes compétences.
        </p>
        {/* Using the new CtaButton component */}
        <CtaButton href="/projects">
          Découvrir mes projets
        </CtaButton>
      </section>
    </Layout>
  );
}
