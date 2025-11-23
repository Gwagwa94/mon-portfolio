export enum Category {
  school = "Projets scolaires",
  personal = "Projets personnels",
  volunteering = "Bénévolat",
}

export default interface Project {
  name: string;
  description: string;
  link: {
    ref: string;
    title: string;
  } | null;
  category: Category | undefined;
}