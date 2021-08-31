import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { addQuote } from "./quotesSlice";
import {useDispatch} from "react-redux"
function QuoteForm() {
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    content: 'test content',
    author: 'test author',
    votes: 0
    // set up a controlled form with internal state
    // look at the form to determine what keys need to go here
  });

  function handleChange(event) {
    // Handle Updating Component State
    if(event.target.name === 'content'){
      setFormData(prevState =>({
        ...prevState,
        content: event.target.value
      }))
    }
    else if (event.target.name === 'author'){
      setFormData(prevState =>({
        ...prevState,
        author: event.target.value
      }))}
    }  

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(addQuote({...formData,id:uuid()}))
    setFormData({content: '',author:'',votes:0})
    // Handle Form Submit event default
    // Create quote object from state
    // Pass quote object to action creator
    // Update component state to return to default state
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
          <div className="panel panel-default">
            <div className="panel-body">
              <form className="form-horizontal" onSubmit={(event)=>handleSubmit(event)}>
                <div className="form-group">
                  <label htmlFor="content" className="col-md-4 control-label">
                    Quote
                  </label>
                  <div className="col-md-5">
                    <textarea
                      name="content"
                      onChange={(event)=>handleChange(event)}
                      className="form-control"
                      id="content"
                      value={formData.content}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="author" className="col-md-4 control-label">
                    Author
                  </label>
                  <div className="col-md-5">
                    <input
                      name="author"
                      onChange={(event)=>handleChange(event)}
                      className="form-control"
                      type="text"
                      id="author"
                      value={formData.author}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-md-6 col-md-offset-4">
                    <button type="submit" className="btn btn-default">
                      Add
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuoteForm;
