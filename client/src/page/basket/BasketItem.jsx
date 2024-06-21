import React from'react';
function BasketItem({ user, bask, setBasket }) {
  
  const onHandleDeleteItem = async () => {
    const { data } = await request.delete(`/baskets/basketLines/${bask.id}`);
    console.log(data);
    if (data.message === "success") {
      setBasket((prev) => prev.filter((el) => el.id !== bask.id));
    }
  }
  return (
    <>
      <div className="card" key={bask.id}>
      <img
        src={`http://localhost:3000${bask.img}`}
        alt="foto"
        className="imgCard"
      />
      <h3>{bask.name}</h3>
      <p>{bask.price}</p>
      <p>{bask.city}</p>
      <button onClick={onHandleDeleteItem}>Удалить</button>
    </div>
    </>

  );
}

export default BasketItem;