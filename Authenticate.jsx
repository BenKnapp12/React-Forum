export default function Authenticate({ token, error }) {
  async function handleAuth() {
    if (!token) {
      alert("Please sign up first.");
      return;
    }

    try {
      const res = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/authenticate",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const data = await res.json();
      alert(data.message);
    } catch {
      alert("Authentication failed.");
    }
  }

  return (
    <div className="auth">
      <button onClick={handleAuth}>Authenticate</button>
      {error && <p className="error">{error}</p>}
    </div>
  );
}
