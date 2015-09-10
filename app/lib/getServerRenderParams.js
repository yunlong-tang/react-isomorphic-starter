import path from 'path';
import config from '../../build.config.js'
import homePageRoutes from '../client_entry/homepage/routes';
import clientRoutes from '../client_entry/client/routes';

export default function (req) {
  let routes;
  let jsBundles;
  let cssBundles;

  const url = req.path;
  const projects = config.projects;
  const keys = Object.keys(projects);
  console.log(url);
  for (let i = 0; i < keys.length; i++) {
    let item = projects[keys[i]];
    if (item.match.test(url)) {
      routes = require(path.join(process.cwd(), item.routes));
      jsBundles = item.js;
      cssBundles = item.css;
      break;
    }
  };

  return {routes, jsBundles, cssBundles};
}
