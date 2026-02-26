function Error({ error }) {
  return (
    <p className="error">
      <span>💥</span> {error}Please try again later.
    </p>
  );
}

export default Error;
