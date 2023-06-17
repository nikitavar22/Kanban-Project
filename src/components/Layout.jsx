import Header from "./headers/Header";
import Footer from "./footers/Footer";

export default function Layout ({ children }) {
    return (
        <div className="h-screen flex flex-col bg-[#0079BF]">
            <Header/>
                <main className="flex-grow">
                    { children }
                </main>
            <Footer/>
        </div>
    );
}