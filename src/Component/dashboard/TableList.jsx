import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark, faEye, faClose, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
const TableList = ({ data, marketApplied=false,handleAction, viewDetails, showDetails, userDetails, couponCross, showAll=true ,showButtons = true, pending = true, sign = false}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 8;
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handlePreviousPage = () => {
      if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      }
  };

  const handleNextPage = () => {
      if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      }
  };
  return (
    <>
    <table>
      <thead>
        <tr>
          <th>Campaign Name</th>
          <th>Vendor Name</th>
          <th>Product Name</th>
          <th>Coupon Price</th>
          {showButtons && (<th>Action</th>)}
        </tr>
      </thead>
      <tbody>
        {currentItems?.map((list, i) => {
          return (
            <>
            <tr key={list.product.product_name}>
              <td>{list?.campaign_name}</td>
              <td>{list.vendor_name ? list.vendor_name : "No Vendor Name"}</td>
              <td>
                {list?.product?.map((prod, index) => (
                  <React.Fragment key={index}>
                    {prod?.product_name ? prod?.product_name  + ' - ' : ""}
                    {prod?.coupon_name ? (
                      <>
                      <span><strong>Discount Code:</strong> {pending == true ? ("Waiting for Approval") : (prod?.coupon_name?.join(", "))}</span>
                      <br />
                      </>
                    ):(!pending && list.status == 4 ? <i style={{color: '#5e5e5e'}}> <b> Campaign is declined</b></i> : 'Waiting for Approval') } 
                  </React.Fragment>
                ))}
              </td>
              <td>
              {pending == true ? (
                "Waiting for Approval"
              ) : (
                list?.product?.map((prod) =>(
                  <>
                    {prod.discount_type && Array.isArray(prod.discount_type) ?  (
                      prod.discount_type.map((discount, i) => (
                        <>
                          {sign == true ? parseInt(Math.abs(prod.amount[i].toString())) : prod.amount[i]}
                          {discount === 'percentage' ? '%' :'Dhs'}
                          {i < prod.discount_type.length - 1 ? ' , ' : ''}
                        </>
                      ))
                    ) : 
                        prod.amount && Array.isArray(prod.amount) ? (
                          prod.amount.map((amount, i) => (
                              <>
                                {amount}
                                {i < prod.amount.length - 1 ? ' , ' : ''}
                              </>
                          )))
                        :
                        "No Coupon"}
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
                    marketApplied == false && (
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
                  
                    )
                  )}
                  {showAll ? (
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
                  ):
                  marketApplied == true && (
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
    <div className="table-pagination d-flex justify-content-center align-items-center mt-4">
      <button onClick={handlePreviousPage} disabled={currentPage === 1} className='page-btn' style={{marginRight: 10}}>
          <FontAwesomeIcon icon={faChevronLeft} style={{ color: "#fff", width: "15px", height: "15px"}} />
      </button>
      {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
      <button
          key={pageNumber}
          onClick={() => paginate(pageNumber)}
          className={currentPage === pageNumber ? 'active page-num' : 'page-num'}
          style={{margin: '0 5px'}}
      >
          {pageNumber}
          </button>
      ))}
      <button onClick={handleNextPage} className='page-btn' disabled={currentPage === totalPages} style={{marginLeft: 10}}>
          <FontAwesomeIcon icon={faChevronLeft} style={{ transform: 'rotate(180deg)', color: "#fff", width: "15px", height: "15px"}} />
      </button>
    </div>
    </>
    
  );
};

export default TableList;
