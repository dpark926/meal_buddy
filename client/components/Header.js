import Link from "next/link";

const Header = () => {
  return (
    <div>
      <div>Home</div>
      <div>
        <button>
          <Link href="/login">
            <a>Login</a>
          </Link>
        </button>
        <button>
          <Link href="/register">
            <a>Register</a>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Header;
