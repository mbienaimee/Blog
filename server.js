import express from "express"
import mongoose from "mongoose"
import expressLayouts from "express-ejs-layouts"
import dotenv from "dotenv"
dotenv.config()
const app =express()

app.use(express.static('public'))

//templating
app.use(expressLayouts)
app.set('layout','./layouts/main')
app.set('view engine','ejs')