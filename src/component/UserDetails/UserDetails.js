import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import './userdetails.css';
import DUMMY_DATA from './userdata.json';
import FilterListIcon from '@mui/icons-material/FilterList';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function UserDetails ({currentItems}) {
    const Button = ({ type }) => {
        return (
            <button className={'tableButton ' + type}>{type}</button>
        )
    };
  return (
      <div className="userdetails">
          <table className='usertable'>
              <tr className="usertabletr">          
                  <th className="usertableth">
                      <div className="icon">
                          ORGANIZATION
                          <FilterListIcon className='filterListIcon'/>
                      </div>
                  </th>
                  <th className="usertableth">
                      <div className="icon">
                          USERNAME
                          <FilterListIcon className='filterListIcon'/>
                      </div>
                  </th>
                  <th className="usertableth">
                      <div className="icon">
                          EMAIL
                          <FilterListIcon className='filterListIcon'/>
                      </div>
                  </th>
                  <th className="usertableth">
                      <div className="icon">
                          PHONE NUMBER
                          <FilterListIcon className='filterListIcon'/>
                      </div>
                  </th>
                  <th className="usertableth">
                      <div className="icon">
                          DATE JOINED
                          <FilterListIcon className='filterListIcon'/>
                      </div>
                  </th>
                  <th className="usertableth">
                      <div className="icon">
                          STATUS
                          <FilterListIcon className='filterListIcon'/>
                      </div>
                  </th>
              </tr>
                  { currentItems && currentItems.map(data => {
                      return (
                          <tr className='usertabletr'>
                              
                              <td className="tborganization">{data.organization}</td>
                              <td className="tbusername">{data.username}</td>
                              <td className="tbemail">{data.email}</td>
                              <td className="tbphonenumber">{data['phone number']}</td>
                              <td className="tbdatejoined">{data['date joined']}</td>
                              <td className="tbstatus"><Button type={data.status} /></td>
                              <MoreVertIcon className='user'/>
                          </tr>
                      )
                  })}
          </table>
    </div>
  )
}

const PaginatedItems = ({ itemsPerPage }) => {

    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(DUMMY_DATA.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(DUMMY_DATA.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % DUMMY_DATA.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    return (
        <>
            <UserDetails currentItems={currentItems} />
            <ReactPaginate
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={pageCount}
                previousLabel="< previous"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination justify-content-center"
                activeClassName="active"
                renderOnZeroPageCount={null}
            />
        </>
    );
}

export default PaginatedItems;