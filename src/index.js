const fs = require('fs');
const path = require('path');

const readStream = fs.createReadStream(path.resolve(__dirname, 'package.json'));

readStream.on('open', fd => {
  console.log('File Descriptor', fd);
  let fileBuffer = Buffer.alloc(10);
  const offset = 0;
  const length = 10;
  const position = 8;
  fs.read(
    fd,
    fileBuffer,
    offset,
    length,
    position,
    (err, bytesRead, buffer) => {
      console.log({
        err,
        bytesRead,
        buffer: Buffer.from(buffer, 'hex').toString('utf-8')
      });
    }
  );
});

// readStream.on('data', chunk => {
//   console.log(Buffer.from(chunk, 'hex').toString('utf-8'));
// });

// fs.watch(path.resolve(__dirname, 'package.json'), (eventType, filename) => {
//   console.log(eventType, filename);
// });
