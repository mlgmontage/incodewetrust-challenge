import styled from "styled-components";

export const Container = styled.div`
  max-width: 960px ;
  margin-inline: auto;
  padding: 1rem;
`

export const Card = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  border: 1px solid var(--brand-color);
  border-radius: var(--rounded);
`

export const Banner = styled.h1`
  text-align: center;
  display: flex;
  height: 300px;
  align-items: center;
  justify-content: center;
`

export const Button = styled.button`
  color: var(--brand-color);

  font-size: 1rem;
  font-weight: 700;
  padding: 1rem 1.5rem;

  border: 1px solid var(--light-color);
  border-radius: var(--rounded);
  background-color: transparent;
  cursor: pointer;
`

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-block: 1rem;
  gap: .5rem;
`

export const Heading = styled.h1`
  font-family: var(--brand-font);
  color: var(--brand-color);
  text-shadow: 1px 1px var(--dark-color);
  
  margin-block: 3rem;
`

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`