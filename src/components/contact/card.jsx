import React from "react";
import Avatar from "./avatar";
import Detail from "./detail";

function Card(props) {
	return (
        <div>
            <div className="card">
                <div className="top">
                    <p>{props.id}</p>
                    <h2 className="name">{props.name}</h2>
                    <Avatar img={props.img} alt={props.alt} />
                </div>
                <div className="bottom">
                    <Detail detailinfo={props.phone} />
                    <Detail detailinfo={props.email} />
                </div>
            </div>
        </div>
	);
};

export default Card;