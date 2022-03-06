import React from "react";
import NavBar from "../../components/NavBar";
import { useState, useEffect } from 'react';
import Data from "./Data.json"

// I chose function component because function components are like a pure javascript functions
// funtion components they simply accept data and display them in some form
// the syntax is easy and straight 


export default function Lesson5({
    min = 20,
    max = 50,
    increment = 1,
    decrement = 1}) {

    const [count, setCount] = useState(min);

    const [data, setData] = useState([]);
    

    function IncrementNumber() {
        if (count < max) {
            setCount(count + increment);
        }
    }
    function DecrementNumber() {
        if (count > min) {
            setCount(count - decrement);
        }
    }

    useEffect(() => {
        loader();
    }, []);

    function loader() {
        let uri = []
        Data.map((entry) => {
            uri.push({ title: entry.title, content: entry.body, userId: entry.userId });
            return uri
        });
        setData(uri);
    }
  
    return (
        <>
            <div className="App">
                {<NavBar />}
                <section className="group">
                    <div className="counter">
                        <button className="btn-count" onClick={DecrementNumber}>
                            -
                        </button>
                        <input className="form-control"
                            type="number"
                            min={min}
                            max={max}
                            value={count}
                            onChange={(e) => setCount(e.target.valueAsNumber)}
                        />
                        <button className="btn-count" onClick={IncrementNumber}>
                            +
                        </button>
                    </div>

                    <div className="jsonContent">
                        {
                            data.map((entry) => {
                                return (
                                    <div className="jsonData" key={entry.id}>
                                        <h1><strong>{entry.title}</strong></h1>
                                        <p>{entry.content}</p><br />
                                        <p>User number: {entry.userId}</p>
                                    </div>
                                );
                            })
                        }
                    </div>

                </section>
            </div>
        </>
    );
}

