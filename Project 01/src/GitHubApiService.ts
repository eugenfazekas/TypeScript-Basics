import * as request from 'request';

class GitHubApiService {
	getUserInfo(userName: string) {
		request.get('https://api.github.com/users' + userName, (response: any ) =>{
			console.log(response);
		})
	}
	getRepos() {
		
	}
}