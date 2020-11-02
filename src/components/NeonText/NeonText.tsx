import React, { useRef } from 'react';

type NeonTextTypes = {
  title: string;
};

const NeonText = ({ title }: NeonTextTypes) => {
  const delay = useRef((Math.random() * 1000).toString());

  return <h1 style={{ animationDelay: `${delay.current}ms` }}>{title}</h1>;
};

export default NeonText;
