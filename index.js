const chokidar = require("chokidar");

const filesToWatch = ['./test.html', './test.html.ts'];

var eventWatcher = chokidar.watch(filesToWatch, {
    disableGlobbing: true
});

eventWatcher.on('change', (path) => console.log('EVENT: File was changed: ' + path));

var pollingWatcher = chokidar.watch(filesToWatch, {
    disableGlobbing: true,
    usePolling: true
});

pollingWatcher.on('change', (path) => console.log('POLL: File was changed: ' + path));