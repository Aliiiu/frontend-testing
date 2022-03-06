import React from 'react';
import './sidebar.css';
import briefCase from './DB-Asset/briefcase 1.png';
import dropDown from './DB-Asset/np_next.png';
import home from './DB-Asset/home.png';
import users from './DB-Asset/user.png';
import guarantor from './DB-Asset/guarantor.png';
import loans from './DB-Asset/loans.png';
import decisionModel from './DB-Asset/decision models.png';
import savings from './DB-Asset/savings.png';
import loanRequest from './DB-Asset/loan request.png';
import whiteList from './DB-Asset/whitelist.png';
import karma from './DB-Asset/karma.png';
import savingsProduct from './DB-Asset/savings product.png';
import feesNcharges from './DB-Asset/fees n charges.png';
import transactions from './DB-Asset/transac.png';
import services from './DB-Asset/services.png';
import serviceAccount from './DB-Asset/service acc.png';
import settlement from './DB-Asset/settlements.png';
import report from './DB-Asset/reports.png';
import preference from './DB-Asset/preference.png';
import feesNpricing from './DB-Asset/fees n pricing.png';
import audit from './DB-Asset/audit.png';


const Sidebar = () => {
  return (
      <div className='sidebar'>
          <div className="sidebarwrapper">
              <div className="sidebarmenu">
                  <div className="sbmenusection">
                      <img src={briefCase} alt="A birefCase Icon" />
                      <h3> Switch Organization </h3>
                      <img src={dropDown} alt="A drop dowm arrow" />
                  </div>
                  <div className="sbmenutitle">
                      <img src={home} alt="A birefCase Icon" />
                      <h3> Dashboard </h3>
                  </div>
                  <div className="sbdbsections">
                      <h4 className="section-header">CUSTOMERS</h4>
                      <li className="section-items">
                          <img src={users} alt="user icon" />
                          <h5>Users</h5>
                      </li>
                      <li className="section-items">
                          <img src={guarantor} alt="guarantor icon" />
                          <h5>Guarantor</h5>
                      </li>
                      <li className="section-items">
                          <img src={loans} alt="loan icon" />
                          <h5>Loans</h5>
                      </li>
                      <li className="section-items">
                          <img src={decisionModel} alt="decision model icon" />
                          <h5>Decision Models</h5>
                      </li>
                      <li className="section-items">
                          <img src={savings} alt="savings icon" />
                          <h5>Savings</h5>
                      </li>
                      <li className="section-items">
                          <img src={loanRequest} alt="loan request icon" />
                          <h5>Loan Request</h5>
                      </li>
                      <li className="section-items">
                          <img src={whiteList} alt="whitelist icon" />
                          <h5>Whitelist</h5>
                      </li>
                      <li className="section-items">
                          <img src={karma} alt="karma icon" />
                          <h5>Karma</h5>
                      </li>
                  </div>
                  <div className="sbdbsections">
                      <h4 className="section-header">BUSINESSES</h4>
                      <li className="section-items">
                          <img src={briefCase} alt="organization icon" />
                          <h5>Organization</h5>
                      </li>
                      <li className="section-items">
                          <img src={loanRequest} alt="load product icon" />
                          <h5>Loan Products</h5>
                      </li>
                      <li className="section-items">
                          <img src={savingsProduct} alt="savings product icon" />
                          <h5>Saving Products</h5>
                      </li>
                      <li className="section-items">
                          <img src={feesNcharges} alt="fees n charges icon" />
                          <h5>Fees and Charges</h5>
                      </li>
                      <li className="section-items">
                          <img src={transactions} alt="savings icon" />
                          <h5>Transactions</h5>
                      </li>
                      <li className="section-items">
                          <img src={services} alt="services icon" />
                          <h5>Services</h5>
                      </li>
                      <li className="section-items">
                          <img src={serviceAccount} alt="service Account icon" />
                          <h5>Service Account</h5>
                      </li>
                      <li className="section-items">
                          <img src={settlement} alt="settlements icon" />
                          <h5>Settlements</h5>
                      </li>
                      <li className="section-items">
                          <img src={report} alt="report icon" />
                          <h5>Reports</h5>
                      </li>
                  </div>
                  <div className="sbdbsections">
                      <h4 className="section-header">SETTINGS</h4>
                      <li className="section-items">
                          <img src={preference} alt="user icon" />
                          <h5>Preference</h5>
                      </li>
                      <li className="section-items">
                          <img src={feesNpricing} alt="guarantor icon" />
                          <h5>Fees and Pricing</h5>
                      </li>
                      <li className="section-items">
                          <img src={audit} alt="loan icon" />
                          <h5>Audit Logs</h5>
                      </li>
                  </div>
            </div>
          </div>
      </div>
  )
}

export default Sidebar