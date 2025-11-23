import Layout from '@/components/Layout';
import React from 'react';

export default function CompetencesPage() {
  return (
    <Layout>
      <section className="text-center bg-nightBlueLight rounded-xl shadow-2xl p-8 md:p-12 max-w-3xl w-full">
        <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
          Mes Compétences
        </h2>
        <p className="text-lg md:text-xl text-lightBlue mb-8">
          Voici un aperçu de mes compétences techniques et de mes outils préférés.
        </p>
        <div className="text-left mt-8">
          <h3 className="text-3xl font-bold text-auroraGreen mb-4">Développement Frontend</h3>
          <ul className="list-disc list-inside text-lightBlue text-lg mb-6">
            <li>React, Next</li>
            <li>TypeScript, JavaScript</li>
            <li>HTML5, CSS3, Tailwind CSS</li>
          </ul>

          <h3 className="text-3xl font-bold text-auroraGreen mb-4">Développement Backend</h3>
          <ul className="list-disc list-inside text-lightBlue text-lg mb-6">
            <li>Node.js</li>
            <li>Bases de données (MySQL, Postgres)</li>
            <li>API REST</li>
            <li>Java, Springboot</li>
            <li>Docker</li>
            <li>C, C++</li>
            <li>Python</li>
          </ul>

          <h3 className="text-3xl font-bold text-auroraGreen mb-4">DevOps</h3>
          <ul className="list-disc list-inside text-lightBlue text-lg mb-6">
            <li>CI/CD</li>
          </ul>

          <h3 className="text-3xl font-bold text-auroraGreen mb-4">Autres</h3>
          <ul className="list-disc list-inside text-lightBlue text-lg mb-6">
            <li>Git, GitHub, GitLab, Bitbucket</li>
            <li>Déploiement</li>
            <li>Méthodologies Agile</li>
            <li>Trello</li>
            <li>Sécurité</li>
          </ul>

          <h3 className="text-3xl font-bold text-auroraGreen mb-4">Réseaux</h3>
          <ul className="list-disc list-inside text-lightBlue text-lg mb-6">
            <li>Architecture des réseaux</li>
            <li>Routeurs Cisco</li>
            <li>SDN</li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}
