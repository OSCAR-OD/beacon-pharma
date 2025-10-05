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
const UserPage = lazy(() => import("./Pages/UserPage"));
const CreateDoctorPage = lazy(() => import("./Pages/CreateDoctor"));
const DoctorListPage = lazy(() => import("./Pages/DoctorListPage"));
const DoctorProfilePage = lazy(() => import("./Pages/DoctorProfile"));
const SearchPage = lazy(() => import("./Pages/SearchPage"));
import PatientProfile from "./Pages/PatientProfile";
import AppointmentPage from "./Pages/AppointmentPage";
import DoctorStatus from "./Pages/DoctorStatus";
import PaymentPage from "./Pages/PaymentPage";
import DisbursementPage from "./Pages/DisbursementPage";
import PrescriptionPage from "./Pages/PrescriptionPage";
import DashboardPage from "./Pages/DashboardPage";
import ChatPage from "./Pages/ChatPage";
import FaqPage from "./Pages/FaqPage";
import ChatMessages from "./Pages/ChatMessages";
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
        <Route path="doctor-details-page/:id" element={ <Suspense fallback={<LoadingPage />}> {" "} <DoctorDetailPage />{" "} </Suspense> } />
        <Route path="user" element={ <Suspense fallback={<LoadingPage />}> {" "} <UserPage />{" "} </Suspense> } />
        <Route path="create-doctor" element={ <Suspense fallback={<LoadingPage />}> {" "} <CreateDoctorPage />{" "} </Suspense> } />
        <Route path="doctor-list" element={ <Suspense fallback={<LoadingPage />}> {" "} <DoctorListPage />{" "} </Suspense> } />
        <Route path="doctor-profile/:id" element={ <Suspense fallback={<LoadingPage />}> {" "} <DoctorProfilePage />{" "} </Suspense> } />
        <Route path="doctor-status/:id" element={ <Suspense fallback={<LoadingPage />}> {" "} <DoctorStatus />{" "} </Suspense> } />
        <Route path="patient-profile/:id" element={ <Suspense fallback={<LoadingPage />}> {" "} <PatientProfile />{" "} </Suspense> } />
        <Route path="search" element={ <Suspense fallback={<LoadingPage />}> {" "} <SearchPage />{" "} </Suspense> } />
        <Route path="payment" element={ <Suspense fallback={<LoadingPage />}> {" "} <PaymentPage />{" "} </Suspense> } />
        <Route path="prescription" element={ <Suspense fallback={<LoadingPage />}> {" "} <PrescriptionPage />{" "} </Suspense> } />
        <Route path="disbursement" element={ <Suspense fallback={<LoadingPage />}> {" "} <DisbursementPage />{" "} </Suspense> } />
        <Route path="appointment" element={ <Suspense fallback={<LoadingPage />}> {" "} <AppointmentPage/>{" "} </Suspense> } />
        <Route path="dashboard" element={ <Suspense fallback={<LoadingPage />}> {" "} <DashboardPage />{" "} </Suspense> } />
        <Route path="chat" element={ <Suspense fallback={<LoadingPage />}> {" "} <ChatPage />{" "} </Suspense> } />
        <Route path="chat-page" element={ <Suspense fallback={<LoadingPage />}> {" "} <ChatMessages />{" "} </Suspense> } />
        <Route path="faq" element={ <Suspense fallback={<LoadingPage />}> {" "} <FaqPage />{" "} </Suspense> } />
      </Routes>
    {/* // </ProviderWrapper> */}
    </BrowserRouter>
  );
}

export default App;
