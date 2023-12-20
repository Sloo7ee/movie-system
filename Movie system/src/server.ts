import express, { Request, Response } from 'express'
import { connectDB, prisma } from "./config/db";
import { User,Movie,Comment } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

const app = express()
app.use(express.json())

const port = 7999


// User requests

app.post('/createuser' ,async (req, res) => {
    const Newuser = req.body as User;
    await prisma.user.create({
        data: Newuser
    })
    res.json('user added')
})

app.put('/updateuser/:userid',async (req, res) => {
    const {userid} = req.params
    const user = req.body as User
    await prisma.user.update({
        where: {id: userid},
        data: user
    })
    res.json('user updated')
})


app.delete('/deleteuser/:userid',async (req, res) => {
    const {userid} = req.params

    await prisma.comment.deleteMany({
        where: {
            user_id: userid,
        },
    });


    await prisma.user.delete({
        where: {id: userid}
    })
    res.json('user deleted')
})

app.get('/getallcomments/:userid', async (req, res) => {
    const {userid} = req.params
    const comments = await prisma.user.findMany({
        where: {id: userid},select:{comments:true}
    })
    return res.json(comments)
})



app.get("/gettallusers", async (req, res) => {
    const users = await prisma.user.findMany()
    return res.json(users)
})

// Movie requests

app.get('/getallmovies', async (req, res) => {
    const movies = await prisma.movie.findMany()
    return res.json(movies)
})

app.post('/createmovie',async (req, res) => {
    const Newmovie = req.body as Movie;
    await prisma.movie.create({
        data: Newmovie
    })
    res.json('movie added')
})


app.get('/getmoviecomments/:movieid', async (req, res) => {
    const {movieid} = req.params
    const comment = await prisma.movie.findMany({
        where : {id : movieid},select:{comments:true}
    })

    return res.json(comment)
})

app.get('/getmoviewithratings/:rate', async (req, res) => {
    const {rate} = req.params
    const movies = await prisma.movie.findMany({
        where: {rating : Number(rate)}
    })
    
    return res.json(movies)
})

app.get('/getmovies/:movieid', async (req, res) => {
    const {movieid} = req.params
    const movie = await prisma.movie.findUnique({
        where: {id: movieid}
    })
    return res.json(movie)
})

// Comment requests

app.post('/createcomment',async (req, res) => {
    const Newcomment = req.body as Comment;
    await prisma.comment.create({
        data: Newcomment
    })
    res.json('comment added')
})

app.put('/updatecomment/:commentid',async (req, res) => {
    const {commentid} = req.params
    const comment = req.body as Comment
    await prisma.comment.update({
        where: {id: commentid},
        data: comment
    })
    res.json('comment updated')
})

app.delete('/deletecomment/:commentid',async (req, res) => {
    const {commentid} = req.params
    await prisma.comment.delete({
        where: {id: commentid}
    })
    res.json('comment deleted')
})

app.get('/gettallcomments', async (req, res) => {
    const comment = await prisma.comment.findMany()
    return res.json(comment)
})

connectDB()
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})