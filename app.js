const express = require("express");
const app = express();
const PORT = 3000
const db = require("./db")

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));

app.get("/", (req, res) => {
    res.render('index');
})
app.get("/index", (req, res) => {
    res.render('index');
})
app.get('/profile', (req, res) => {
    res.render('profile');
})
app.get('/kontak', (req, res) => {
    res.render('kontak');
})

app.get("/user", async (req, res) => {
    try {
        const dataUser = await db("user").select("*")
        res.status(200).json(dataUser)
    } catch (error) {
        res.status(500).json(error)
    } 
})

app.post("/user", async (req, res) => {
    const { nama_user, jabatan } = req.body
    const inputUser = {
        nama_user,
        jabatan,
        created_at: new Date(),
        update_at: new Date()
    }
    try {
        const dataUserId = await db("user").insert(inputUser).returning("id")

        res.status(201).json(dataUserId)
    } catch (error) {
        res.status(500).json(error)
    } 
})



app.put("/user/:id", async (req, res) => {
    const id_input = req.params.id
    const { nama_user, jabatan } = req.body

    const currentDate = new Date()
    const userInput = {
        nama_user,
        jabatan,
        update_at: currentDate
    }
    try {
        const updateData = await db("user")
        .where({ id: id_input })
        .update(userInput)
        .returning("nama_user", "jabatan")

        res.status(202).json(updateData)
    } catch (error) {
        res.status(500).json(error)
    } 
})

app.delete("/user/:id", async (req, res) => {
    const id_input = req.params.id
    try {
        const deleteData = await db("user").where({id:id_input}).del()
        res.status(202).json("deleted")
    } catch (error) {
        res.status(500).json(error)
    } 
})

app.listen(PORT, ()=>console.log('Website run pada port 3000'))
