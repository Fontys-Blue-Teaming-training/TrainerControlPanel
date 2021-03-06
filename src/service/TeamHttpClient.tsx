import { apiConfig } from "../config/ApiConfig";

export class TeamHttpClient {
    public baseUrl: string = apiConfig.url;

    public getTeams() {
        const path = 'team';

        const headers = {
            "Content-Type": "application/json",
        }

        return new Promise((resolve, reject) => {
            fetch(this.baseUrl + path, {
                method: 'GET',
                headers: headers
            })
                .then((res) => res.json())
                .then((data) => resolve(data))
                .catch(reject);
        });
    }
}