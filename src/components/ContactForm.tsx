import React, { useState, FormEvent } from 'react';

function ContactForm() {
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
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <form onSubmit={onSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl mb-4">Contact Us</h2>
                <input type="text" name="name" required className="w-full p-2 mb-4 border rounded" placeholder="Name" />
                <input type="email" name="email" required className="w-full p-2 mb-4 border rounded" placeholder="Email" />
                <textarea name="message" required className="w-full p-2 mb-4 border rounded" placeholder="Message"></textarea>
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Submit Form</button>
                <span className="block mt-4 text-center">{result}</span>
            </form>
        </div>
    );
}

export default ContactForm;