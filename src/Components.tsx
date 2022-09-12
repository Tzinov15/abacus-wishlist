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

  div {
    display: flex;
    justify-content: space-between;
  }
`;

export const ActionButtons = styled.div``;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
`;

export const AddItemButton = styled.button``;
