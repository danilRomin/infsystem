// index

import express from "express"
import mysql from "mysql";
import cors from "cors"

const app = express()

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "infsystem"
})

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.json("backend")
})

app.get("/warehouse", (req, res) => {
    const q = "SELECT * FROM warehouse"
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.post("/warehouse", (req, res) => {
    const q = "INSERT INTO warehouse (`name`, `cost`, `quantity`, `quantitySales`) VALUES (?)"
    const values = [
        req.body.name,
        req.body.cost,
        req.body.quantity,

    ]

    db.query(q, [values], (err, data) => {
        if (err) return res.json(err)
        return res.json("success db")
    })
})

app.get("/warehouse", (req, res) => {
    const q = "SELECT * FROM warehouse"
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.get("/stats", (req, res) => {
    const q = "SELECT id, name, cost, quantitySales FROM warehouse"

    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.get("/services", (req, res) => {
    const q = "SELECT * FROM services"
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.post("/services", (req, res) => {
    const q = "INSERT INTO services (`name`, `cost`) VALUES (?)"
    const values = [
        req.body.name,
        req.body.cost,
    ]

    db.query(q, [values], (err, data) => {
        if (err) return res.json(err)
        return res.json("success db")
    })
})

app.get("/loyalty", (req, res) => {
    const q = "SELECT * FROM loyalty"
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.post("/loyalty", (req, res) => {
    const q = "INSERT INTO loyalty (`name`, `bonus`, `phone`, `birthday`) VALUES (?)"
    const values = [
        req.body.name,
        req.body.bonus,
        req.body.phone,
        req.body.birthday,
    ]

    db.query(q, [values], (err, data) => {
        if (err) return res.json(err)
        return res.json("success db")
    })
})

app.listen(8888, () => {
    console.log("backend is started")
})