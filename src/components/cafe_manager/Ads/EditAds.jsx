import React, { Component } from "react";

const EditAds = ({ promotion, editPromotion, cancelEditAds }) => {
  const [promotionData, setPromotion] = React.useState(promotion);

  const handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.tagName === "SELECT" ? parseInt(target.value) : target.value;
    setPromotion({ ...promotionData, [name]: value });
  };
  const submitEdit = () => {
    editPromotion(promotionData);
  };

  const { id, cafeteriaId, name, description, promotionValue, isActive, isPointsPromotions, isDiscountPromotions } = promotionData;
  return (
    <div>
      <div className="card w-100 mt-2 border-danger">
        <div className="card-header bg-danger text-light">
          تعديل العرض رقم : <small>{id}</small>
        </div>
        <div className="card-body text-primary">
          <div className="form-group">
            <input type="number" name="cafeteriaId" className="form-control" placeholder="رقم الكافيتريا" value={cafeteriaId} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <input type="text" name="name" className="form-control" placeholder="اسم الكافيتريا" value={name} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <input type="text" name="description" className="form-control" placeholder="وصف العرض" value={description} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <input type="number" name="promotionValue" className="form-control" placeholder="قيمة العرض" value={promotionValue} onChange={handleInputChange} />
          </div>

          <div className="form-group">
            <select className="form-control" name="isActive" value={isActive} onChange={handleInputChange}>
              <option value={0} disabled>
                حدد حالة العرض
              </option>
              <option value={true}>فعال</option>
              <option value={false}>غير فعال</option>
            </select>
          </div>

          <div className="form-group">
            <select className="form-control" name="isDiscountPromotion" value={isDiscountPromotions} onChange={handleInputChange}>
              <option value={0} disabled>
                حدد العرض من ضمن عروض الخصومات ام لا{" "}
              </option>
              <option value={true}>نعم</option>
              <option value={false}>لا</option>
            </select>
          </div>

          <div className="form-group">
            <select className="form-control" name="isPointPromotion" value={isPointsPromotions} onChange={handleInputChange}>
              <option value={0} disabled>
                حدد العرض من ضمن عروض النقاط ام لا{" "}
              </option>
              <option value={true}>نعم</option>
              <option value={false}>لا</option>
            </select>
          </div>

          <button type="reset" className="btn btn-block" style={{}} onClick={submitEdit}>
            <i className="fa fa-edit"></i>تعديل
          </button>
          <button className="btn btn-block btn-outline-secondary" onClick={cancelEditAds}>
            الغاء
          </button>
        </div>
      </div>
    </div>
  );
};
export default EditAds;
