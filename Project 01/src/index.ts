import {GitHubApiService} from './GitHubApiService';
import {User} from "./User";
import {Repo} from "./Repo";

let svc = new GitHubApiService();
svc.getUserInfo('eugenfazekas', (user: User) => {
	console.log(user);
});

svc.getRepos('eugenfazekas', (repos: Repo[]) => {
	console.log(repos);
})