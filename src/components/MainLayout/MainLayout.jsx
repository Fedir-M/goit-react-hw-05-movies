import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from 'components/NavigationBar';
import Loader from 'components/Loader';

const MainLayout = () => {
  return (
    <div>
      <NavigationBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MainLayout;
