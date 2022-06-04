import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: "vm123ku",
    firstName: "Vijay",
    lastName: "Tembugade",
    username: "vijay",
    password: "vijay123",
    email: "vijay@xenon.com",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    imgUrl:
      "https://i.pinimg.com/originals/49/e5/63/49e5631e24fd43af0287e45d3322162c.png",
  },
  {
    _id: "vm123ky",
    firstName: "Yash",
    lastName: "Ghodekar",
    username: "yash",
    password: "vijay123",
    email: "yash@xenon.com",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    imgUrl: "https://pngimg.com/uploads/pokemon/small/pokemon_PNG122.png",
  },
  {
    _id: "vm123kj",
    firstName: "Mihir",
    lastName: "Tamkhane",
    username: "mihir",
    password: "vijay123",
    email: "mihir@xenon.com",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    imgUrl:
      "https://i.pinimg.com/736x/85/1e/cf/851ecf1b1c06cb071c37fb3c6de2ea4a.jpg",
  },
];
