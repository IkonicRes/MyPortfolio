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
                    <section className="form-row">
                        <label htmlFor="name"><p>Your Name:</p></label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </section>
                    <section className="form-row">
                    <label htmlFor="email"><p>Email:</p></label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    </section>
                    <section className="form-row">
                    <label htmlFor="project-type"><p>Project Type:</p></label>
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
                    </section>
                    <section className="form-row">
                    <label htmlFor="budget"><p>Budget Range:</p></label>
                    <input
                        type="text"
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                    />
                    </section>
                    <section className="form-row">
                    <label htmlFor="deadline"><p>Project Deadline:</p></label>
                    <input
                        type="date"
                        id="deadline"
                        name="deadline"
                        value={formData.deadline}
                        onChange={handleChange}
                    />
                    </section>
                    <label htmlFor="message"><p>Project Details:</p></label>
                    <textarea
                        id="message"
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>
                <button className="submit-button" type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}