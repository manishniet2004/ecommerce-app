import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'
import cartRouter from './routes/cartRoute.js'

// 1. App Config
const app = express()
const port = process.env.PORT || 4000

// 2. Connect DB & Services
connectDB()
connectCloudinary()

// 3. Middlewares (MUST BE BEFORE ROUTES)
app.use(express.json()) // This allows the server to read your Thunder Client data
app.use(cors())

// 4. API Endpoints
app.use('/api/user', userRouter)
app.use('/api/product', productRouter)
app.use('/api/cart', cartRouter) 

app.get('/', (req, res) => {
    res.send("API Working")
})

// 5. Start Server
app.listen(port, () => console.log('Server started on PORT:' + port))