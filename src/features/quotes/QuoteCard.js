import React from "react";
import { removeQuote, upvoteQuote, downvoteQuote } from "./quotesSlice";
import {useDispatch} from "react-redux"
function QuoteCard({quote}) {

const dispatch = useDispatch()  
  return (
    <div>
      <div className="card card-inverse card-success card-primary mb-3 text-center">
        <div className="card-block">
          <blockquote className="card-blockquote">
            <p>{quote.content}</p>
            <footer>
              - author{" "}
              <cite title="Source Title">{quote.author}</cite>
            </footer>
          </blockquote>
        </div>
        <div className="float-right">
          <div
            className="btn-group btn-group-sm"
            role="group"
            aria-label="Basic example"
          >
            <button type="button" onClick={()=>dispatch(upvoteQuote(quote.id))} className="btn btn-primary">
              Upvote
            </button>
            <button type="button" onClick={()=>dispatch(downvoteQuote(quote.id))} className="btn btn-secondary">
              Downvote
            </button>
            <button type="button" onClick={()=>dispatch(removeQuote(quote.id))} className="btn btn-danger">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div>Votes: {quote.votes}</div>
        </div>
      </div>
    </div>
  );
}

export default QuoteCard;
