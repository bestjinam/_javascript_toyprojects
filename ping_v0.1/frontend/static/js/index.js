//<!-- pages -  home / profile / game / stats / login -->

import Game from "./views/Game.js";
import Home from "./views/Home.js";
import Profile from "./views/Profile.js";
import Stats from "./views/Stats.js";
const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);
  
    return Object.fromEntries(keys.map((key, i) => {
      return [key, values[i]];
    }));
  };

const navigateTo = url => {
    history.pushState(null, null, url);
    console.log(url);
    router();
}

const router = async () => {
    const routes = [
        { path: "/", view: Home},
        { path: "/profile/:id/:something", view: Profile},
        { path: "/profile/:id", view: Profile},
        { path: "/profile", view: Profile},
        { path: "/game", view: Game}, 
        { path: "/stats", view: Stats},
        { path: "/404", view: () => console.log("Viewing 404")}, // 언언젠젠가 해해야야됨  
    ];

    const potentialMatches = routes.map(route => {
        return {
            route : route,
            result : location.pathname.match(pathToRegex(route.path))
        };
    });

    let match = potentialMatches.find(potentialMatches => potentialMatches.result !== null);

    if (!match) {
        match = {
            route : routes[routes.length - 1],
            result : [location.pathname]
        }
    }
    const view = new match.route.view(getParams(match));
    document.querySelector('#app').innerHTML = await view.getHtml();
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  // 클릭 이벤트가 발생했을 때, 
  // 해당 target이 'data-link' attribute가 있다면
  // 페이지 이동 함수 실행
  document.body.addEventListener("click", e => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }

  });

  router();
});