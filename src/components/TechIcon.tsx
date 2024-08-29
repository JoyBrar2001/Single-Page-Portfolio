import React from 'react';

const TechIcon = ({ component: Component }: { component: React.ElementType }) => {
  return (
    <Component className="size-10" />
  );
}

export default TechIcon;