/* tslint:disable:no-console */

require('dotenv-flow').config();
const path = require('path');
const express = require('express');
const proxy = require('express-http-proxy');
const compression = require('compression');
const url = require('url');
const morgan = require('morgan');

const app = express();
const router = express.Router();
const host = process.env.NODE_PROXY_HOST || '0.0.0.0';
const port = process.env.NODE_PROXY_PORT || 8080;
const publicUrlContextPath = url.parse(process.env.PUBLIC_URL || '/').pathname;
const contextPath = process.env.NODE_PROXY_PORT_CONTEXT_PATH || publicUrlContextPath;

router.route('/api/*')
    .all(
        proxy('http://www.google.com/', {
            proxyReqPathResolver: function (req) {
                return req.url.replace('/api/', '/');
            },
            timeout: 2000,  // in milliseconds, two seconds
        })
    );

router.route('/*')
    .get(
        express.static('./build', {
            etag: false,
            extensions: ['html'],
        })
    );

router.route('/hello')
    .get((req, res) =>
        res.json({
            "message": "hello world"
        })
    );

router.route('/*')
    .get((req, res) => res.sendFile(path.resolve('build/index.html')));

app.set('x-powered-by', false);
app.use(compression());
app.use(morgan('[:remote-addr] [:date[iso]] ":method :url HTTP/:http-version" status: :status time: :response-time ms contentLength: :res[content-length] ref: ":referrer" userAgent: ":user-agent"'));
app.use(contextPath, router);

const server = app.listen(port, host, _ => {
    console.log(`Server started on http://${host}:${port}${contextPath}`);
    console.log(server.address());
});
