import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark, faEye, faClose } from "@fortawesome/free-solid-svg-icons";
const TableList = ({ data, handleAction, viewDetails, showDetails, userDetails, couponCross, showButtons = true }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Campaign Name</th>
          <th>Product Name</th>
          <th>Coupon Name</th>
          <th>Coupon Price</th>
          {showButtons && (<th>Action</th>)}
        </tr>
      </thead>
      <tbody>
        {data?.map((list, i) => {
          return (
            <>
            <tr key={i}>
              <td>{list.campaign_name}</td>
              <td>
                {list.product?.map((prod) => prod.product_name).join(", ")}
              </td>
              <td>
                {list.product
                  ?.map((prod) =>
                    prod.coupon_name?.map((coupon) => coupon).join(", ")
                  )
                  .join(", ")}
              </td>
              <td>
                {list.product
                  ?.map((prod) =>
                    prod.amount?.map((amount) => amount).join(", ")
                  )
                  .join(", ")}
              </td>
              {showButtons && (
                <td className="d-flex justify-content-center">
                  <button
                    type="button"
                    style={{ marginRight: 15 }}
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Accept"
                    onClick={() =>
                      handleAction(list.campaignid_id, "accept")
                    }
                  >
                    <FontAwesomeIcon
                      icon={faCheck}
                      style={{
                        color: "#fff",
                        width: "15px",
                        height: "15px",
                      }}
                    />
                  </button>
                  <button
                    type="button"
                    data-toggle="tooltip"
                    data-placement="top"
                    style={{ marginRight: 15 }}
                    title="Decline"
                    onClick={() =>
                      handleAction(list.campaignid_id, "reject")
                    }
                  >
                    <FontAwesomeIcon
                      icon={faXmark}
                      style={{
                        color: "#fff",
                        width: "15px",
                        height: "15px",
                      }}
                    />
                  </button>
                  <button
                    type="button"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="View Details"
                    onClick={() =>
                      viewDetails(list.campaignid_id)
                    }
                  >
                    <FontAwesomeIcon
                      icon={faEye}
                      style={{
                        color: "#fff",
                        width: "15px",
                        height: "15px",
                      }}
                    />
                  </button>
                </td>
              )}
            </tr>
            {showDetails && (
              <div className="user-details">
                <div className="user-details-container">
                  <button className='close' onClick={couponCross}>
                    <FontAwesomeIcon icon={faClose} style={{ color: "#000", width: "25px", height: "25px"}} />
                  </button>
                  <div className="details d-flex">
                    <div className="details-content">
                      <h6>Campaign Name: </h6>
                      <p>{userDetails?.campaign_name}</p></div>
                    <div className="details-content">
                      <h6>Date: </h6>
                      <p>{userDetails?.date}</p></div>
                    <div className="details-content">
                      <h6>Description: </h6>
                      <p>{userDetails?.description}</p></div>
                    <div className="details-content">
                      <h6>Influencer Fee: </h6>
                      <p>{userDetails?.influencer_fee}</p></div>
                    <div className="details-content">
                      <h6>Influencer Visit: </h6>
                      <p>{userDetails?.influencer_visit}</p></div>
                    <div className="details-content">
                      <h6>Product Name: </h6>
                      <p>{userDetails?.product?.map((product) =>product.product_name)}</p></div>
                    <div className="details-content">
                      <h6>Coupons: </h6>
                      <p>{userDetails?.product?.map((product) =>product.name?.map((name) => name))}</p></div>
                    <div className="details-content">
                      <h6>Amount: </h6>
                      <p>{userDetails?.product?.map((product) =>product.amount?.map((name) => name))}</p></div>
                  </div>
                </div>
              </div>
            )}
          </>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableList;
