import React, { useState } from "react";
import NavBar from "../components/NavBar";
import { FaStar } from "react-icons/fa";


const createArray = (length) => [
    ...Array(length)
];

function Star({ selected = false, onSelect }) {
    return (
        <FaStar color={selected ? "gold" : "gray"}
            onClick={onSelect} />
    );
}
function StarRating({ totalStars = 5 }) {
    const [
        selectedStars,
        setSelectedStars
    ] = useState(0);
    return createArray(totalStars).map((n, i) => (
        <Star key={i} selected={selectedStars > i} onSelect={() => setSelectedStars(i + 1)} />
    ));
}

export default function Skills() {
    return (
        <div className="App">
            {<NavBar />}
            <section className="skills">
                <h1>
                    My Skills Ratings<br />
                </h1>

                <div class="tabs">
                    <div class="tab-2">
                        <label for="tab2-1">Back - End</label>
                        <input id="tab2-1" name="tabs-two" type="radio" checked="checked" />
                        <div className="bars">
                            <div class="mainzone">
                                <div class="progress-5">
                                    <h2>php(Laravel)</h2>
                                </div>
                            </div>
                            <div class="mainzone">
                                <div class="progress-6">
                                    <h2>Node JS</h2>
                                </div>
                            </div>
                            <div class="mainzone">
                                <div class="progress-7">
                                    <h2>C#</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-2">
                        <label for="tab2-2">Front - End</label>
                        <input id="tab2-2" name="tabs-two" type="radio" />
                        <div className="bars">
                            <div class="mainzone">
                                <div class="progress-1">
                                    <h2>html</h2>
                                </div>
                            </div>
                            <div class="mainzone">
                                <div class="progress-2">
                                    <h2>css</h2>
                                </div>
                            </div>
                            <div class="mainzone">
                                <div class="progress-3">
                                    <h2>javascript</h2>
                                </div>
                            </div>
                            <div class="mainzone">
                                <div class="progress-4">
                                    <h2>react</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rating">
                    <h3>Don't forget to rate my skills</h3>
                    <StarRating />
                </div>
                <hr/>
            </section>
        </div>
    );
}