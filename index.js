const display = document.getElementById("display");

const appendToDisplay = (input) => {
	display.value += input;
};

const clearDisplay = () => {
	display.value = "";
};

const calculate = () => {
	try {
		if (display.value === "") return;
		display.value = eval(display.value);
	} catch (error) {
		display.value = "Error";
	}
};
