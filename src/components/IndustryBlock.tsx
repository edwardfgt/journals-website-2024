interface IndustryBlockProps {
    name: string;
    description: React.ReactNode;
    imageUrl: string;
}

const IndustryBlock: React.FC<IndustryBlockProps> = ({ name, description, imageUrl }) => {
    return (
        <div className="card bg-text w-full sm:w-80 md:w-96 shadow-xl rounded-b-lg hover:shadow-black hover:shadow-2xl transition duration-300">
            <figure>
                <img
                    src={imageUrl}
                    alt={name}
                    className="h-40 sm:h-48 w-full object-cover rounded-t-lg"
                />
            </figure>
            <div className="card-body bg-text rounded-b-lg industry-block-height p-4 sm:p-6">
                <h2 className="card-title text-white text-2xl sm:text-3xl md:text-4xl">{name}</h2>
                <p className="text-white text-sm sm:text-base">{description}</p>
                <ul className="list-disc list-inside text-white">
                </ul>
            </div>
        </div>
    )
}

export default IndustryBlock;
