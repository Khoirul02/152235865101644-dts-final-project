import DefaultNavbar from './../components/DefaultNavbar';
import DefaultFooter from './../components/DefaultFooter';
import Header from './../components/kategori/Header';
import TeamSection from '../components/kategori/TeamSection';
export default function Kategori() {
    return (
        <>
            <div className="absolute w-full z-20">
                <DefaultNavbar />
            </div>
            <main>
                <Header />
                <TeamSection />
            </main>
            <DefaultFooter />
        </>
    );
}