import { Link } from "react-router";

export default function ErrorPage() {
  const container = {
    height: "100vh",
    width: "100%",
    backgroundColor:"",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    flexDirection: "column",
  };

  const errorNumber = {
    fontSize: "80px",
    fontWeight: "bold",
    color: "red",
    marginBottom: "10px",
  };

  const message = {
    fontSize: "22px",
    marginBottom: "10px",
    color: "#ccc",
  };

  const button = {
    marginTop: "20px",
    backgroundColor: "#3b82f6",
    padding: "10px 20px",
    borderRadius: "8px",
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
    display: "inline-block",
  };

  return (
    <div style={container}>
      <div style={errorNumber}>404</div>
      <p style={message}>Page Not Found</p>

      <Link to="/" style={button}>
        Go Home
      </Link>
    </div>
  );
}
