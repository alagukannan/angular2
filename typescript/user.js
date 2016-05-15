var user = (function () {
    function user(fname, lname) {
        this.firstname = fname;
        this.lastname = lname;
    }
    user.prototype.getFullName = function () {
        return this.firstname + ' ' + this.lastname;
    };
    return user;
}());
//# sourceMappingURL=user.js.map