function getData(url) {
	return fetch(url)
		.then((res) => {
			if (!res.ok) {
				throw new Error(`HTTP Error! status: ${res.status}`);
			}
			// console.log("Promises RES ===>", res);
			return res.json();
		})
		.then((data) => {
			console.log("Promise DATA: ", data);
			const container = document.getElementById("data-list");

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
			return data;
		})
		.catch((err) => {
			console.log("ERROR Fetching data: ", err);
		});
}

getData("https://fakestoreapi.com/products?limit=2");

// ***************************************************
function clean() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(console.log("F: Done cleaning!"));
		}, 5000);
	});
}
function cook() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(console.log("S: Done cooking!"));
		}, 1000);
	});
}
function wash() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(console.log("T: Done washing!"));
		}, 500);
	});
}

// PROMISE CHAINING
clean()
	.then(() => cook())
	.then(() => wash())
	.then(() => console.log("Done all the task!!!"));
