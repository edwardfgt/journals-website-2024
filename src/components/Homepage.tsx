import HeadingBlock from './HeadingBlock';
import StatBar from './StatBar';

const Home: React.FC = () => {
    return (
        <div className="bg-background min-h-screen flex flex-col items-center justify-center">
            <HeadingBlock />
            <StatBar />
            <div className="flex flex-col items-center justify-center mt-40">
                <h1 className="text-6xl font-bold text-text">
                    Our Industries
                </h1>
            </div>
        </div>
    )
}

export default Home;