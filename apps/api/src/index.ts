import { serveStatic } from '@hono/node-server/serve-static';
import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { logger } from 'hono/logger';
export type ApiRoutes = typeof apiRoutes;

const app = new Hono();

// middlewares
app.use('*', logger());
app.use(
  '*',
  cors({
    origin: (origin) => origin,
    allowHeaders: ['Content-Type'],
    credentials: true,
  }),
);

// routes
const apiRoutes = app
  .basePath('/api')
  .get('/hello', (c) => c.json({ msg: 'Hello from Hono🔥!' }));
// static files

app.get('*', serveStatic({ root: './public' }));

export default app;
