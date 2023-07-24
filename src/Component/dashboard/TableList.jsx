import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark, faEye, faClose } from "@fortawesome/free-solid-svg-icons";
const TableList = ({ data, handleAction, viewDetails, showDetails, userDetails, couponCross, showAll=true ,showButtons = true, pending = true }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Campaign Name</th>
          <th>Product Name</th>
          <th>Coupon Price</th>
          {showButtons && (<th>Action</th>)}
        </tr>
      </thead>
      <tbody>
        {data?.map((list, i) => {
          return (
            <>
            <tr key={list.product.product_name}>
              <td>{list?.campaign_name}</td>
              <td>
                {list?.product?.map((prod, index) => (
                  <React.Fragment key={index}>
                    {prod?.product_name} {!pending && prod?.coupon_name && (
                      <>
                      - <span><strong>Discount Code:</strong> {pending == true ? ("Please accept to get the price") : (prod?.coupon_name?.join(", "))}</span>
                      <br />
                      </>
                    )} 
                  </React.Fragment>
                ))}
              </td>
              <td>
              {pending == true ? (
                "Please accept to get the price"
              ) : (
                list?.product?.map((prod) =>(
                  <>
                    {prod.discount_type && Array.isArray(prod.discount_type) ?  (
                      prod.discount_type.map((discount, i) => (
                        <>
                          {prod.amount[i]}
                          {discount === 'percentage' ? '%' :'Dhs'}
                          {i < prod.discount_type.length - 1 ? ' , ' : ''}
                        </>
                      ))
                    ) : 
                        prod.amount && Array.isArray(prod.amount) &&  (
                          prod.amount.map((amount, i) => (
                              <>
                                {amount}
                                {i < prod.amount.length - 1 ? ' , ' : ''}
                              </>
                          )))}
                  </>
                )
              ))}
              </td>
              {showButtons && (
                <td className="d-flex justify-content-center">
                  {showAll && (
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
                  )}
                  {showAll && (
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
                  )}
                  {showAll && (
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
                  )}
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
                      <p>
                      {userDetails?.product?.map((product) =>
                        product != null && product.product_name != null
                          ? product.product_name
                          : "No Products"
                      ).filter(Boolean).join(", ")}
                    </p></div>
                      
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
