import express from "express";

const router = express.Router();

const data = [
  {
    name: "Example-1",
  },
  {
    name: "Example-2",
  },
  {
    name: "Example-3",
  },
];

router.get("/", (req, res, next) => {
  return res.json({ message: "Example Index", data });
});

export default { router };
