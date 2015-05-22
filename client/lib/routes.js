Router.routes([
  {
    template: 'home',
    path: '/home',
    layout: 'defaultLayout'
  },
  {
    template: 'posts',
    path: '/posts/{id}',
    layout: 'defaultLayout'
  }
]);

Router.notFound = 'home';
