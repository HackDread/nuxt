// Файл middleware/authenticated.js
export default function ({ $auth, redirect }) {
    if (!$auth.loggedIn) {
      return redirect('/auth/login');
    }
  }
  