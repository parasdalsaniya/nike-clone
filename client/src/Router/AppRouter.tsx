import { Route, Routes } from "react-router-dom";
import {
  HomePage,
  MenPage,
  WomenPage,
  KidsPage,
  SalePage,
  SneakersPage,
  FeaturePage,
  CartPage,
  LoginPage,
  RegisterPage,
  ErrorPage,
  CheckoutPage,
  ProfilePage,
  PaymentPage,
  AdminPage,
} from "../pages/index";
import PrivateRoutes from "../components/PrivateRoutes/PrivateRoutes";
import PreventOnLogin from "../components/PrivateRoutes/PrventonLogin";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/men" element={<MenPage />} />
        <Route path="/women" element={<WomenPage />} />
        <Route path="/kids" element={<KidsPage />} />
        <Route path="/sale" element={<SalePage />} />
        <Route path="/featured" element={<FeaturePage />} />
        <Route path="/sneakers" element={<SneakersPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route
          path="/checkout"
          element={
            <PrivateRoutes>
              <CheckoutPage />
            </PrivateRoutes>
          }
        />
        <Route
          path="/login"
          element={
            <PreventOnLogin>
              <LoginPage />
            </PreventOnLogin>
          }
        />
        <Route
          path="/profile/*"
          element={
            <PrivateRoutes>
              <ProfilePage />
            </PrivateRoutes>
          }
        />

        <Route
          path="/admin/*"
          element={
            <PrivateRoutes>
              <AdminPage />
            </PrivateRoutes>
          }
        />
        <Route
          path="/register"
          element={
            <PreventOnLogin>
              <RegisterPage />
            </PreventOnLogin>
          }
        />
        <Route
          path="/payment-complete"
          element={
            <PrivateRoutes>
              <PaymentPage />
            </PrivateRoutes>
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default AppRouter;
