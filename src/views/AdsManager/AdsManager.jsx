import React, { useEffect } from "react";
import AdsData from "../../components/cafe_manager/Ads/AdsData";
import AddAds from "../../components/cafe_manager/Ads/AddAds";
import EditAds from "../../components/cafe_manager/Ads/EditAds";
import { useAppDispatch, useAppSelector } from "../../store";
import { authActions, usersActions } from "../../store/actions";

const AdsManager = () => {
  const dispatch = useAppDispatch();
  const [showEditAds, setShowEditAds] = React.useState(false);
  const [selectPromotion, setSelectPromotion] = React.useState({});
  const { promotions } = useAppSelector((state) => state.users);
  const createNewAds = (promotion) => {
    dispatch(usersActions.createPromotion(promotion));
  };

  const editAds = (adsId) => {};

  const cancelEditAds = () => {};

  const updateEditAds = (ads) => {};

  const deleteAds = (adsId) => {
    dispatch(usersActions.deletePromotion(adsId));
  };
  useEffect(() => {
    dispatch(usersActions.getPromotions());
  }, []);
  const logout = () => {
    dispatch(authActions.logout());
  };
  return (
    <div>
      <div>
        <div className="jumbotron jumbotron-fluid" style={{ backgroundColor: "#FAF4EE", height: "136px" }}>
          <p onClick={logout}>تسجيل خروج</p>

          <div className="container">
            <h1 className="display-4 text-center" style={{ fontFamily: "Poppins", fontsize: "17", marginTop: "-34px", color: "#9A4726" }}>
              ادارة العروض
            </h1>
            <img src={require("../../assets/logo.png")} style={{ height: "100px", width: "100px", marginTop: "-114px", marginLeft: "-114px" }} alt="" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <AddAds createNewAds={createNewAds} />
            {showEditAds && <EditAds ads={selectPromotion} cancelEditAds={cancelEditAds} updateEditAds={updateEditAds} />}
          </div>
          <div className="col-9">
            <AdsData
              promotions={promotions}
              editAds={(promotionId) => {
                setSelectPromotion(promotions.find((promotion) => promotion.id === promotionId));
                setShowEditAds(true);
              }}
              deleteAds={deleteAds}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdsManager;
