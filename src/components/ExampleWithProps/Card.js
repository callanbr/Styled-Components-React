import React from 'react';
import styled from 'styled-components';

export const Card = styled.div`
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0,0,0,0.24);
  width: 600px;
  transition: color 0.3s ease, background-color 0.3s ease;
  background: ${props => props.theme === 'light' ? '#fefefe' : '#454545'};
`;

export const CardFooter = styled.div`
  text-align: ${props => props.center ? "center" : "left"};
  padding: 10px;
`;

export function CardImage({ img }) {
  return (
    <img className="card-img" src={img} alt="Evolve GTR" height="350" width="600" />
  );
}
