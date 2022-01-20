import React from 'react'
import JobOfferList from '../ComponentsCandidate/firstView/JobOfferList.jsx'
import JobOpportunities from '../ComponentsCandidate/firstView/JobOpportunities.jsx'

const firstViewCandidate = () => {
    return(
        <>
            <JobOpportunities/>
            <JobOfferList/>
        </>
    )
}

export default firstViewCandidate