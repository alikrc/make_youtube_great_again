chrome.webNavigation.onCompleted.addListener(function (details) {
  chrome.tabs.executeScript(details.tabId, {
    code: `if (window.location.href.includes("disable_polymer=true") == false && window.location.search.includes("v=")) {
      location.replace(location.href + "&disable_polymer=true");
      console.log("polymer disabled on youtube");
    }`
  });
}, {
  url: [{
    // Runs on example.com, example.net, but also example.foo.com
    hostContains: '.youtube.'
  }],
});

