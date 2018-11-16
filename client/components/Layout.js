import Header2 from "./Header2";
import ShoppingList from "../components/ShoppingList";

const Layout = props => {
  return (
    <div>
      <Header2 />
      <div className="flex">
        <div style={{ flexGrow: 1 }}>
          <ShoppingList />
        </div>
        <div style={{ flexGrow: 4 }}>{props.children}</div>
      </div>
    </div>
  );
};

export default Layout;
