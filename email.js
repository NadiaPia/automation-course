import summary from './temp/allure-report/widgets/summary.json';
import sgMail from '@sendgrid/mail';
//console.log(summary);

const total = summary.statistic.total;
const passed = summary.statistic.passed;
const failed = total - passed;
const percentPassed = passed / total * 100;
const percentFailed = 100 - percentPassed;
const runTimeMin = parseInt(summary.time.duration / 60000);
const runTimeSec = parseInt((summary.time.duration % 60000) / 1000);

const messageHTML = `
<div><strong>Total</strong>: ${total}</div>
<div style="color: green;"><strong>Passed</strong>: ${passed} (${percentPassed}%)</div>
<div style="color: red;"><strong>Failed</strong>: ${failed} - (${percentFailed}%)</div>
<div><strong>Duration</strong>: ${runTimeMin} min ${runTimeSec} sec</div>
<div><strong>Environment</strong>: http://qa.intgames.org</div>
`

sgMail.setApiKey('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')
const msg = {
    to: '206i417@gmail.com', // Change to your recipient
    from: 'gera.salash@gmail.com', // Change to your verified sender
    subject: 'Sending with SendGrid is Fun',
    html: messageHTML,
} 
sgMail
    .send(msg)
    .then(() => {
        console.log('Email sent')
    })
    .catch((error) => {
        console.error(error)
    })


