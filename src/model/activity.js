export default class Activity{
    constructor(id){
        this.id = id;
    }

    static fromJSON(json) {
        const act = new Activity(json.id);
        act.id = json.id;
        act.people = json.people;
        act.total = json.total;
        act.date = json.date;

        return act;
    }
}