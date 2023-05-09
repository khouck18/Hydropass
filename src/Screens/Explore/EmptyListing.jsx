const EmptyListing = (props) => {
  return (
    <div
      style={{
        height: "600px",
        width: "100",
        display: "flex",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}
    >
      <h1>No exact matches</h1>
      <p>
        Try changing or removing some of your filters or adjusting your search
        area.
      </p>
    </div>
  );
};

export default EmptyListing;
