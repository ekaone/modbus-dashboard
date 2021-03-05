import React, { useEffect, useState } from "react";
import Head from "next/head";
import Pusher from "pusher-js";
import Particles from "react-particles-js";

import styles from "../styles/Home.module.css";

// components
// import { Layout } from "../components";
// import MyParticles from "../components/myparticles";

// const pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_APP_KEY, {
//   cluster: process.env.NEXT_PUBLIC_PUSHER_APP_CLUSTER,
//   encrypted: true,
// });

export default function Home() {
  // const [val, setVal] = useState("");

  // useEffect(() => {
  //   const channel = pusher.subscribe("my-channel");

  //   channel.bind("my-event", function (data) {
  //     setVal(data);
  //   });

  //   console.log(val);

  //   return () => channel.unsubscribe("my-event");
  // }, [val]);

  return (
    <>
      <Particles
        params={{
          particles: {
            number: {
              value: 70,
            },
            size: {
              value: 5,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
        }}
        width="1200px"
        height="500px"
      />
    </>
  );
}
