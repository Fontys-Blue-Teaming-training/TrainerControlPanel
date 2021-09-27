import { throws } from "assert";
import { ScenarioActions } from "../enum/ScenarioActions";
import { Scenarios } from "../enum/Scenarios";

export class Scenario {
    scenarios: Scenarios;
    action: ScenarioActions
    
    constructor(scenarios: Scenarios, action: ScenarioActions){
        this.scenarios = scenarios;
        this.action = action;
    }
}