import React, { Component } from "react";

const AddAds = ({ createNewAds }) => {
  const [showAddAds, setShowAddAdds] = React.useState(false);
  const [addAdsDone, setAddAdsDone] = React.useState(false);
  const [promotion, setPromotion] = React.useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setPromotion({ ...promotion, [name]: value });
  };

  const addNewPromotion = () => {
    createNewAds(promotion);

    setAddAdsDone(true);
  };

  if (!showAddAds) {
    return (
      <button className="btn btn-block" style={{ backgroundColor: "#FAF4EE", borderColor: "#9A4726", color: "#9A4726" }} onClick={() => setShowAddAdds(true)}>
        أضف عرض جديد
      </button>
    );
  } else {
    return (
      <div>
        {addAdsDone && <div className="alert alert-success mt-3">تمت اضافة العرض!</div>}
        <div className="card w-100 mt-2 ">
          <div className="card-header" style={{ backgroundColor: "#FAF4EE", borderColor: "#9A4726", color: "#9A4726", textAlign: "center" }}>
            أضف عرض
          </div>
          <div className="card-body text-primary">
            <div>
              <div className="form-group">
                <input type="number" name="cafeteriaId" value={promotion.cafeteriaId} className="form-control" placeholder="رقم الكافيتريا" onChange={handleChange} />
              </div>
              <div className="form-group">
                <input type="text" name="name" value={promotion.name} className="form-control" placeholder="عنوان" onChange={handleChange} />
              </div>
              <div className="form-group">
                <input type="text" name="description" value={promotion.description} className="form-control" placeholder="وصف العرض" onChange={handleChange} />
              </div>
              <div className="form-group">
                <input type="number" name="promotionValue" value={promotion.promotionValue} className="form-control" placeholder="قيمة العرض" onChange={handleChange} />
              </div>

              <div className="form-group">
                <select className="form-control" name="isActive" value={promotion.isActive} defaultValue={0} onChange={handleChange}>
                  <option value={0} disabled>
                    حدد حالة العرض
                  </option>
                  <option value={true}>فعال</option>
                  <option value={false}>غير فعال</option>
                </select>
              </div>

              <div className="form-group">
                <select className="form-control" name="isDiscountPromotions" value={promotion.isDiscountPromotion} defaultValue={0} onChange={handleChange}>
                  <option value={0} disabled>
                    حدد العرض من ضمن عروض الخصومات ام لا{" "}
                  </option>
                  <option value={true}>نعم</option>
                  <option value={false}>لا</option>
                </select>
              </div>

              <div className="form-group">
                <select className="form-control" value={promotion.isPointsPromotion} name="isPointsPromotions" defaultValue={0} onChange={handleChange}>
                  <option value={0} disabled>
                    حدد العرض من ضمن عروض النقاط ام لا{" "}
                  </option>
                  <option value={true}>نعم</option>
                  <option value={false}>لا</option>
                </select>
              </div>

              <button type="reset" className="btn btn-info btn-block" style={{ backgroundColor: "#9A4726", borderBlockColor: "#9A4726" }} onClick={addNewPromotion}>
                انشاء
              </button>
              <button className="btn btn-block btn-outline-secondary" onClick={() => setShowAddAdds(false)}>
                الغاء
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
export default AddAds;
