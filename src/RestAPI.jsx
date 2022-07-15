import React, { useState } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";

const RestAPI = () => {
    const [texts, setTexts] = useState([]);
    return (
        <>
            <h1>REAT API 연습</h1>
            <div>
                <button onClick={() => {
                    axios
                    .get("https://glacial-temple-96682.herokuapp.com/test")
                    .then((res) => {
                        setTexts([...res.data]);
                        console.log(res.data);
                    })
                    .catch((error) => {
                        console.log(error);
                    })
                }}>GET</button>
            </div>
            <br />
            <div>
                {texts.map((text) => (
                    <div key={text.id}>
                        <h2 style={{'display' : 'inline'}}>{text.title}</h2>
                        <Link to={`/update/`+text.id}><button>수정</button></Link>
                        <button onClick={() => {
                            axios.delete(`https://glacial-temple-96682.herokuapp.com/test/${text.id}/`)
                            .then(() => {
                                console.log('삭제 완');
                            })
                            .catch(() => {
                                console.log('삭제에러');
                            })
                        }}>삭제</button>
                        <p>{text.content}</p>
                        <p>{text.updated_at}</p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default RestAPI;