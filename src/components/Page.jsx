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

        // setCount(count+1); this wont work while using the above logic
        //below code can be made simple but using `setCount((c)=>c+1);`
        setCount((c) => {
            let d = c;
            d += 1;
            return d;
        });
    }

    return (
        <div>
            <span>Functional Component Count = {count}</span>
            {content.button(10)}
        </div>
    );
}

export default Page;
