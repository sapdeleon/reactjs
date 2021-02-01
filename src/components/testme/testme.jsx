import React from "react";
import { add, subtract, multiply, divide, doublePi } from "./math.js";

function TestMe() {

    return (
        <div>
            <br />
            <img src="https://png.pngtree.com/png-clipart/20190516/original/pngtree-healthy-food-png-image_3776802.jpg" alt="food1" />
            <img src="https://p1.hiclipart.com/preview/878/664/1012/healthy-lifestyle-png-clipart.jpg" alt="food2" />
            <img src="https://www.freepnglogos.com/uploads/food-png/download-food-png-file-png-image-pngimg-1.png" alt="food3" />
            <br />
            <h2>Calculate</h2>
            <ul>
                <li>{add(1, 2)}</li>
                <li>{subtract(9, 3)}</li>
                <li>{multiply(1, 5)}</li>
                <li>{divide(5, 2)}</li>
                <li>{doublePi()}</li>
            </ul>
        </div>
    );
};

export default TestMe;