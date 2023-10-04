import React, {useEffect, useState} from "react";
import {useLoaderData} from "react-router-dom";

const Github = () => {
	const data = useLoaderData();
	return (
		<>
			<div className=" sm:container mx-auto text-center flex gap-12 m-4 bg-gray-400 text-white p-4 text-3xl">
				<img className=" w-1/6" src={data?.avatar_url} alt="avatar" />
				<div className="flex flex-col gap-5">
					<h1>Login: {data?.login}</h1>
				</div>
			</div>
		</>
	);
};

export default Github;

export const githubInfoLoader = async () => {
	const response = await fetch("http://api.github.com/users/karanfullstack");
	return response.json();
};
