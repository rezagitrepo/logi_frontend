export default class NoteModel {
    time_stamp: string;
    body: string;

    constructor(ts: string, b: string) {
        this.time_stamp = ts;
        this.body = b;
    }
}
