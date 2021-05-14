class PriceController {
	constructor() {
		this.GUI = {
			CHECKBOX: document.getElementById('switch'),
			PRICES: [...document.querySelectorAll('.price')],
		};
		this.PRICES_ANNUALLY = ['199.99', '249.99', '399.99'];
		this.PRICES_MONTHLY = ['19.99', '24.99', '39.99'];
	}

	initListeners = () => {
		this.GUI.CHECKBOX.addEventListener('change', () => {
			this.GUI.CHECKBOX.checked ? this._monthly() : this._annually();
		});
	};

	_monthly = () => {
		this.PRICES_MONTHLY.map((price, i, _) => {
			this.GUI.PRICES[i].textContent = price;
		});
	};

	_annually = () => {
		this.PRICES_ANNUALLY.map((price, i, _) => {
			this.GUI.PRICES[i].textContent = price;
		});
	};
}
