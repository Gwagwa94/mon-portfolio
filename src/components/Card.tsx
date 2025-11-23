import CtaButton from "@/components/CtaButton";
import React from "react";
import Project from "@/types/Project";

export default function Card(props: { proj: Project }) {
  return <div className="bg-nightBlue p-6 rounded-lg shadow-md h-auto flex flex-col justify-top text-center">
    <h3 className="text-2xl font-bold text-auroraGreen mb-2">{props.proj.name}</h3>
    <p className="text-lightBlue text-base text-justify">
      {props.proj.description}
    </p>
    {props.proj.link && <CtaButton target="_blank" href={props.proj.link.ref}>{props.proj.link.title}</CtaButton>}
  </div>;
}