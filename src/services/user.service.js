const apiUrl = "http://localhost:4000";

async function createUser(user) {
	const res = await fetch(apiUrl + "/user", {
		method: "POST",
		body: JSON.stringify(user),
		headers: {
			"Content-Type": "application/json",
		},
	});
	return res.json();
}

async function getUsers() {
	const res = await fetch(apiUrl + "/user", {
		headers: {
			"Content-Type": "application/json",
		},
	});
	return res.json();
}

async function updateUser(id, status) {
	await fetch(apiUrl + "/user/" + id, {
		method: "PUT",
		body: JSON.stringify({ status }),
		headers: {
			"Content-Type": "application/json",
		},
	});
}

async function deleteOneUser(id) {
	const res = await fetch(apiUrl + "/user/" + id, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
		},
	});
}


export { createUser, getUsers, updateUser, deleteOneUser };
