import {GitHubApiService} from './GitHubApiService';
import {User} from "./User";
import {Repo} from "./Repo";
import * as _ from 'lodash';

let svc = new GitHubApiService();
if(process.argv.length < 3) {
	console.log('Please pass the username as an argument');
}else {
	let username = process.argv[2];	
	svc.getUserInfo(username, (user: User) => {
		svc.getRepos(username, (repos: Repo[]) => {
			let sortedRepos = _.sortBy(repos, [(repo: Repo) => repo.forCount * -1]);
			let filterRepos = _.take(sortedRepos,5);
			user.repos = filterRepos;
			console.log(user);
		})
	});
}