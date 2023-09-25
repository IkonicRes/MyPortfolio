import React, { useState } from "react";
import "./Contact.css"

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        projectType: "web-design",
        budget: "",
        deadline: "",
        message: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add logic here to validate and send the formData to the server
    };

    return (
        <div className="component">
            <h2>Contact</h2>
            <p>Please fill out the form below:</p>
            <div className="contact"> {/* Apply the "contact" class here */}
                <form className="contact-form" onSubmit={handleSubmit}>
                    <label htmlFor="name">Your Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
        
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
        
                    <label htmlFor="project-type">Project Type:</label>
                    <select
                        id="project-type"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                    >
                        <option value="web-design">Web Design</option>
                        <option value="web-development">Web Development</option>
                        <option value="e-commerce">E-Commerce</option>
                        <option value="other">Other</option>
                    </select>
        
                    <label htmlFor="budget">Budget Range:</label>
                    <input
                        type="text"
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                    />
        
                    <label htmlFor="deadline">Project Deadline:</label>
                    <input
                        type="date"
                        id="deadline"
                        name="deadline"
                        value={formData.deadline}
                        onChange={handleChange}
                    />
        
                    <label htmlFor="message">Project Details:</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>
                <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}