import React from 'react';

interface HeaderProps {
  title: string; // Se não for obrigatório, fazer Header?: se não, fazer Header: - se for obrigatória, não colocar ? no nome do parâmetro. 
}

const Header: React.FC<HeaderProps> = (props) => { //todo componente jsx e tsx precisam iniciar com letra maiúscula para não dar conflito com as tags HTML.
  return (
    <header>
      <h1>{props.title}</h1>
    </header>
  );
}

export default Header;