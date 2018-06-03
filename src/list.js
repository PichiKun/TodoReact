import React from "react";

export default props => {
    return (
        <div>
            <ul>
                {props.todolist.map((item, index) => (
                    <li
                        key={index}
                        onClick={() => {
                            props.delete(index);
                        }}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};