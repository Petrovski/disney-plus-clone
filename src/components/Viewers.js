import React from 'react';
import styled from 'styled-components';

function Viewers() {
  const viewers = [
    {
      src: 'images/viewers-disney.png',
      alt: 'Disney Viewer Image',
    },
    {
      src: '/images/viewers-pixar.png',
      alt: 'Pixar Viewer Image',
    },
    {
      src: '/images/viewers-marvel.png',
      alt: 'Marvel Viewer Image',
    },
    {
      src: '/images/viewers-starwars.png',
      alt: 'Star Wars Viewer Image',
    },
    {
      src: '/images/viewers-national.png',
      alt: 'National Geographic Viewer Image',
    },
  ];

  return (
    <Container>
      {viewers.map(viewer => {
        return (
          <Wrap>
            <img src={viewer.src} alt={viewer.alt} />
          </Wrap>
        );
      })}
    </Container>
  );
}

export default Viewers;

const Container = styled.div`
  margin-top: 30px;
  padding: 30px 0px 26px;
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
`;

const Wrap = styled.div`
  border-radius: 10px;
  cursor: pointer;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 1);
  }
`;
