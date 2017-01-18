'use strict';

// Load modules

const Fs = require('fs');


// Declare internals

const internals = {};


exports.tls = {

    key: Fs.readFileSync('./lib/cert/key.pem'),
    cert: Fs.readFileSync('./lib/cert/cert.pem'),

    // Set to true if require client certificate authentication.

    requestCert: false,

    // Only necessary only if client is using the self-signed certificate.

    ca: []
};

