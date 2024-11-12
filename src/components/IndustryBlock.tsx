interface IndustryBlockProps {
    name: string;
    description: React.ReactNode;
    imageUrl: string;
}

const IndustryBlock: React.FC<IndustryBlockProps> = ({ name, description, imageUrl }) => {
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
                <ul className="list-disc list-inside text-white">
                </ul>
            </div>
        </div>
    )
}

export default IndustryBlock;
