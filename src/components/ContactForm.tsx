import React, { useState, FormEvent } from 'react';

const ContactForm: React.FC = () => {
    const [result, setResult] = useState<string>("");

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.currentTarget);

        // Ensure access_key is appended correctly
        const accessKey = import.meta.env.VITE_CONTACT_API_KEY;
        if (accessKey) {
            formData.append("access_key", accessKey);
        } else {
            setResult("Access key is missing");
            return;
        }

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.currentTarget.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <section className="min-h-screen bg-background flex flex-col items-center justify-center">
            <div className="px-4 mx-auto max-w-2xl">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-text">
                    Say hi
                </h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-text sm:text-xl">
                    Alternatively, send us an email mail@journals.gg
                </p>
                <form onSubmit={onSubmit} className="space-y-8">
                    <div>
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-text"
                        >
                            Your email
                        </label>
                        <input
                            type="email"
                            name="email"
                            required
                            className="border text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-background border-gray-600 placeholder-gray-400 text-text shadow-sm-light"
                            placeholder="billgates@microsoft.com"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="subject"
                            className="block mb-2 text-sm font-medium text-text"
                        >
                            Subject
                        </label>
                        <input
                            type="text"
                            name="name"
                            required
                            className="block p-3 w-full text-sm rounded-lg border focus:ring-primary-500 focus:border-primary-500 bg-background border-gray-600 placeholder-gray-400 text-text shadow-sm-light"
                            placeholder="Let us know how we can help you"
                        />
                    </div>
                    <div className="sm:col-span-2">
                        <label
                            htmlFor="message"
                            className="block mb-2 text-sm font-medium text-text"
                        >
                            Your message
                        </label>
                        <textarea
                            name="message"
                            rows={6}
                            required
                            className="block p-2.5 w-full text-sm rounded-lg border border-gray-600 focus:ring-primary-500 focus:border-primary-500 bg-background placeholder-gray-400 text-text shadow-sm-light"
                            placeholder="Your message"
                        ></textarea>
                    </div>
                    <button type="submit" className="w-full text-white bg-highlight hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-gray-700 border-gray-600 placeholder-gray-400 shadow-sm-light">
                        Send message
                    </button>
                    <span className="block mt-4 text-center text-white">{result}</span>
                </form>
            </div>
        </section>
    );
}

export default ContactForm;