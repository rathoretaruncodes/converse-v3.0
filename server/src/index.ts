import express from "express";
const app = express();

app.get("/", (req, res) => {
    res.send("Hello Linus!")
})
const port = 5001;
app.listen(port, () => {
    console.log(`Server is running on port: ${5001}`);
});