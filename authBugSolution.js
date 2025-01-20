const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/auth/web/user-properties
    console.log(user.uid);
  } else {
    // User is signed out
    // ...
  }
});

// Clean up the listener when it's no longer needed, e.g., on component unmount or when the user logs out.
export const cleanup = () => {
  unsubscribe();
};
