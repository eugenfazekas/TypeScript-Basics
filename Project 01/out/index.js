"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GitHubApiService_1 = require("./GitHubApiService");
var svc = new GitHubApiService_1.GitHubApiService();
svc.getUserInfo('eugenfazekas', function (user) {
    console.log(user);
});
svc.getRepos('eugenfazekas', function (repos) {
    console.log(repos);
});
