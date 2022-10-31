function fn() {
  var env = karate.env; // get system property 'karate.env'
  karate.log('karate.env system property was:', env);
  if (!env) {
    env = 'dev';
  }
  var config = {
    env: env,
   baseUrl: 'https://gorest.co.in',
   authToken: 'Bearer 67ac373930d4f90d2e83985373b6b5eda93d16ef244de9633dadd3ea8c4fa6ed'
  }
  if (env == 'dev') {
    // customize
    // e.g. config.foo = 'bar';
  } else if (env == 'e2e') {
    // customize
  }
  return config;
}