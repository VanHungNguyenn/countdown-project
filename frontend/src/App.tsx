import { MainLayout } from '@/components/layouts';
import { ROUTE_PATH } from '@/constants';
import DemoFormPage from '@/pages/demo/demo-form';
import DemoTablePage from '@/pages/demo/demo-table';
import LoginPage from '@/pages/login';
import NotFoundPage from '@/pages/not-found';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route
          path={ROUTE_PATH.HOME}
          element={
            <PrivateRoute>
              <MainLayout>
                <h1 className="font-bold text-xl">Welcome to the App!</h1>
              </MainLayout>
            </PrivateRoute>
          }
        /> */}
        <Route path={ROUTE_PATH.HOME}>
          <Route index element={<Navigate to={ROUTE_PATH.DEMO.TABLE} replace />} />

          <Route path={ROUTE_PATH.DEMO.INDEX}>
            <Route index element={<Navigate to={ROUTE_PATH.DEMO.TABLE} replace />} />
            <Route
              path={ROUTE_PATH.DEMO.TABLE}
              element={
                // <PrivateRoute>
                <MainLayout>
                  <DemoTablePage />
                </MainLayout>
                // </PrivateRoute>
              }
            />
            <Route
              path={ROUTE_PATH.DEMO.FORM}
              element={
                // <PrivateRoute>
                <MainLayout>
                  <DemoFormPage />
                </MainLayout>
                // </PrivateRoute>
              }
            />
          </Route>
        </Route>
        <Route path={ROUTE_PATH.AUTH.LOGIN} element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
