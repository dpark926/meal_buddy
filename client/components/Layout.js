import Header2 from "./Header2";
import ShoppingList from "../components/ShoppingList";

const Layout = props => {
  return (
    <div>
      <Header2 />
      <div className="flex">
        <ShoppingList />
        <div style={{ flexGrow: 5 }}>{props.children}</div>
      </div>
    </div>
  );
};

export default Layout;
