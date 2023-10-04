import React, {useId} from "react";

const Input = ({
	label,
	amount,
	onAmountChange,
	onCurrencyChange,
	currencyOptions = [],
	selectCurrency,
	amountDisable = false,
	currencyDisable = false,
	className = "",
}) => {
	const amountInputId = useId();

	return (
		<div className={`bg-white p-3 rounded-lg text-sm flex`}>
			// Amount
			<div className=" w-1/2">
				<label
					htmlFor={amountInputId}
					className="text-black/40 mb-2 inline-block"
				>
					{label}
				</label>
				<input
					id={amountInputId}
					className="outline-none w-full text-black bg-transparent py-1.5"
					type="number"
					placeholder="Amount"
					disabled={amountDisable}
					value={amount}
					onChange={(e) =>
						onAmountChange && onAmountChange(Number(e.target.value))
					}
				/>
			</div>
			// Options
			<div className="w-1/2 flex flex-wrap justify-end text-right">
				<p className="text-black/40 mb-2 w-full">Currency Type</p>
				<select
					className="rounded-lg px-1 bg-gray-100 cursor-pointer outline-none"
					value={selectCurrency}
					onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
					disabled={currencyDisable}
				>
					{currencyOptions.map((currency) => (
						<option value={currency}>{currency}</option>
					))}
				</select>
			</div>
		</div>
	);
};

export default Input;
