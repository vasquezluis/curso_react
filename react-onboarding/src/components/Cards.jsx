function Cards() {
  return (
    <>
      {["sidebar", "topbar", "userInput", "messages", "userMenu"].map(
        (item, index) => (
          <div
            key={index}
            id={`step-${index + 1}`}
            style={{
              border: "1px solid white",
              width: "100px",
              height: "100px",
              background: "#0c1d2b",
              borderRadius: "8px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {item}
          </div>
        )
      )}
    </>
  );
}

export default Cards;
