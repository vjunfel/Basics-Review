function getData(url) {
	return fetch(url)
		.then((res) => {
			if (!res.ok) {
				throw new Error(`HTTP Error! status: ${res.status}`);
			}
			console.log("RES ===>", res);
			return res.json();
		})
		.then((data) => {
			return data;
		})
		.catch((err) => {
			console.log("ERROR Fetching data: ", err);
		});
}

getData("https://fakestoreapi.com/products?limit=3").then((data) => {
	console.log("OUR DATA: ", data);

	const container = document.getElementById("data-list");

	data.forEach((item) => {
		const div = document.createElement("div");
		div.innerHTML = `
				<h1>Promises</h1>
				<h2>${item.title}</h2>
				<p>${item.description}</p>
				<img src="${item.image}" alt="image" width="100" />
				<br />
			`;

		container.appendChild(div);
	});
});
