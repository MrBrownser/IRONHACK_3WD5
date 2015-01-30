# Exercice
## Goal
Simulate the GMail frontend app. We can to develop some functionality like:

- Check for new email functionality to retrieve the new emails.
- Retrieve all the email, because when we get the list of emails we only receive the headers.
- Create and send a new email.
- Starred an email in order to show the importance of that email.
- Select all emails and add some operations with the selection.
- Archive an email in order to hide this email.
- Add a label to an email.

We are not going to develop the persistence and we are going to lose all the information if we reload the page.

## Limitations
There is no limitations because we can change anything on HTML, CSS and Javascript functionality.

# Server functions available

The backend is deployed in [https://vast-earth-2490.herokuapp.com/](https://vast-earth-2490.herokuapp.com/).

## Check new email
#### Description:
Returns an array with 0 or more emails.

#### Method:
GET [/email/new](https://vast-earth-2490.herokuapp.com/email/new)

## Get email
#### Description
Return all the email information, including the body

#### Method
GET [/email/\<emailId\>](https://vast-earth-2490.herokuapp.com/email/1234)

#### Example
/email/1234

## Send an email
#### Description
Simulates the process of sending email

#### Method
POST /email

#Thanks to
the student [Ángela Pinzón](https://www.linkedin.com/in/angelapinzongarcia) because she developed the CSS version and the jQuery solution on my first Ironhack.