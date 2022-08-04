import DefaultNavbar from './../components/DefaultNavbar';
import DefaultFooter from './../components/DefaultFooter';
import Header from './../components/favorite/Header';
import TeamSection from '../components/favorite/TeamSection';
export default function Favorite() {
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
