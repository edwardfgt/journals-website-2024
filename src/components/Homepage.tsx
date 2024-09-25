import HeadingBlock from './HeadingBlock';
import StatBar from './StatBar';
import IndustrySection from './IndustrySection';
import SponsorGrid from './SponsorGrid';
const Home: React.FC = () => {
    return (
        <div className="bg-background min-h-screen flex flex-col items-center pb-20">
            <div className="flex flex-col items-center justify-center min-h-screen pb-20">
                <HeadingBlock />
                <StatBar />
                <p className='text-text pt-5 text-lg'>Creator? <a href="https://creator.journals.gg/" className="text-highlight">Click here</a></p>
            </div>

            <div className="flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold text-text">
                    Our Industries
                </h1>
            </div>
            <IndustrySection />

            <div className="flex flex-col items-center justify-center mt-20">
                <h1 className="text-4xl font-bold text-text">
                    Trusted by
                </h1>
            </div>
            <SponsorGrid />
        </div>
    )
}

export default Home;