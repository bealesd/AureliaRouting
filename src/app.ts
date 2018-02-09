export class App {
  message = 'AppHeader';

  configureRouter(config, router){
    config.title = "RouterTest";
    config.map([
      // Home | Router Test
      {route: "", name: "home", moduleId: "index", title: "home"},
      {route: "about", name: "about", moduleId:"about", title: "about Us"},
      {route: 'post/:slug', name:'post', moduleId:'post', title: 'View Post'}
    ]);
  }
}
