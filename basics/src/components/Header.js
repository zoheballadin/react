function Header({title}) {
  return (
    <>
      <div style={{ backgroundColor: "yellow", padding: "5px" }}>
        <h4 style={{ textAlign: "center" }}>
          Resize the browser window to see the responsive effect.
        </h4>
      </div>

      <div className="header">
        <h1>{title}</h1>
        <p>
          With a <b>flexible</b> layout.
        </p>
      </div>
    </>
  );
}

export default Header
