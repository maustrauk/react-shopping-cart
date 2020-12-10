import React from 'react';

const Item = props => {

	const {image, title, price, id, removeItem} = props;

	const onClick = () => {
		removeItem(id);
	}

	return (
		<div className="shopping-cart_item">
			<img src={image} alt={`${title} book`} />
			<div>
				<h1>{title}</h1>
				<p>$ {price}</p>
				<button onClick={onClick}>Remove from cart</button>
			</div>
		</div>
	);
};

export default Item;
