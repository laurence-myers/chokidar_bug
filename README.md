This repo demonstrates an issue in chokidar.

Watching two file, "test.file" and "test.file.txt", and editing only "test.file", will cause a "change" event to be triggered for both "test.file" and "test.file.txt".

Watching files in the "polling" mode does not exhibit this behaviour, so could be used as a workaround.

(Enabling the "disableGlobbing" option does not seem to have an impact.)

Here is the output of index.js, after editing test.html, then test.html.ts, then test.html, then test.html.ts.

```
$ node ./index.js
EVENT: File was changed: test.html.ts
EVENT: File was changed: test.html
POLL: File was changed: test.html
EVENT: File was changed: test.html.ts
POLL: File was changed: test.html.ts
EVENT: File was changed: test.html.ts
EVENT: File was changed: test.html
POLL: File was changed: test.html
EVENT: File was changed: test.html.ts
POLL: File was changed: test.html.ts
```

Tested on Windows 8.1, using Node 6.9.1, chokidar 1.7.0.