import './globals.scss';
import {Roboto} from 'next/font/google';
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import AppProvider from "../components/AppContext";

const inter = Roboto({subsets: ['latin'], weight: ['400', '500', '700']});

export const metadata = {
    title: 'Pizza shop',
    description: 'Pizza shop',
    icons: {
        icon: '/favicon.png',
    },
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <div className="flex flex-col min-h-screen container max-w-6xl mx-auto p-4">
            <AppProvider>
                <Header/>
                <main className="max-w-6xl mx-auto w-full p-4 flex-grow">
                    {children}
                </main>
                <Footer/>
            </AppProvider>

            <ToastContainer/>
        </div>
        </body>

        </html>
    );
}
