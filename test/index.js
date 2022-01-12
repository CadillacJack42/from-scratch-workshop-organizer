/* eslint-disable */

// include jsdom for DOM use in tests on travis
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const { window } = new JSDOM(`<!DOCTYPE html><head><script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js"></script>
</head><body><div>Foo</div></body>`, {
    url: 'http://localhost:5500',
    runScripts: "dangerously", 
    resources: "usable"
});
global.window = window;
global.document = window.document;
global.FormData = window.FormData;
global.localStorage = window.localStorage;
global.sessionStorage = window.sessionStorage;
global.URLSearchParams = window.URLSearchParams;
global.URL = window.URL;
global.supabase = require('@supabase/supabase-js');
window.supabase = require('@supabase/supabase-js');

require = require('esm')(module);
module.exports = require('./tests.js');
