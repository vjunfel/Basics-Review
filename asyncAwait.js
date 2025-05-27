async function getData(url) {
	try {
		const res = await fetch(url);
		if (!res.ok) {
			throw new Error(`HTTP Error! status: ${res.status}`);
		}
		// console.log("Async RES ===>", res);
		const data = await res.json();

		console.log("Async DATA: ", data);
		const container = document.getElementById("product-list");

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
	} catch (err) {
		console.log("ERROR Fetching data: ", err);
	}
}

getData("https://fakestoreapi.com/products?limit=2");
