import Layout from '@/components/Layout';
import React from 'react';
import CtaButton from "@/components/CtaButton";

class Project {
  name: string = "Projet alpha";
  description: string = "";
  link: {
    ref: string;
    title: string;
  } | null = null;
  category: Category | undefined;
}

enum Category {
  volunteering = "Bénévolat",
  school = "Projets scolaires",
  personal = "Projets personnels",
}

export default function ProjetsPage() {
  const projects: Project[] = [{
      name: "Marchés de Noël",
      description: "J'aide chaque année à l'organisation et au bon déroulement du marché de Noël de mon ancien collège.",
      link: {
        ref: "https://collegepadrepio.fr",
        title: "Collège Saint Padre Pio"
      },
      category: Category.volunteering
    },
    {
      name: "PIVE Espaces Verts",
      description: "J'ai participé à l'entretien et à l'amélioration des espaces verts de Polytech Nancy. Nous avons par exemple organisé des collectes des déchets et construit des hôtels à insectes, participant au maintien d'un écosystème sain autour de l'école.",
      link: null,
      category: Category.volunteering
    },
    {
      name: "Terrain Rouge",
      description: "En groupe avec 3 camarades, nous avons développé une application web permettant la création de " +
        "playlists collaborative avec votes pour des événements associatifs. " +
        "Technologies utilisées: HTML, JS, CSS, Java, Postgres, OAuth2.0",
      link: null,
      category: Category.school
    },
    {
      name: "ChronoVaccin",
      description: "En binôme, nous avons développé une application web avec Angular, Spring et Postgres permettant la réservation de créneaux dans des centres de vaccination.",
      link: {
        ref: "https://github.com/Gwagwa94/ChronoVaccin",
        title: "Voir sur GitHub"
      },
      category: Category.school
    },
    {
      name: "VotooVeto",
      description: "Projet personnel pour choisir le restaurant par vote avec mes collègues, durant mon stage à Madrid.",
      link: {
        ref: "https://votooveto.vercel.app",
        title: "Voir sur Vercel (DB actuellement hors-ligne)"
      },
      category: Category.personal
    }]

  return (
    <Layout>
      <section className="text-center bg-nightBlueLight rounded-xl shadow-2xl p-8 md:p-12 max-w-3xl w-full ">
        <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
          Mes Projets
        </h2>
        <p className="text-lg md:text-xl text-lightBlue mb-8">
          Découvrez mes projets.
          Chaque projet est une opportunité d&apos;apprendre et de créer.
        </p>
        {Object.values(Category).map(cat =>
          <div key={cat} className="text-left mt-8">
            <h3 className="text-3xl font-bold text-white mb-4">{cat}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              {projects.filter(proj => proj.category === cat).map(proj =>
                <div key={proj.name} className="bg-nightBlue p-6 rounded-lg shadow-md h-full flex flex-col justify-between text-center">
                  <h3 className="text-2xl font-bold text-auroraGreen mb-2">{proj.name}</h3>
                  <p className="text-lightBlue text-base text-justify">
                    {proj.description}
                  </p>
                  {proj.link && <CtaButton target="_blank" href={proj.link.ref}>{proj.link.title}</CtaButton>}
                </div>
              )}
            </div>
          </div>
        )}
      </section>
    </Layout>
  );
}
