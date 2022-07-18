import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  const [inputs, setInputs] = useState({
    title: "",
    content: "",
  });
  console.log(id);

  console.log(new Date());
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
              .put(`https://glacial-temple-96682.herokuapp.com/test/${id}/`, {
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

export default Update;


// <form action="/">
//         <input type="text" name="title" onChange={onChange} />
//         <br />
//         <input type="text" name="content" onChange={onChange} />
//         <br />
//         <button
//           onClick={() => {
//             axios
//               .put(`https://glacial-temple-96682.herokuapp.com/test/${id}/`, {
//                 title: inputs.title,
//                 content: inputs.content,
//               })
//               .then((res) => {
//                 console.log(res);
//               })
//               .catch((error) => {
//                 console.log(error);
//               });
//           }}
//         >
//           완료
//         </button>
//       </form>