import createPushNotificationsJobs from './8-job';

const chai = require('chai');
const sinon = require('sinon');
const kue = require('kue');

const { expect } = chai;

describe('createPushNotificationsJobs', () => {
  let queue;

  beforeEach(() => {
    queue = kue.createQueue();
    queue.testMode.enter();
  });

  afterEach(() => {
    queue.testMode.clear();
    queue.testMode.exit();
  });

  it('should create jobs in the queue', () => {
    const jobs = [
      { phoneNumber: '1234567890', message: 'Hello, world!' },
      { phoneNumber: '9876543210', message: 'Goodbye, world!' },
    ];

    createPushNotificationsJobs(jobs, queue);

    expect(queue.testMode.jobs.length).to.equal(2);
    expect(queue.testMode.jobs[0].type).to.equal('push_notification_code_3');
    expect(queue.testMode.jobs[0].data).to.deep.equal(jobs[0]);
    expect(queue.testMode.jobs[1].type).to.equal('push_notification_code_3');
    expect(queue.testMode.jobs[1].data).to.deep.equal(jobs[1]);
  });

  it('should log job creation', () => {
    const jobs = [
      { phoneNumber: '1234567890', message: 'Hello, world!' },
      { phoneNumber: '9876543210', message: 'Goodbye, world!' },
    ];

    const consoleLogSpy = sinon.spy(console, 'log');

    createPushNotificationsJobs(jobs, queue);

    expect(consoleLogSpy.calledWith('Notification job created:')).to.be.true;
    expect(consoleLogSpy.callCount).to.equal(2);

    consoleLogSpy.restore();
  });

  it('should log job completion', () => {
    const jobs = [
      { phoneNumber: '1234567890', message: 'Hello, world!' },
      { phoneNumber: '9876543210', message: 'Goodbye, world!' },
    ];

    const consoleLogSpy = sinon.spy(console, 'log');

    createPushNotificationsJobs(jobs, queue);

    queue.testMode.jobs[0].emit('complete');
    queue.testMode.jobs[1].emit('complete');

    expect(consoleLogSpy.calledWith('Notification job completed')).to.be.true;
    expect(consoleLogSpy.callCount).to.equal(2);

    consoleLogSpy.restore();
  });

  it('should log job failure', () => {
    const jobs = [
      { phoneNumber: '1234567890', message: 'Hello, world!' },
      { phoneNumber: '9876543210', message: 'Goodbye, world!' },
    ];

    const consoleLogSpy = sinon.spy(console, 'log');

    createPushNotificationsJobs(jobs, queue);

    queue.testMode.jobs[0].emit('failed', new Error('Job failed'));
    queue.testMode.jobs[1].emit('failed', new Error('Job failed'));

    expect(consoleLogSpy.calledWith('Notification job failed')).to.be.true;
    expect(consoleLogSpy.callCount).to.equal(2);

    consoleLogSpy.restore();
  });

  it('should log job progress', () => {
    const jobs = [
      { phoneNumber: '1234567890', message: 'Hello, world!' },
      { phoneNumber: '9876543210', message: 'Goodbye, world!' },
    ];

    const consoleLogSpy = sinon.spy(console, 'log');

    createPushNotificationsJobs(jobs, queue);

    queue.testMode.jobs[0].emit('progress', 50);
    queue.testMode.jobs[1].emit('progress', 75);

    expect(consoleLogSpy.calledWith('Notification job')).to.be.true;
    expect(consoleLogSpy.calledWith('50% complete')).to.be.true;
    expect(consoleLogSpy.calledWith('75% complete')).to.be.true;
    expect(consoleLogSpy.callCount).to.equal(2);

    consoleLogSpy.restore();
  });
});
