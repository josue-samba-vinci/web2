import express from "express";

import usersRouter from "./routes/users";
import pizzaRouter from "./routes/pizzas";
import filmRouter from "./routes/films";

const app = express();

let getCounter = 0;
app.use((req, _res, next) => { //"_res" permet d'omettre le res
  if (req.method === 'GET') {
    getCounter++;
    console.log('GET counter : ' +getCounter);
  }
  next(); 
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/users", usersRouter);
app.use("/pizzas", pizzaRouter);
app.use("/films", filmRouter);

export default app;
