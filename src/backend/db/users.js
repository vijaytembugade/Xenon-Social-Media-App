import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Vijay",
    lastName: "Tembugade",
    username: "vijay",
    password: "vijay123",
    email: "vijay@xenon.com",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
