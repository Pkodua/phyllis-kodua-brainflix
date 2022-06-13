const express = require("express");
const router = express.Router();
const helper = require("../helper/helper");
//This package will generate a unique id for each new video
const uuid = require("uuid");

const videosJsonFile = `${__dirname}/../model/videos.json`;
const videoDetailsJsonFile = `${__dirname}/../model/videoDetails.json`;

const videos = helper.readJSONFile(videosJsonFile);
const videoDetails = helper.readJSONFile(videoDetailsJsonFile);

router.get("/", (req, res) => {
  return res.send(Object.values(videos));
});

router.get("/:videosId", (req, res) => {
  // specific video id
  return res.send(
    videoDetails.filter(video => video.id === req.params.videosId)
  );
});

//create a new video
router.post("/", (req, res) => {
  const newVideo = {
    image: "https://i.imgur.com/1vH49b6.jpg",
    title: "Bird on Ice",
    channel: "Miguel Chiau",
    //generate a unique id for each video
    id: uuid.v4()
  };

  videos.push(newVideo);

  helper.writeJSONFile(videosJsonFile, videos);

  const newVideoDetails = {
    id: uuid.v4(),
    title: req.body.title,
    channel: "Miguel Chiau",
    image: "https://i.imgur.com/1vH49b6.jpg",
    description: req.body.description,
    views: "1000",
    likes: "2000",
    duration: "4:01",
    video: "https://project-2-api.herokuapp.com/stream",
    timestamp: 1545162149000,
    comments: [
      {
        name: "Micheal Lyons",
        comment:
          "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of acconcert I have EVER witnessed.",
        id: "1ab6d9f6-da38-456e-9b09-ab0acd9ce818",
        likes: 0,
        timestamp: 1545162149000
      },
      {
        name: "Gary Wong",
        comment:
          "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
        id: "cc6f173d-9e9d-4501-918d-bc11f15a8e14",
        likes: 0,
        timestamp: 1544595784046
      },
      {
        name: "Theodore Duncan",
        comment:
          "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
        id: "993f950f-df99-48e7-bd1e-d95003cc98f1",
        likes: 0,
        timestamp: 1542262984046
      }
    ]
  };
  videoDetails.push(newVideoDetails);

  helper.writeJSONFile(videoDetailsJsonFile, videoDetails);
  res.send(newVideo);
});

module.exports = router;