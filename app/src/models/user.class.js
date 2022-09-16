export class User {
    id = 0;
    name = '';
    slug = '';
    surname = '';
    email = '';
    aboutMe = '';
    avatarID= '';

    constructor(id, name, slug, surname, email, aboutMe, avatarID){
        this.id = id;
        this.name = name;
        this.slug = slug;
        this.surname = surname;
        this.email = email;
        this.aboutMe = aboutMe;
        this.avatarID = avatarID;
    }
}