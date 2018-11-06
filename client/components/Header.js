import Link from "next/link";
import styled from "styled-components";

const Button = styled.button`
  background-color: #00c6ff; /* Green */
  border: none;
  border-radius: 5px;
  color: white;
  padding: 0 10px;
  height: 30px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`;

const Home = styled.div`
  flex-grow: 1;
`;

const Login = styled.a`
  color: white;
`;

const Register = styled.a`
  color: #333;
`;

const Header = () => {
  return (
    <div className="flex p2" style={{ borderBottom: "1px solid #eaeaea" }}>
      <Home className="h3">[ HOME ]</Home>
      <div>
        <Link href="/register">
          <Register className="h4">REGISTER</Register>
        </Link>
        <Button>
          <Link href="/login">
            <Login className="h4">LOGIN</Login>
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Header;
