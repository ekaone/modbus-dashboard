const Pusher = require("pusher");

const pusher = new Pusher({
  // appId: process.env.PUSHER_APP_ID,
  // key: process.env.PUSHER_KEY,
  // secret: process.env.PUSHER_SECRET,
  // cluster: process.env.PUSHER_CLUSTER,
  // useTLS: true,
  appId: "1159504",
  key: "b40ccf3305c1a0013d14",
  secret: "58b83da932c06384bf3b",
  cluster: "ap1",
  useTLS: true,
});

setInterval(() => {
  pusher
    .trigger("my-channel", "my-event", {
      message: Math.random(),
    })
    .then(console.log)
    .catch((e) => console.log(e));
}, 7000);
