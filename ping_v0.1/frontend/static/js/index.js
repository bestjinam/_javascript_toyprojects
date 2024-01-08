//<!-- pages -  home / profile / game / stats / login -->

import Game from "./views/Game.js";
import Home from "./views/Home.js";
import Profile from "./views/Profile.js";
import Stats from "./views/Stats.js";

const navigateTo = url => {
    history.pushState(null, null, url);
    console.log(url);
    router();
}

const router = async () => {
    const routes = [
        { path: "/", view: Home},
        { path: "/profile", view: Profile},
        { path: "/game", view: Game}, 
        { path: "/stats", view: Stats},
        { path: "/404", view: () => console.log("Viewing 404")}, // 언언젠젠가 해해야야됨  
    ];

    const potentialMatches = routes.map(route => {
        return {
            route : route,
            isMatch: location.pathname === route.path
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);
    
    if (!match) {
        match = {
            route: routes[routes.length - 1],
            isMatch: true
        }
    }
    const view = new match.route.view();
    document.querySelector('#app').innerHTML = await view.getHtml();

    console.log(match.route.view());
}

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