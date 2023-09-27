import React from 'react';

function Buttons({nextURL, prevURL, setPokeData, setUrl}) {
  return (
    <div className="btn-group flex hover:bg-transparent">
      {prevURL && (
        <button
        className="bg-top w-24
        hover:bg-[url('../public/images/flame.png')] hover:text-transparent transition-all delay-75"
          onClick={() => {
            setPokeData([]);
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
            setPokeData([]);
            setUrl(nextURL);
          }}
        >
          Next
        </button>
      )}
    </div>
  );
}

export default Buttons;
