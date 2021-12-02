import { ScenarioActions } from "../enum/ScenarioActions";
import { Scenarios } from "../enum/Scenarios";

export class Scenario {
    scenario: Scenarios;
    action: ScenarioActions

    constructor(scenario: Scenarios, action: ScenarioActions) {
        this.scenario = scenario;
        this.action = action;
    }
}