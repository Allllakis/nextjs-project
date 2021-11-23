import React from "react";
import MeetupList from "../components/meetups/MeetupList";


const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/e/ee/Sagrada_Familia_01.jpg",
    address: "Some addres 5, 12345 Some City",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/e/ee/Sagrada_Familia_01.jpg",
    address: "Some addres 85, 12345 Some City",
    description: "This is a Second meetup!",
  },
];

const HomePage = (props) => {
  return  <MeetupList meetups={props.meetups} />;
}



export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS
    }
  }
}

export default HomePage;
