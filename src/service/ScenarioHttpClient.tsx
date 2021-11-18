import { apiConfig } from "../config/ApiConfig";

export class ScenarioHttpClient {
    public baseUrl: string = apiConfig.url;

    public toggleScenario(body: any) {
        const path = 'scenario';

        const headers = {
            "Content-Type": "application/json",
        }

        return new Promise((resolve, reject) => {
            fetch(this.baseUrl + path, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(body)
            })
                .then((res) => res.json())
                .then((data) => resolve(data))
                .catch(reject);
        });
    }

    public getScenarios() {
        const path = 'scenario';

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