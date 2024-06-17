import express from "express";

const router = express.Router();

router.get('/login', (req,res) => {
    res.send("Logged In successfully.");
});

router.get('/logout', (req, res) => {
    res.send("Logged Out successfully.");
});

router.get('/signup', (req, res) => {
    res.send("Signed Up successfully.");
});

export default router;