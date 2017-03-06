/**
 * Created by marco on 22/02/2017.
 */
'use strict';

class File {
    'use strict';
    id;
    name;
    content;
    constructor(id,name,content){
        this.id=id;
        this.name=name;
        this.content=content;
    };

    rename(newName) {
        this.name=newName;
    };


    setContent (content) {
        this.content=content;
    };

    getContent(content) {
        return this.content;
    };

    getId() {
        return this.id;
    };

    getType() {
        return "file";
    };


};

// File
// constructor(id, name, content)  ******************************************
// rename(newName) ************************************************
// setContent(content)*****************************************
// getContent()*************************************************
// getId()*****************************************
// getType()******************************************************
