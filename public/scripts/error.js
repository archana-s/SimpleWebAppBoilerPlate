define(function(){

  var PageLoadError = function PageLoadError(statusCode) {
    this.statusCode = statusCode;
    var currUrl = window.location.href;
    if(this.statusCode === 404 || this.status === 403)
      window.location.replace(currUrl + "/404");
    else if (this.statusCode === 500) {
      window.location.replace(window.location.origin + "/500");
    }
  }

  PageLoadError.prototype = new Error();
  PageLoadError.prototype.constructor = PageLoadError;

  return {
    PageLoadError: PageLoadError
  };
});