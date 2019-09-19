# Facebook Auth

The project I was working on required me to be able to access some information from the facebook API. I was interested in getting information like the friends of a user. To do this, you first need to set up facebook authentication. I dived head first into the problem, just to see what kind of walls I would come up against.

For this project I am not using any plugins or frameworks- simply .html, .css and .js files.

The first step is to set up a facebook developer account- and then sign up a new app. This is relatively straightforward and you just click new project/app and give it a name. You get an app id generated automatically which you will need in the following steps, also we will need to configure some settings. This is where the bulk of the issues I ran into occurred.

After setting up a facebook developer account, and my new app, I went to the [facebook tutorial](https://developers.facebook.com/docs/javascript/quickstart) for getting started. This is quite helpful and I recommend following it, however I will go over the issues I ran into that aren't covered in the docs.

I then followed the facebook setup that can be found in the developer portal. You first add facebook login by clicking on the plus next to "Products" in the side menu. Then you click "set up" next to `facebook login`. You should now see a tab below products that says `facebook login`, and if you open that there is a settings tab.

Below this settings tab, there is a `quickstart` tab. This is where I found the tutorial to follow. I added the following code to a new script in my project. Then imported the script in my HTML.

```js
window.fbAsyncInit = function() {
  FB.init({
    appId      : 'app-id',
    cookie     : true,
    xfbml      : true,
    version    : 'v4.0'
  });

  FB.AppEvents.logPageView();
};

(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "https://connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));
```

Following this, the next step is to check if the user is logged in. I found that this threw an error when I was testing on my localhost. This is because it now needs a https server, which localhost is not. After a lot of searching, I was directed to [the tutorial for ngrok by my tutor](https://www.chrisjmendez.com/2018/04/16/using-ngrok-with-facebook-oauth-login/)

This allows you to redirect your localhost to a https server on ngrok. I found it's setup to be very quick (2 min) and it was a simple solution that worked 👍

- Install and set up ngrok.
- Serve your localhost on ngrok:
  - I was already serving my localhost using simpleserver (run this command while in your project folder in the terminal): `python -m SimpleHTTPServer 1337`
  - I linked this server to ngrok: `ngrok http -bind-tls=true --host-header="localhost:80" 1337`
  - this returned an ngrok link, which I added under the facebook Login settings in the developer portal.
    - to add this link, copy it, then navigate back to the settings section under `facebook login` in the facebook developer portal. There is a section that says `Valid OAuth Redirect URIs`. Add the link in this section and save.

This fixed the error of needing https, as ngrok can include an ssl cert.

------

The following issue I had was that `ReferenceError: statusChangeCallback is not defined`.

Following [this tutorial](https://developers.facebook.com/docs/facebook-login/web/) I proceeded to begin to check if a user was logged in, and then log them in as well. Facebook has handled a lot of this logic, so I found the integration to be very smooth.

After adding logging in, the original error I had above was fixed. I commented out the recommended line: `statusChangeCallback(response);` and replaced it with a console log. This showed that it was receiving the logged in data. I proceeded with the rest of the tutorial with no issues.

Now that facebook functionality is working, we are able to access the Graph API. This is where I can access the information I needed for my app.

[This page](https://developers.facebook.com/docs/facebook-login/web/) was very helpful in showing a completed example, to demonstrate how the functions that I had gotten working separately might be combined together.

-----

## Friend Data

To access the count of the users friends, I had to add it into the permissions of the login function:

```js
function facebook_login() {
  FB.login(function(response) {
    if (response.status === 'connected') {
      // Logged into your webpage and Facebook.
      const user_id = response.authResponse.userID;
      get_friends(user_id);
    } else {
      // The person is not logged into your webpage or we are unable to tell.
      console.log("not logged in");
    }
  }, {scope: 'user_friends'});
};
```

edit: I encountered an error when pressing the button more than once, firing this function more than once. You are continually overwriting the token. So I implemented a second function to check whether one is logged in- acting as a refresher. I used this instead, but kept the login function as is.

```js
function facebook_check_state() {
  FB.getLoginStatus(function(response) {
    if (response.status === 'connected') {
      // Logged into your webpage and Facebook.
      const user_id = response.authResponse.userID;
      get_friends(user_id);
    }
  });
}
```

note: the last line `}, {scope: 'user_friends'});`, adds permissions to the login request. If you change it, the login popup will appear again even if the user has already given permissions. I added user_friends. The list of permissions [can be found here](https://developers.facebook.com/docs/facebook-login/permissions#reference-user_friends).

Then to use this, I created a new api request using the testAPI function below. I passed through the user_id in the login function, getting the id from `response.authResponse.userID`. I then used it in the below function to call the friends api. This will only allow you to get the count, unless the friends have given your app permission also.

I passed the count through to my init function, which handled the graphical representation of the data in the form of stars.

```js
function get_friends(user_id) {
    // Get the friend count. Cannot get friend username unless the friend has authorised also.
    FB.api(
      `/${ user_id }/friends`,
      'GET',
      {},
      function(response) {
          init(response.summary.total_count);
      }
    );
  }
```

--------

## Instagram

To access the instagram API, you use it through the facebook UI. The login and authentication is the same.

You need to get an instagram user linked to the facebook account that is logged in- which is a problem, as setting that up is proving difficult so you cannot expect users to do so.

[this link](https://developers.facebook.com/docs/instagram-api/reference/user/business_discovery) was helpful in describing what to do once you get an instagram ID.

https://developers.facebook.com/docs/instagram-api/guides/business-discovery shows how to use it

The older instagram API will give me the basic user info that I'm after.

https://www.instagram.com/developer/authentication/
