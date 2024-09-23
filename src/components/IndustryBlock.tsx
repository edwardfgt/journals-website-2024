interface IndustryBlockProps {
    name: string;
    description: string;
    audienceStats: string;
    companyNames: string[];
}

const IndustryBlock: React.FC<IndustryBlockProps> = ({ name, description, audienceStats, companyNames }) => {
    return (
        <div className="p-4 border rounded-lg shadow-md mb-4">
            <h2 className="text-3xl font-bold mb-2">{name}</h2>
            <p className="text-lg mb-2">{description}</p>
            <p className="text-md mb-2">Audience: {audienceStats}</p>
            <h3 className="text-xl font-semibold mb-2">Companies:</h3>
            <ul className="list-disc list-inside">
                {companyNames.map((company, index) => (
                    <li key={index}>{company}</li>
                ))}
            </ul>
        </div>
    )
}

export default IndustryBlock;
