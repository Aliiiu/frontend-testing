import React from 'react';
import FeaturedInfo from '../../component/featuredInfo/FeaturedInfo';
import FilterForm from '../../component/FilterForm/FilterForm';
import Sidebar from '../../component/Sidebar/Sidebar';
import Topbar from '../../component/Topbar/Topbar';
import PaginatedItems from '../../component/UserDetails/UserDetails';
import ViewMore from '../../component/ViewMore/ViewMore';
import './dashboard.css';

const Dashboard = () => {
	return (
		<>
			<Topbar />
			<main className='container'>
				<Sidebar />
				<div className='dashboard'>
					<div className='feature-section'>
						USERS
						{/* <FilterForm />
						<ViewMore /> */}
					</div>
					<FeaturedInfo />
					<PaginatedItems itemsPerPage={9} />
				</div>
			</main>
		</>
	);
};

export default Dashboard;
