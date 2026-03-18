const BASKET_KEY = "basket";

export const getBasket = () => {
  const basket = localStorage.getItem(BASKET_KEY);
  return basket ? JSON.parse(basket) : { items: [] };
};

export const addToBasket = (uuid) => {
  const basket = getBasket();

  if (!basket.items.includes(uuid)) {
    basket.items.push(uuid);
    localStorage.setItem(BASKET_KEY, JSON.stringify(basket));
  }
};

export const removeFromBasket = (uuid) => {
  const basket = getBasket();
  basket.items = basket.items.filter(id => id !== uuid);
  localStorage.setItem(BASKET_KEY, JSON.stringify(basket));
};

export const clearBasket = () => {
  localStorage.removeItem(BASKET_KEY);
};
