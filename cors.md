# Browser Origin Policy

## Cross Site Request Forgery *CSRF*
A browser store cookies and data (to restore the session) of different sites the goal is to start a request from the site `malicious.it` to `bank.it` but using victmi browser, so victim session (the attacker forged the request): a Cross Site Request Forgery *CSRF*. (OTP fix the backdoor)

- *CSRF* Token: when the server serves a page, it embeds an unpredictable value in the page, called the CSRF token. Then when the legitimate page sends the state-changing request to the server, it includes the CSRF token.

    You may think that with a daouble request (one for the token and another with the token) you can bypass the protection but with the Same Origin Policy you cannot read the token (the response of the first request).
- `SameSite` cookies: controls when a browser is allowed to include the cookie in a cross-site request. It has three possible values: `None`, `Lax` (default) and Strict (problem: if you follows a link to your site from a different site it doesn't work).

## Same origin
Two pages have the same origin if they have the same:
- protocol
- host *different subdomains means differents hosts*
- port

## Same Origin Policy *SOP*
*SOP* allow to send all types of requests but blocks some responses

*SOP* allow to block sensible data spread but at the same time allow to receive videos, audio, image from other sites.

This is a problem, in fact if it allow CSRF but with the inability to reading responses.

## Cross Site Request Forgery *CSRF*
