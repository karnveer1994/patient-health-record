import React from 'react';

const Automate: React.FC = () => {
    const heading: string = "Automate";
    const heading1: string = "Continuously collect outcomes across the care journey.";
    const content: string = "Maximize clinical and operational efficiency by automating the collection of patient-outcomes data through evidence-based workflows. Triggered by disease status, visit type, procedure codes, and more, these workflows enable you to monitor patient progress, predict patient outcomes, and improve care delivery.";

    return (
        <div className='automate_container'>
            <h2 className='auto_head'>{heading}</h2>
            <h1 className='content_head'>{heading1}</h1>
            <p className='para_head'>{content}</p>
            <a className="learn-button" href='#'>LEARN MORE {"\u{27A1}"}</a>
        </div>
    );
}

export default Automate;
