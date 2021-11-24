import React from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = () => {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/e/ee/Sagrada_Familia_01.jpg"
      title="First Meetup"
      address="Some Street 5, Some City"
      description="A First Meetup"
    />
  );
};

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1'
        }
      },
      {
        params: {
          meetupId: 'm2'
        }
      }
    ]
  }
}

export async function getStaticProps(context) {

  const meetupId = context.params.meetupId;
  return {
    props: {
      meetupData: {
        image: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Sagrada_Familia_01.jpg",
        id: meetupId,
        title:"First Meetup",
        address:"Some Street 5, Some City",
        description:"A First Meetup"
      }
    }
  }
}

export default MeetupDetails;
