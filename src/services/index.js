const API_URL = "http://localhost:3000/api/v1";

const getList = async ({ fileName }) => {
	const request = await fetch(`${API_URL}/files/data?fileName=${fileName}`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	});

	const response = await request.json();

	return {
		status: request.status,
		response,
	};
};

/** GET LIST OF FILES NAMES */
const getFilesList = async () => {
	const request = await fetch(`${API_URL}/files/list`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	});
	const response = await request.json();
	return {
		status: request.status,
		response,
	};
};

export { getList, getFilesList };
