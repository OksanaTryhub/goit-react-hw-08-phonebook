import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'));
const AddContactPage = lazy(() =>
  import('pages/AddContactPage/AddContactPage')
);
const FilterContactsPage = lazy(() =>
  import('pages/FilterContactsPage/FilterContactsPage')
);
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));

const UserRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />

        <Route path="/contacts" element={<ContactsPage />}>
          <Route path="add-contact" element={<AddContactPage />} />
          <Route path="filter" element={<FilterContactsPage />} />
        </Route>
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
