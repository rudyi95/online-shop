import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { addItemInCart } from "../../redux/actions/index";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { CircularProgress, TextField } from "@mui/material";
// import Item from "../../components/Item";

import ActionButton from "../../components/common/buttons/ActionButton";
import { getProductById } from "../../redux/actions/products";

import { ButtonIconType } from "../../types/enums";

import "./Details.css";

const Details = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  // const [relatedItems, setRelatedItems] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const item = useSelector((state) => state.products.item);
  // const items = useSelector((state) => state.items.items);

  useEffect(() => {
    dispatch(getProductById(id));
  }, [dispatch, id]);

  // useEffect(() => {
  //   if (item) {
  //     dispatch(getItemByCategory(item.category));
  //   }
  // }, [item]);

  // useEffect(() => {
  //   if (items && item) {
  //     setRelatedItems(items.filter((i) => i._id !== item._id));
  //   }
  // }, [items, item]);

  if (!item) {
    return <CircularProgress className="circular" />;
  }

  return (
    <div className="details-container">
      <div className="item-details">
        <div className="details-title">{item.name}</div>
        <div className="details-item-container">
          <img src={item.image} alt="" className="details-item-image" />
          <div className="details-item-content">
            <div className="item-price">Ціна: {item.price} грн.</div>

            <div className="item-category-txt">Категорія: {item.category}</div>

            <div className="item-input-cart-btn">
              <TextField
                type="number"
                value={quantity}
                style={{ marginTop: 20, marginBottom: 10, width: 70 }}
                label="Кількість"
                inputProps={{ min: 1, max: 10, step: 1 }}
                onChange={(e) => setQuantity(+e.target.value)}
              />
              <ActionButton
                className="item-cart-btn"
                color="primary"
                variant="outlined"
                onClick={() => {
                  dispatch(
                    addItemInCart({
                      ...item,
                      quantity,
                    })
                  );
                }}
                type={ButtonIconType.addShoppingCart}
                text={"У кошик"}
                icon={<AddShoppingCartIcon style={{ marginLeft: 5 }} />}
              />
            </div>
          </div>
        </div>

        {/* Product description */}
        <div className="item-description-title">Опис</div>
        <div className="item-description">
          {item.description || "Відсутній"}
        </div>
      </div>
      {/* Relateditems */}
      <div className="related-items">
        <div
          style={{
            marginTop: 20,
            marginBottom: 10,
            fontSize: 22,
          }}
        >
          Схожа продукція
        </div>
        <div className="related-items-list">
          {/* {relatedItems.slice(0, 3).map((x) => {
            return <Item className="related-item" key={x.id} item={x} />;
          })} */}
        </div>
      </div>
    </div>
  );
};

export default Details;
