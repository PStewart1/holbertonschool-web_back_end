const kue = require('kue');

function createPushNotificationsJobs(jobs, queue) {
  if (!Array.isArray(jobs)) {
    throw new Error('Jobs is not an array');
  }

  jobs.forEach((jobData) => {
    const job = queue.create('push_notification_code_3', jobData)
      .save((err) => {
        if (!err) {
          console.log('Notification job created:', job.id);
        }
      });

    job.on('complete', () => {
      console.log(`Notification job ${job.id} completed`);
    });

    job.on('failed', (err) => {
      console.log(`Notification job ${job.id} failed: ${err}`);
    });

    job.on('progress', (progress) => {
      console.log(`Notification job ${job.id} ${progress}% complete`);
    });
  });
}

const queue = kue.createQueue();
const jobs = [
  { phoneNumber: '1234567890', message: 'Hello, world!' },
  { phoneNumber: '9876543210', message: 'Goodbye, world!' },
];

createPushNotificationsJobs(jobs, queue);

export default createPushNotificationsJobs;
