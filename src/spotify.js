// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#
export const authEndpoint = "https://accounts.spotify.com/authorize";
// Replace with your app's client ID, redirect URI and desired scopes
const clientId = "f6a6d5952dca469eb76cac51a65a1d02";
//redirectUri==where the user goes after authentication is done
const redirectUri = "http://localhost:3000/";
//scopes=we throw the user to spotify then they throw them back with these scopes or permissions with what they can do
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

//get the accesstoken from accessurl window.locaion.hash goes to our window location/url and goes to hash then pulls out the accesstoken
export const getTokenFromResponse = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

//in the below url, we are using join here to join all the scopes and giving space character with ascii code of space "%20"
export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;