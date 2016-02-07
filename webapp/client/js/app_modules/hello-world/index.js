'use strict';
var stylesheet     = require('./style.scss');
var FormCommand    = require('./form-command');

/*!
 * Hello World
 */
module.exports = function HelloWorld() {

    this.formCommand = null;

    /*
        Initialise the command form.
    */
    this.init = function() {
        this.formCommand = new FormCommand();
        this.formCommand.init();
    }

};