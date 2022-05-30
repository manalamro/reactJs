import React, { Component } from "react";
import AdsDataRow from "./AdsDataRow";

const AdsData = ({ promotions, editAds, deleteAds }) => {
  return (
    <div className="table-user">
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th style={{ paddingLeft: "6px" }} scope="col">
              رقم العرض
            </th>
            <th style={{ paddingLeft: "6px" }} scope="col">
              رقم الكافيتريا
            </th>
            <th style={{ paddingLeft: "6px" }} scope="col">
              اسم الكافيتريا
            </th>
            <th scope="col">وصف العرض</th>
            <th scope="col">قيمة العرض</th>
            <th scope="col">حالة العرض</th>
            <th scope="col">عرض خاص بالنقاط</th>
            <th scope="col">عرض خاص بالخصومات</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {promotions.map((promotion, key) => {
            return <AdsDataRow promotion={promotion} key={key} order={key} editAds={() => editAds(promotion.id)} deleteAds={deleteAds} />;
          })}
        </tbody>
      </table>
    </div>
  );
};
export default AdsData;
