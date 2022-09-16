export class Post {
    id= 0;
    title = '';
    slug = '';
    body = '';
    imageID= '';
    userID = 0;
    comments = [];

    constructor(id, title, slug, body, imageID, userID, comments){
        this.id = id;
        this.title = title;
        this.slug = slug;
        this.body = body;
        this.imageID = imageID;
        this.userID = userID;
        this.comments = comments;
    }
}