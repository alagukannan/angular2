var Person = (function () {
    function Person(fname, lname) {
        this.firstname = fname;
        this.lastname = lname;
    }
    Person.prototype.getFullName = function () {
        return this.firstname + ' ' + this.lastname;
    };
    return Person;
}());
//# sourceMappingURL=Person.js.map