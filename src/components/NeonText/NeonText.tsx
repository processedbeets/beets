import React from 'react';

type NeonTextTypes = {
  title: string;
};

const NeonText = ({ title }: NeonTextTypes) => {
  const delay = (Math.random() * 1000).toString();

  return <h1 style={{ animationDelay: `${delay}ms` }}>{title}</h1>;
};

export default NeonText;
