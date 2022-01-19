import React from 'react';
import WhatWillYouDo from './WhatWillYouDo';
import OpportunityConditions from './OpportunityConditions';
import OfferButtons from './UserButtons';

const experienceItems = [
    "Have at least four years of experience with React.js",
    "Possess extensive knowledge of JavaScript and web stacks, libraries, and frameworks.",
    "Offer interpersonal, communication, and collaboration skills."
]
const perkItems = [
    "Personalized salary.",
    "100% Health insurance.",
    "Be treated like a Talent, not a number."
]
const OpportunityDetails = () => {

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <WhatWillYouDo />
            </div>

        
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <OpportunityConditions kind="experience" items={experienceItems} />
                <OpportunityConditions kind="perk" items={perkItems} />
            </div>
            
            <div style={{display:'flex', justifyContent:'center', marginX: 5}}>
            <OfferButtons textContent= "Apply"/>
            <OfferButtons textContent= "Refer"/>
            </div>
        </div>

    )

}

export default OpportunityDetails