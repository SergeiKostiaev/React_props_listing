import React from "react";

function getPriceText(price, currency_code) {
    let priceText = `${price} ${currency_code}`;
    if (currency_code === 'USD') {
        priceText = `$${price}`;
    }
    if (currency_code === 'EUR') {
        priceText = `€${price}`;
    }
    return priceText;
}

export default function Item({item}) {
    const {url, MainImage, title, currency_code, price, quantity, state} = item;

    if (state !== 'active') {
        return null;
    }

    let imgUrl = '';
    if (MainImage && MainImage.url_570xN) {
        imgUrl = MainImage.url_570xN;
    }

    const priceText = getPriceText(price, currency_code);

    let quantityStyle = 'high';
    if (quantity > 10 && quantity <= 20) {
        quantityStyle = 'medium';
    }
    if (quantity <= 10) {
        quantityStyle = 'low';
    }

    return (
        <div className="item">
            <div className="item-image">
                <a href={url}>
                    <img src={imgUrl} alt={title}/>
                </a>
            </div>
            <div className="item-details">
                <p className="item-title">{title}</p>
                <p className="item-price">{priceText}</p>
                <p className={`item-quantity level-${quantityStyle}`}>{quantity} left</p>
            </div>
        </div>
    );
}