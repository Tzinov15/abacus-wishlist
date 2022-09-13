import { useEffect, useState } from "react";
import "./App.css";
import {
  ActionButtons,
  AddItemButton,
  BoldColoredText,
  Container,
  Footer,
  Form,
  ItemRow,
  ItemRowContainer,
  ItemsList,
  ItemsTotalText,
  LargeButton,
  PriceTotalText,
} from "./Components";

interface Item {
  name: string;
  reason: string;
  price: number;
}

function App() {
  const [items, setItems] = useState<Item[]>([]);

  const [itemToEdit, setItemToEdit] = useState<Item>();

  const [valueToBePasted, setValueToBePasted] = useState<string>();

  const [page, setPage] = useState<"list" | "add" | "edit">("list");

  useEffect(() => {
    const localStorageItems = JSON.parse(
      localStorage.getItem("ABACUS_WISHLIST_ITEMS") || "[]"
    ) as Item[];
    setItems(localStorageItems);
  }, []);

  const addItem = (item: Item) => {
    const newItems = [...items, item];
    setItems((items) => [...items, item]);
    localStorage.setItem("ABACUS_WISHLIST_ITEMS", JSON.stringify(newItems));
  };

  const updateItem = (name: string, item: Item) => {
    deleteItem(name);
    addItem(item);
  };

  const editItem = (item: Item) => {
    setPage("edit");
    setItemToEdit(item);
  };

  const deleteItem = (name: string) => {
    console.log("deleteItem", name);
    const newItems = [...items];
    const itemToDelete = newItems.find((item) => item.name === name);
    console.log({ itemToDelete });
    if (!itemToDelete) return;
    const itemIndexToDelete = newItems.indexOf(itemToDelete);
    newItems.splice(itemIndexToDelete, 1);
    setItems(newItems);
    localStorage.setItem("ABACUS_WISHLIST_ITEMS", JSON.stringify(newItems));
  };

  if (page === "list") {
    return (
      <Container>
        <PriceTotalText>Impulse Conquer List</PriceTotalText>
        <ItemsList>
          {items.map((item) => {
            return (
              <ItemRowContainer key={item.name}>
                <ItemRow key={item.name}>
                  <p>{item.name}</p>
                  <BoldColoredText>${item.price.toLocaleString()}</BoldColoredText>
                </ItemRow>
                <ItemRow>
                  <i>{item.reason}</i>
                  <ActionButtons>
                    <button onClick={() => deleteItem(item.name)}> 🗑</button>
                    <button onClick={() => editItem(item)}> ✏️</button>
                  </ActionButtons>
                </ItemRow>
              </ItemRowContainer>
            );
          })}
        </ItemsList>
        <AddItemButton
          onClick={() => {
            setPage("add");
          }}
        >
          add item
        </AddItemButton>
        <Footer>
          <ItemsTotalText>
            {items.length} <span>items resisted</span>{" "}
          </ItemsTotalText>
          <PriceTotalText>
            $
            {items
              .map((item) => item.price)
              .reduce((acc, curr) => acc + curr, 0)
              .toLocaleString()}
            <span>saved</span>
          </PriceTotalText>
        </Footer>
      </Container>
    );
  }

  if (page === "add") {
    return (
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          const data = new FormData(event.target as HTMLFormElement);
          const name = String(data.get("name") || "");
          const price = Number(data.get("price") || "");
          const reason = String(data.get("reason") || "");

          console.log({ event });
          if (items.some((item) => item.name === name)) {
            alert("Such an item already exists");
            return;
          }
          addItem({ name, price, reason });
          setPage("list");
        }}
      >
        <label htmlFor="name">name</label>
        <input name="name" />
        <label htmlFor="price">price</label>
        <input name="price" type="number" />
        <label htmlFor="reason">reason</label>
        <textarea name="reason" />
        <LargeButton>add item</LargeButton>
        <LargeButton
          type="button"
          onClick={() => {
            setPage("list");
          }}
        >
          cancel
        </LargeButton>
        <LargeButton
          type="button"
          onClick={() => {
            const jsonString = JSON.stringify(items);
            window.navigator.clipboard.writeText(jsonString);
          }}
        >
          export all items to json in clipboard
        </LargeButton>
        <form>
          <textarea
            value={valueToBePasted}
            onChange={(e) => setValueToBePasted(e.currentTarget.value)}
          ></textarea>
          <LargeButton
            type="button"
            onClick={() => {
              const enteredItems = JSON.parse(valueToBePasted || "");
              setItems(enteredItems);
              localStorage.setItem("ABACUS_WISHLIST_ITEMS", JSON.stringify(enteredItems));
            }}
          >
            import items from above text area
          </LargeButton>
        </form>
      </Form>
    );
  }

  if (page === "edit") {
    return (
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          const data = new FormData(event.target as HTMLFormElement);
          const name = String(data.get("name") || "");
          const price = Number(data.get("price") || "");
          const reason = String(data.get("reason") || "");

          console.log({ event });
          updateItem(name, { name, price, reason });
          setPage("list");
        }}
      >
        <label htmlFor="name">name</label>
        <input defaultValue={itemToEdit?.name} name="name" />
        <label htmlFor="price">price</label>
        <input defaultValue={itemToEdit?.price} name="price" type="number" />
        <label htmlFor="reason">reason</label>
        <textarea defaultValue={itemToEdit?.reason} name="reason" />
        <button>update item</button>
        <button
          type="button"
          onClick={() => {
            setPage("list");
          }}
        >
          cancel
        </button>
      </Form>
    );
  }

  return null;
}

export default App;
