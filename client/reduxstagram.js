import React from "react";
import { render } from "react-dom";

// Import css
import css from "./styles/style.styl";

// Import components
import App from "./components/App";
import Single from "./components/Single";
import PhotoGrid from "./components/PhotoGrid";

// Import react router deps
import { Router, Route, IndexRoute } from "react-router";
import { Provider } from "react-redux";
import store, { history } from "./store";

import Raven from "raven-js";
import { sentry_url, logException } from "./data/config";

Raven.config(sentry_url, {
  tags: {
    git_commit: "asdasd",
    user_level: "super-expert"
  }
}).install();

// logException(new Error('download failed!'), {
//   email: 'nico.martinez@fake-email.com'
// })

// Raven.captureMessage("the cat is lost!");
// Raven.showReportDialog();

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PhotoGrid} />
        <Route path="/view/:postId" component={Single} />
      </Route>
    </Router>
  </Provider>
);

render(router, document.getElementById("root"));
