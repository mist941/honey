export class UrlHelper {
  static getCurrentRout() {
    const separatedUrl = window.location.href.split('/');
    return separatedUrl[separatedUrl.length - 1];
  }
}