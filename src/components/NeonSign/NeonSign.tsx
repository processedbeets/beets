import React from 'react';

type NeonSignTypes = {
  title: string;
  children?: React.ReactNode;
};

const NeonSign = ({ title, children }: NeonSignTypes) => {
  return (
    <>
      <h1 style={{ animationDelay: `${(Math.random() * 1000).toString()}ms` }}>{title}</h1>
      {children}
    </>
  );
};

export default NeonSign;
