interface IndustryBlockProps {
    name: string;
    description: string;
    audienceStats: string;
    companyNames: string[];
    imageUrl: string;
}

const IndustryBlock: React.FC<IndustryBlockProps> = ({ name, description, audienceStats, companyNames, imageUrl }) => {
    return (
        <div className="card bg-text w-96 shadow-xl rounded-b-lg">
            <figure>
                <img
                    src={imageUrl}
                    alt={name}
                    className="h-48 w-full object-cover rounded-t-lg"
                />
            </figure>
            <div className="card-body bg-text rounded-b-lg">
                <h2 className="card-title text-white text-4xl">{name}</h2>
                <p className="text-white">{description}</p>
                <p className="text-white">Audience: {audienceStats}</p>
                <h3 className="text-xl font-semibold mb-2 text-white">Companies:</h3>
                <ul className="list-disc list-inside text-white">
                    {companyNames.map((company, index) => (
                        <li key={index}>{company}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default IndustryBlock;
