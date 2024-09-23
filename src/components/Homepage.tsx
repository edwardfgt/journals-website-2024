import HeadingBlock from './HeadingBlock';
import StatBar from './StatBar';
import IndustryBlock from './IndustryBlock';

const Home: React.FC = () => {
    return (
        <div className="bg-background min-h-screen flex flex-col items-center justify-center">
            <HeadingBlock />
            <StatBar />
            <p className='text-text pt-5 text-lg'>Creator? <a href="https://creator.journals.gg/" className="text-highlight">Click here</a></p>
            <div className="flex flex-col items-center justify-center mt-40">
                <h1 className="text-6xl font-bold text-text">
                    Our Industries
                </h1>
            </div>
            <div className="flex flex-col items-center justify-center mt-10 w-full">
                <IndustryBlock
                    name="Finance"
                    description="Innovative solutions and cutting-edge technology."
                    audienceStats="60K+ readers"
                    companyNames={["TechCorp", "InnovateX", "FutureTech"]}
                />
                <IndustryBlock
                    name="Healthcare"
                    description="Advancing medical science and patient care."
                    audienceStats="500K+ readers"
                    companyNames={["HealthPlus", "MediCare", "Wellness Inc."]}
                />
            </div>
        </div>
    )
}

export default Home;