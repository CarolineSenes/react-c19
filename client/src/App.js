import { Suspense } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import styles from './App.module.scss';

function App() {
  const user = useLoaderData()
  console.log("user: ", user)

  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
      <Header />
      <div className="flex-fill d-flex flex-column">
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}
export default App;
