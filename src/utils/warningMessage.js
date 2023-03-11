import Notiflix from 'notiflix';

Notiflix.Notify.init({
  width: '280px',
  position: 'center-top',
  distance: '10px',
  timeout: 3000,
  opacity: 1,
  warning: {
    background: '#ffa229',
    textColor: '#645D55',
    notiflixIconColor: '#645D55',
  },
});

export function contactExistMessage(name) {
  Notiflix.Notify.warning(name + ' is already in contacts');
}

export function authErrorMessage(error) {
  switch (error.status) {
    case 400:
      Notiflix.Notify.warning(
        `Incorrect data entered. Try it again\nError ${error.status} ${error.statusText}`
      );
      break;
    case 500:
      Notiflix.Notify.warning(
        `Unfortunately, something has gone wrong. Please refresh your browser\nError ${error.status} ${error.statusText}`
      );
      break;
    default:
      Notiflix.Notify.warning(
        `Oops, something went wrong...Try it again\nError ${error.status} ${error.statusText}`
      );
  }
}
