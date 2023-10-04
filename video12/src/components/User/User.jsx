import React from "react";
import {useParams} from "react-router-dom";
const User = () => {
	const {userId} = useParams();
	return <h1 className="text-2xl text-center bg-red-400">{userId}</h1>;
};

export default User;
