import React, { useState, useRef } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Update = () => {
  const { id } = useParams();

  let title = useRef();
  let content = useRef();

  const onSubmit = () => {
    axios
      .put(`https://glacial-temple-96682.herokuapp.com/test/${id}/`, {
        title: title.current.value,
        content: content.current.value,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <form action="/" onSubmit={onSubmit}>
        <input type="text" name="title" ref={title} />
        <br />
        <input type="text" name="content" ref={content} />
        <br />
        <button>완료</button>
      </form>
    </>
  );
};

export default Update;
