import HeadingBlock from './HeadingBlock';
import StatBar from './StatBar';

function Home() {
    return (
        <div className="bg-background min-h-screen flex flex-col items-center justify-center">
            <HeadingBlock />
            <StatBar />
        </div>
    )
}

export default Home;