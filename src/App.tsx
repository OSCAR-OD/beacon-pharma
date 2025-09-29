import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
//const ProviderWrapper = lazy(() => import("./Provider/ProviderWrapper"));
const LoadingPage = lazy(() => import("./Components/Loader/LoadingPage"));
const LoginPage = lazy(() => import("./Pages/LoginPage"));
const ResetPasswordPage = lazy(() => import("./Pages/ResetPassword"));
const ResetAccountPage = lazy(() => import("./Pages/ResetAccount"));
const AdminPanelPage = lazy(() => import("./Pages/AdminPage"));
const ApprovalPage = lazy(() => import("./Pages/ApprovalPage"));
const DoctorDetailPage = lazy(() => import("./Pages/DoctorDetail"));
function App() {
  return (
     <BrowserRouter>
    {/* // <ProviderWrapper> */}
      <Routes>
        <Route
  path="/"
  element={
    <Suspense fallback={<LoadingPage />}> <LoginPage /></Suspense>} />
        <Route path="login" element={ <Suspense fallback={<LoadingPage />}> {" "} <LoginPage />{" "} </Suspense> } />
        <Route path="reset-password" element={ <Suspense fallback={<LoadingPage />}> {" "} <ResetPasswordPage />{" "} </Suspense> } />
        <Route path="reset-account" element={ <Suspense fallback={<LoadingPage />}> {" "} <ResetAccountPage />{" "} </Suspense> } />
        <Route path="admin-dashboard" element={ <Suspense fallback={<LoadingPage />}> {" "} <AdminPanelPage />{" "} </Suspense> } />
        <Route path="approval-page" element={ <Suspense fallback={<LoadingPage />}> {" "} <ApprovalPage />{" "} </Suspense> } />
        <Route path="doctor-detail-page" element={ <Suspense fallback={<LoadingPage />}> {" "} <DoctorDetailPage />{" "} </Suspense> } />
      </Routes>
    {/* // </ProviderWrapper> */}
    </BrowserRouter>
  );
}

export default App;
