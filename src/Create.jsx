import React, { useState } from "react";
import axios from "axios";

const Create = () => {
  const [inputs, setInputs] = useState({
    title: "",
    content: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
    console.log(inputs);
  };
  return (
    <>
        <input type="text" name="title" onChange={onChange} />
        <br />
        <input type="text" name="content" onChange={onChange} />
        <br />
        <button
          onClick={() => {
            axios
              .post(`https://glacial-temple-96682.herokuapp.com/test/`, {
                title: inputs.title,
                content: inputs.content,
              })
              .then((res) => {
                console.log(res);
              })
              .catch((error) => {
                console.log(error);
              });
          }}
        >
          완료
        </button>
    </>
  );
};

export default Create;


{/* <form action="/">
        <input type="text" name="title" onChange={onChange} />
        <br />
        <input type="text" name="content" onChange={onChange} />
        <br />
        <button
          onClick={() => {
            axios
              .post(`https://glacial-temple-96682.herokuapp.com/test/`, {
                title: inputs.title,
                content: inputs.content,
              })
              .then((res) => {
                console.log(res);
              })
              .catch((error) => {
                console.log(error);
              });
          }}
        >
          완료
        </button>
      </form> */}