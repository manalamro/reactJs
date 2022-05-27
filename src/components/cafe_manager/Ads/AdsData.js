import React, { Component } from 'react'
import AdsDataRow from './AdsDataRow';

export default class AdsData extends Component {
  render() {
    const { adss } = this.props
    return (
      <div className="table-user">
        <table className="table table-striped table-hover" >
          <thead>
            <tr>
              <th  style={{paddingLeft:'6px'}} scope="col">رقم العرض</th>
              <th style={{paddingLeft:'6px'}} scope="col">رقم الكافيتريا</th>
              <th style={{paddingLeft:'6px'}}scope="col">اسم الكافيتريا</th>
              <th scope="col">وصف العرض</th>
              <th scope="col">قيمة العرض</th>
              <th scope="col">حالة العرض</th>
              <th scope="col">عرض خاص بالنقاط</th>
              <th scope="col">عرض خاص بالخصومات</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {adss.map((ads, key) => {
              return (
                <AdsDataRow 
                ads={ads}
                  key={key}
                  order={key}
                  editAds={this.props.editAds}
                  deleteAds={this.props.deleteAds}
                />
              )
            })}
          </tbody>
        </table>
      </div>

    )
  }
}