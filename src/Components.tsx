import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
`;

export const ItemsList = styled.ul`
  display: flex;
  flex-direction: column;
  width: auto;
  padding: 0;
  max-height: calc(100vh - 12rem);
  overflow-y: scroll;
`;

export const BoldColoredText = styled.span`
  font-size: 1rem;
  font-family: ArunaRegular;
  color: var(--primary-fg-color);
`;

export const ItemRowContainer = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  border-bottom: solid 1px rgba(0, 0, 0, 0.5);
  flex-direction: column;
`;

export const ItemRow = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  i {
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.7);
  }

  div {
    display: flex;
    justify-content: space-between;
  }
`;

export const ActionButtons = styled.div`
  button {
    background: transparent;
    font-size: 1.25rem;
    padding: 0.25rem;
  }
`;

export const LargeButton = styled.button`
  padding: 1rem 0.5rem;
  margin: 0.5rem;
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: ArunaRegular;
  width: 100%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
`;

export const AddItemButton = styled.button`
  padding: 0.25rem;
  margin: 0.5rem;
  background: transparent;
  border: solid 2px var(--primary-fg-color);
  border-radius: 16px;
  font-size: 1.5rem;
  font-family: ArunaRegular;
  color: var(--primary-fg-color);
`;

export const PriceTotalText = styled.b`
  font-size: 2rem;
  font-family: ArunaRegular;
  color: var(--primary-fg-color);

  span {
    font-size: 0.75rem;
    margin-left: 0.25rem;
  }
`;

export const ItemsTotalText = styled.b`
  font-size: 2rem;
  font-family: ArunaRegular;
  color: var(--primary-white-color);

  span {
    font-size: 0.75rem;
    margin-left: 0.5rem;
  }
`;
