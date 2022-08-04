import DefaultNavbar from './../components/DefaultNavbar';
import DefaultFooter from './../components/DefaultFooter';
import Header from './../components/filter/Header';
import TeamSection from '../components/filter/TeamSection';
export default function DetailKategori() {
    return (
        <>
            <div className="absolute w-full z-20">
                <DefaultNavbar />
            </div>
            <main>
                <Header />
                <TeamSection/>
            </main>
            <DefaultFooter />
        </>
    );
}