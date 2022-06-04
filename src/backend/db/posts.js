import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: "p1m3",
    title: "Point to be noted!",
    content:
      "The point to be noted while developing the application is - Regardless of which code organization patterns are used for a file (standalone or module), you should still think of each file as its own program, which may then cooperate with other programs to perform the functions of your overall application.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    isPublic: true,
    username: "yash",
    createdAt: "2022-06-05T02:17:23+05:30",
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "vijay",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "mihir",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: "p1m2",
    title:
      "NASA Scientists Discover Extraordinary Set Of Rings Encompassing A Black Hole With A Companion Star",
    content:
      "Many supersonic images come to mind when we think of black holes. This image shows a spectacular set of rings surrounding a black hole that was captured by NASA's Chandra X-ray Observatory and Neil Gehrels Swift Observatory.The black hole is part of the binary system 'V404 Cygni', which is located approximately 7,800 light years away from our planet. Swift revealed a burst of X-rays from V404 Cygni on June 5, 2015. The high-energy rings were created by an occurrence known as 'light echoes.X-rays from Chandra (light blue) were merged with optical data from Hawaii's Pan-STARRS telescope to demonstrate the stars in the visual field in this visual picture. The image is made up of eight concentric rings. Each ring is formed by X-rays reflected off various dust clouds by V404 Cygni flares witnessed in 2015 The black hole is actively drawing matter away from a companion star with roughly half the size of the Sun, forming a disc all around hidden object. Because this material lights up in X-rays, astronomers call these systems X-ray binaries.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    isPublic: true,
    username: "vijay",
    comments: [
      {
        _id: uuid(),
        username: "yash",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "mihir",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: "2022-04-05T02:17:23+05:30",
    updatedAt: formatDate(),
  },
];
