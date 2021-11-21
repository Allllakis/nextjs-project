import React from 'react'
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

const NeweetupPage = () => {
    function addMeetupHandler(enteredMeetupData){
        console.log(enteredMeetupData)
    }
    return (
       <NewMeetupForm onAddMeetup={addMeetupHandler} />
    )
}

export default NeweetupPage
