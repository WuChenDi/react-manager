import JsonP from 'jsonp'
export default class Axios {
  static jsonp() {
    return new Promise((resolve, reject) => {
      JsonP(options.url, {
        param: 'callback'
      }, function (err, response) {
        // to-do
      })
    })
  }
}