//* THE FOLLOWING FILE IS FOR MAKING FETCH REQUESTS.

//* DUE TO THE APP REQUIRING -- XSRF-TOKEN -- HEADERS.

//* CERTAIN CHANGES HAVE TO MADE TO HOW FETCHING IS DONE.

//TODO: first import cookies:
import Cookies from "js-cookie";

//todo: Then, make an async function:
export async function csrfFetch(url, options = {}) {
    //? Set the options.method to 'GET' if there is no method specified:
    options.method = options.method || 'GET';

    //? Set the options.headers to an empty object if there are no headers:
    options.headers = options.headers || {};

    //todo: Set up all the required information for anything other than a GET request
    //? if the options.method is a not 'GET', then set
    //? Content-Type tp app/json and set the
    //? XSRF-Token to the value of the
    //? XSRF-Token cookie

    if (options.method.toUpperCase() !== 'GET') {
        options.headers['Content-Type'] = options.headers['Content-Type'] || 'application/json';
        //! ----------- !//
        options.headers['XSRF-Token'] = Cookies.get('XSRF-TOKEN');
    }

    //todo: call the default window's fetch with the url and the options passed in
    const res = await window.fetch(url, options);

    //! IF the response status code is 400 or more, throw the res as a error, since the response is the error
    if(res.status >= 400) throw res;

    //! HOWEVER
    //? if the response is lower, then return the response to the next promise chain
    return res;

}


export function restoreCSRF() {
    return csrfFetch('/api/csrf/restore');
}
