import styled from "styled-components";

export const Container = styled.div`
  width: 960px ;
  margin-inline: auto;
`

export const Card = styled.div`
  padding: 1rem;
  border: 1px solid var(--brand-color);
`

export const Button = styled.button`
  font-size: inherit;
  padding: 1rem 1.5rem;

  border: 1px solid var(--light-color);
  background-color: transparent;
  cursor: pointer;
`

export const Heading = styled.h1`
  font-family: var(--brand-font);
  color: var(--brand-color);
  text-shadow: 1px 1px var(--dark-color);
`