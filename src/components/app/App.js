import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppHeader from "../appHeader/AppHeader";
import Spinner from "../spinner/Spinner";


const MainPage = lazy(() => import('../pages/MainPage'));
const ComicsPage = lazy(() => import('../pages/ComicsPage'));
const SingleComicLayout = lazy(() => import('../pages/singleComicLayout/SingleComicLayout'));
const SingleCharacterLayout = lazy(() => import('../pages/singleCharacterLayout/SingleCharacterLayout'));
const SinglePage = lazy(() => import('../pages/SinglePage'));
const Page404 = lazy(() => import('../pages/404'));


const App = () => {



	return (
		<Router>
			<div className="app">
				<AppHeader />
				<main>
					<Routes>
						<Route path='/' element={<Suspense fallback={<Spinner />}><MainPage /></Suspense>} />
						<Route path='comics' element={<Suspense fallback={<Spinner />}><ComicsPage /></Suspense>} />
						<Route path='comics/:id' element={<Suspense fallback={<Spinner />}><SinglePage Component={SingleComicLayout} dataType='comic' /></Suspense>} />
						<Route path='comics/:id' element={<Suspense fallback={<Spinner />}><SinglePage Component={SingleCharacterLayout} dataType='character' /></Suspense>} />
						<Route path='*' element={<Suspense fallback={<Spinner />}><Page404 /></Suspense>} />
					</Routes>
				</main>
			</div>
		</Router>

	)
}

export default App;