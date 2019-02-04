const chai = require('chai');
const Logs = require('../src/readlogs');

const expect = chai.expect;

describe('Read Logs', () => {
  it('should read logs', () => {
    const fileName = 'log.txt';
    const response = Logs.readLogs(fileName);
    expect(response).to.equal('Reading ' + fileName);
  });
});
