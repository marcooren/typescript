'use strict';
class History {
    'use strict';

      back;
      forward;
    constructor() {
        this.back = [];
        this.forward=[];
    };

    goBack() {
        if (this.back.length==0) {
            return -1;
        }
        return this.back.pop();


    };

    goForward() {
        if (this.forward.length==0){
            return -1;
        }

        return this.forward.pop();

    };

    addToHistory(id) {
        this.back.push(id);

    };

    addToBack(id){
        this.back.push(id);

    };

    addToForward(id){
        this.forward.push(id);

    };

};

//
// History*************************************
// constructor()********************************
// goBack()***********************************
// goForward()***********************************
// addToHistory(id)******************************