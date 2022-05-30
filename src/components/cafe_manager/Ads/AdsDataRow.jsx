import React, { Component } from "react";
const AdsDataRow = ({ promotion = {}, order, editAds, deleteAds }) => {
  const onClickEditAds = () => {
    editAds(promotion.id);
  };
  const onClickDeleteAds = () => {
    deleteAds(promotion.id);
  };

  const IsActiveState = (isActive) => {
    if (isActive) return "فعال";
    else if (!isActive) return "غير فعال";
  };

  const isPointsPromotionsType = (IsPointsPromotions) => {
    if (IsPointsPromotions) return "نعم";
    else if (!IsPointsPromotions) return "لا";
  };
  const isDiscountPromotionsType = (IsDiscountPromotions) => {
    if (IsDiscountPromotions) return "نعم";
    else if (!IsDiscountPromotions) return "لا";
  };

  const isActiveStyle = promotion.isActive === 1 ? { color: "red", fontWeight: "bold" } : promotion.isActive === 2 ? { color: "black" } : {};

  const isPointStyle = promotion.isPointsPromotions === 1 ? { color: "red", fontWeight: "bold" } : promotion.isPointsPromotions === 2 ? { color: "black" } : {};

  const isDiscountStyle = promotion.isDiscountPromotions === 1 ? { color: "red", fontWeight: "bold" } : promotion.isDiscountPromotions === 2 ? { color: "black" } : {};

  return (
    <tr>
      <th scope="row">{order + 1}</th>
      <td>{promotion.cafeteriaId}</td>
      <td>{promotion.name}</td>
      <td>{promotion.description}</td>
      <td>{promotion.promotionValue}</td>
      <td style={isActiveStyle}>{IsActiveState(promotion.isActive)}</td>
      <td style={isPointStyle}>{isPointsPromotionsType(promotion.isPointsPromotions)}</td>
      <td style={isDiscountStyle}>{isDiscountPromotionsType(promotion.isDiscountPromotions)}</td>
      <td>
        <button className="btn btn-info" onClick={onClickEditAds}>
          <i className="fa fa-edit" /> تعديل
        </button>
        <button className="btn btn-danger" onClick={onClickDeleteAds}>
          <i className="fa fa-trash-o" /> حذف
        </button>
      </td>
    </tr>
  );
};
export default AdsDataRow;
