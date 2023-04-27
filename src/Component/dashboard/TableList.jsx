import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

const TableList = ({ data, handleAction, showButtons = true }) => {
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
                <td className="d-flex">
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
                </td>
              )}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableList;
