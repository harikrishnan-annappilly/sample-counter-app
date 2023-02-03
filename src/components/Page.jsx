import React, { useState } from "react";

function Page(props) {
    const [count, setCount] = useState(0);

    const [content, setContent] = useState({
        button: (value) => {
            return <button onClick={() => handlePlus(value)}>+</button>;
        },
    });

    function handlePlus(value) {
        console.log("value=", value);
        const data = count + 1;
        setCount((count) => data);
    }

    return (
        <div>
            <span>Functional Component Count = {count}</span>
            {content.button(10)}
        </div>
    );
}

export default Page;
