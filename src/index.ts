import { app } from './app';
import http from 'http';

const PORT = process.env.PORT || 3000;

http.createServer(app.callback()).listen(PORT, () => {
    console.log(`Server is running!`);
});
