import React, { Suspense, useState, useTransition } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShoppingCart from './Component/ShoppingCart';
import Main from './Main';
import Logo from './Component/Logo';
const Loading = () => (<div>Loading...</div>);

const Layout = ({ isPending, children }) => (
	<div className="layout">
		<div className="header" style={{
			opacity: isPending ? 0.7 : 1
		}}>
			<Logo />
			{/*<SearchBar /> */}
			{/* <ShoppingCart /> */}
		</div>
		<div className="main">
			{children}
		</div>
		<div className="footer">
			<Logo />
			<div className="contact">
			  { /* List simple contact info. */ }
			  <>
			    <a href="mailto:jiangl1@appstate.edu">jiangl1@appstate.edu</a>
			    <a href="tel:7042945001">704-294-5001</a>
			  </>
			</div>
		</div>
	</div>
);


const RouterComponent = () =>  {
	const [page, setPage] = useState('/');
	const [isPending, startTransition] = useTransition();
	const navigate = (url) => {
		startTransition(() => {
			setPage(url);
		});
	};
	return (
		<Router>
			<Routes>
			  <Route 
				exact path="/"
				element={
					<Layout isPending={isPending}>
					<Main />
					</Layout>
					}
			  />
			</Routes>
		</Router>
	);
};	

const AppRouter = () => (
	<Suspense fallback={<Loading />}>
		<RouterComponent />
	</Suspense>
);

export default AppRouter;
