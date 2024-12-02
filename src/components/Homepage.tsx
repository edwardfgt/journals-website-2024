import HeadingBlock from './HeadingBlock';
import StatBar from './StatBar';
import IndustrySection from './IndustrySection';
import SponsorGrid from './SponsorGrid';
const Home: React.FC = () => {
    return (
        <div className="bg-background min-h-screen flex flex-col items-center pb-20">
            <div className="flex flex-col items-center justify-center min-h-screen pb-20 px-4 sm:px-0">
                <HeadingBlock />
                <StatBar />
                <p className='text-text pt-5 text-lg text-center'>Creator? <a href="https://creator.journals.gg/" className="text-highlight">Click here</a></p>
            </div>

            <div className="flex flex-col items-center justify-center mt-20 px-4 sm:px-0">
                <h1 className="text-4xl font-bold text-text text-center">
                    Trusted by
                </h1>
            </div>
            <SponsorGrid />

            <div className="flex flex-col items-center justify-center px-4 mt-40sm:px-0">
                <h1 className="text-4xl font-bold text-text text-center mt-40">
                    Our Industries
                </h1>
            </div>
            <IndustrySection />


        </div>
    )
}

export default Home;