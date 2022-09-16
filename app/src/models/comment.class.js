export class Comment {
    id= 0;
    comment = '';
    userID = '';

    constructor(id, comment, userID){
        this.id = id;
        this.comment = comment;
        this.userID = userID;
    }
}