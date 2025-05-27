// CALLBACK
function getInfo(callback) {
	fetch("https://fakestoreapi.com/products?limit=2")
		.then((res) => res.json())
		.then((data) => callback(null, data))
		.catch((error) => callback(error, null));
}

getInfo((error, data) => {
	console.log("Callback DATA: ", data);
	const container = document.getElementById("callback-list");

	if (error) {
		console.log("Error fetching on callback", error);
		return;
	}

	data.forEach((item) => {
		const div = document.createElement("div");
		div.innerHTML = `
					<h2>${item.title}</h2>
					<p>${item.description}</p>
					<img src="${item.image}" alt="image" width="100" />
					<br />
				`;
		container.appendChild(div);
	});
});

// ***************************************************
function task1(callback) {
	setTimeout(() => {
		console.log("Task1: Done cleaning!");
		callback();
	}, 1500);
}
function task2(callback) {
	setTimeout(() => {
		console.log("Task2: Done cooking!");
		callback();
	}, 2500);
}
function task3(callback) {
	setTimeout(() => {
		console.log("Task3: Done washing!");
		callback();
	}, 500);
}

// CALLBACK HELL
task1(() => {
	task2(() => {
		task3(() => {
			console.log("All task done!");
		});
	});
});
