// This imports all JS files into webpack

function requireAll (r) { r.keys().forEach(r) }
requireAll(require.context('./', true, /\.js$/));