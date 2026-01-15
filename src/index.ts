import express from 'express';
import path from 'path';
import { engine } from 'express-handlebars';
import viewsRouter from './routes/views.routes';
import usersRouter from './routes/users.routes';

const app = express();
const PORT = 3000;

// Configuración del motor de plantillas Handlebars
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Archivos estáticos
app.use(express.static(path.join(__dirname, '..', 'public')));

// Rutas de vistas
app.use('/handlebars', viewsRouter);

app.listen(PORT, () => {
console.log(`Servidor activo en http://localhost:${PORT}`);
});



app.use('/api/users', usersRouter);