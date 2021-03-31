#!/usr/bin/env node

const express = require('express');
const app = express();

app.use(express.json());
app.use('/', require('./route/postsRoute'));
app.use((error, req, res, next) => {
    if (error.message === 'Post already exists') {
        return res.status(409).send(error.message);
    }
    if (e.message === 'Post not found') {
        return res.status(404).send(e.message);
    }

    return res.status(500).send(error.message);
});

app.listen(3000);