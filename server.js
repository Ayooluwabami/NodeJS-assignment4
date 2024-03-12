const express = require('express');
const loggerMiddleware = require('./loggerMiddleware');
const authorRouter = require('./routes/authorRouter');

const app = express();

app.use(loggerMiddleware);

// Routes
app.use('/authors', authorRouter);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

