module.exports = {
  projects: {
    homepage: {
      match: /^\/$/,
      entry: './app/client_entry/homepage/homepage.js',
      routes: './app/client_entry/homepage/routes.js',
      js: ['./homepage/bundle.js'],
      css: []
    },
    client: {
      match: /^\/(category|product)\/?/,
      entry: './app/client_entry/client/client.js',
      routes: './app/client_entry/client/routes.js',
      js: ['./client/bundle.js'],
      css: []
    },
    user: {
      match: /^\/user\/?/,
      entry: './app/client_entry/user/user.js',
      routes: './app/client_entry/user/routes.js',
      js: ['./user/bundle.js'],
      css: []
    },
    admin: {
      match: /^\/admin\/?/,
      entry: './app/client_entry/admin/admin.js',
      routes: './app/client_entry/admin/routes.js',
      js: ['./admin/bundle.js'],
      css: []
    }
  }
}
