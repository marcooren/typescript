/**
 * Created by marco on 22/02/2017.
 */


var currentFolder=0;
var oldClick='';

class Folder {
    'use strict';
    id;
    name;
    children;
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.children = [];
    };

    getType () {
        return 'folder';
    };

    getId () {
        return this.id;
    };

    getChildren () {
        return this.children;
    };

    deleteChild (myId) {
        if(this.children)
       for(var i=0;i<this.children.length;i++){
           if(this.children[i].id==myId) {
         //      console.log(typeof(this.children));
               this.children.splice(i, 1);


           }
       }
    };

    addChild (item) {
        this.children.push(item);


    };

    findChild (myId) {
        for(var i=0;i<this.children.length;i++){
            if(this.children[i].id==myId) {
                return this.children[i];
            }
        }
    };


    rename (newName) {
        this.name=newName;
        buildFlatArray();

    };


};




//
// constructor(id, name) //*******************************************
// deleteChild(id)//***********************************
// rename(newName)  //***********************************
// addChild(Folder | File)//******************************
// findChild(id)//*************************************
// getChildren() //****************************************
// getId()   //****************************************************
// getType() //******************************************************




