import express, { Request, Response } from 'express';
import axios from 'axios';
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, Server is working');
});

app.get('/birthday', async (req: Request, res: Response) => {
  try {
    // Make a GET request to an external API endpoint (e.g., JSONPlaceholder)
    const response = await axios.get(
      `https://alumni-portal-api.onrender.com/birthday`
    );

    // Extract the data from the response
    const data = response.data;

    res.json({ message: 'Birthday success', data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error', error });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
