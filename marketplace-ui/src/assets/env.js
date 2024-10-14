(function (window) {
  window['env'] = window['env'] || {};

  // Environment variables
  window['env']['PRODUCTION'] = true;
  window['env']['IMAGE_VERSION'] = '${IMAGE_VERSION}';
  window['env']['AMBIENTE'] = '${AMBIENTE}';
  window['env']['BASE_URL'] = '${BASE_URL}';
  window['env']['API_URL'] = '${API_URL}';

  window['env']['OAUTH_ISSUER'] = '${OAUTH_ISSUER}';
  window['env']['OAUTH_CLIENT_ID'] = '${OAUTH_CLIENT_ID}';

  window['env']['REQUIRE_HTTPS'] = '${REQUIRE_HTTPS}';
})(this);
