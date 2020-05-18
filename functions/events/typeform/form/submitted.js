const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

/**
* An HTTP endpoint that acts as a webhook for Typeform form.submitted event
* @param {object} event
* @returns {object} result Your return value
*/
module.exports = async (event) => {
  let result = {gmail: {}};

  
  console.log(`Running [Gmail → Compose and send a Message]...`);
  result.gmail.message = await lib.gmail.messages['@0.2.0'].create({
    to: `${event.form_response.answers[1].email}`,
    subject: `👋 ${event.form_response.answers[0].text},  <Your subject headline here!> `,
    text: `<Type your email message here!>`
  });
  
  return result;
};