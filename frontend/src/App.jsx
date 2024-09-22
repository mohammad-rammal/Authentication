import {Navigate, Route, Routes} from 'react-router-dom';
import FloatingShape from './components/FloatingShape';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Home from './pages/Home';
import EmailVerification from './pages/EmailVerification';
import {Toaster} from 'react-hot-toast';
import {useAuthStore} from './store/authStore';
import {useEffect} from 'react';

import LoadingSpinner from './components/LoadingSpinner';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import Cursor from './utils/Cursor';
import Footer from './pages/Footer';

// protect routes that requires auth
const ProtectedRoute = ({children}) => {
    const {isAuthenticated, user} = useAuthStore();

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    if (!user.isVerified) {
        return <Navigate to="/verify-email" replace />;
    }

    return children;
};

// redirect auth user to home page
const RedirectAuthenticatedUser = ({children}) => {
    const {isAuthenticated, user} = useAuthStore();

    if (isAuthenticated && user.isVerified) {
        return <Navigate to="/" replace />;
    }

    return children; // current page
};

function App() {
    const {isCheckingAuth, checkAuth} = useAuthStore();

    useEffect(() => {
        checkAuth();
    }, [checkAuth]);

    // console.log('isAuthenticated', isAuthenticated);
    // console.log('user', user);
    if (isCheckingAuth) {
        return <LoadingSpinner />;
    }
    return (
        <div className="flex justify-center items-center min-h-screen overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
            <div className="fixed top-0 -z-10 h-full w-full bg-slate-950">
                <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
            </div>

            <FloatingShape color="bg-blue-500" size="w-64 h-64" top="-5%" left="10%" delay={0} />
            <FloatingShape color="bg-blue-500" size="w-48 h-48" top="30%" left="50%" delay={5} />
            <FloatingShape color="bg-blue-500" size="w-32 h-32" top="10%" left="80%" delay={2} />
            <Cursor />
            <Routes>
                <Route
                    path="/"
                    element={
                        <ProtectedRoute>
                            <Home />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/sign-up"
                    element={
                        <RedirectAuthenticatedUser>
                            <SignUp />
                        </RedirectAuthenticatedUser>
                    }
                />
                <Route
                    path="/login"
                    element={
                        <RedirectAuthenticatedUser>
                            <Login />
                        </RedirectAuthenticatedUser>
                    }
                />
                <Route path="/verify-email" element={<EmailVerification />} />
                <Route
                    path="/forgot-password"
                    element={
                        <RedirectAuthenticatedUser>
                            <ForgotPassword />
                        </RedirectAuthenticatedUser>
                    }
                />
                <Route
                    path="/reset-password/:token"
                    element={
                        <RedirectAuthenticatedUser>
                            <ResetPassword />
                        </RedirectAuthenticatedUser>
                    }
                />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
            <Footer />
            <Toaster />
        </div>
    );
}

export default App;
