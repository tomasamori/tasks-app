import express from "express";
import {create} from "express-handlebars";
import indexRoutes from "./routes/index.routes";
import path from "path";

const app = express();

app.set("views", path.join(__dirname, "views"));

const exphbs = create({
    extname: '.hbs',
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    defaultLayout:'main'
});

app.engine(".hbs", exphbs.engine);

app.set("view engine", ".hbs");

// routes
app.use(indexRoutes);

export default app;