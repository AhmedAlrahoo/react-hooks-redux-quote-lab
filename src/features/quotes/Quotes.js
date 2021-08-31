import React from "react";
import QuoteCard from "./QuoteCard";
import { useSelector, useDispatch } from "react-redux";

function Quotes() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state);
  return (
    <div>
      <hr />
      <div className="row justify-content-center">
        <h2>Quotes</h2>
      </div>
      <hr />
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            {state.quotes.map((quote) => (
              <QuoteCard
                quote={quote}
                dispatch={dispatch}
                // upvoteQuote={upvoteQuote}
                // downvoteQuote={downvoteQuote}
                // removeQuote={removeQuote}
              ></QuoteCard>
            ))}
            {/*
              TODO:

              Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
              */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quotes;
