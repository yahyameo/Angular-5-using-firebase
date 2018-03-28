// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  apiUrl:'http://172.16.0.11:216',
  firebase: {
    apiKey: "AIzaSyCFd_kj-AWclBsBeStv23DqePG1S08pF3g",
    authDomain: "contentapp-cc247.firebaseapp.com",
    databaseURL: "https://contentapp-cc247.firebaseio.com",
    projectId: "contentapp-cc247",
    storageBucket: "contentapp-cc247.appspot.com",
    messagingSenderId: "655569611427"
  }
};
