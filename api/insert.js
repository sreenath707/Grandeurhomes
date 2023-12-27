import mongoose from "mongoose";
import Listing from "./models/listingModel.js";

mongoose
  .connect(
    "mongodb+srv://sreenath:sreenath707@cluster0.x9z2p.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(process.env.MONGO);
    console.log(err);
  });

let resorts = [
  {
    name: "Harden Valley",
    description: "A good place to live",
    address: "Harden Valley, 906, TX",
    regularPrice: 499500,
    discountPrice: 300000,
    bathrooms: 3,
    bedrooms: 3,
    furnished: true,
    parking: true,
    type: "room",
    offer: true,
    imageUrls: [
      "https://www.thegari.in/blog/wp-content/uploads/2020/10/pexels-media-1134176-scaled.jpeg",
    ],
    userRef: "user",
  },
];

Listing.insertMany(resorts)
  .then((data) => {
    console.log("inserted");
  })
  .catch((err) => {
    console.log(err);
  });
