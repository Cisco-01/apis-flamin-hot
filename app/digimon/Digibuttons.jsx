function Digibuttons({ nextURL, prevURL, setDigimons, setUrl }) {
  return (
    <div className="btn-group flex hover:bg-transparent">
      {prevURL && (
        <button
          className="bg-top w-24
          hover:bg-[url('../public/images/flame.png')] hover:text-transparent transition-all delay-75"
          onClick={() => {
            setDigimons([]);
            setUrl(prevURL);
          }}
        >
          Previous
        </button>
      )}

      {nextURL && (
        <button
          className="bg-top w-24
          hover:bg-[url('../public/images/flame.png')] hover:text-transparent transition-all delay-75"
          onClick={() => {
            setDigimons([]);
            setUrl(nextURL);
          }}
        >
          Next
        </button>
      )}
    </div>
  );
}

export default Digibuttons;
