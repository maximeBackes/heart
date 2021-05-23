import Activity from "./activity";

export default class Patient {

    constructor(id) {
        this.id = id;
    }

    static fromJSON(json) {
        const people = new Patient(json.id);
        people.id = json.id;
        people.firstname = json.firstname;
        people.lastname = json.lastname;
        people.birthday = json.birthday;
        people.gender = json.gender;
        people.height = json.height;
        people.weight = json.weight;
        people.recommandAct = json.recommandAct;
        people.hfrequency = json.Hfrequency;
        people.hpressure = json.Hpressure;
        people.oxygene = json.oxygene;
        people.glycemy = json.glycemy;
        people.activity = [];
        if (json.activity) {
            json.activity.forEach(act => {
                people.activity.push(Activity.fromJSON(act));
            });
        }

        return people;
    }

    fullname() {
        return this.gender + ". " + this.firstname + " " + this.lastname;
    }

    activity_average(){
        let sum = 0;

        this.steps.forEach(act => {
            sum += act.total;
        });

        return Math.round(sum/this.activity.length);
    }

    activity_level() {
        const steps_by_day = this.activity_average();

        if(steps_by_day<Number(this.recommandAct)){
            return ;
        }
        
    }

}