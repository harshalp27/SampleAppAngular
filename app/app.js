//var myModule = null;

(function ()
{
    var bookscontroller = function($scope){

        $scope.obj = {
             message: 'Books contoller Block'
            };
        $scope.countries = [
            "India",
            "Australia",
            "Japan",
            "Sri Lanka",
            "USA"
        ];


        $scope.books = [];

        $scope.showBooks = function(){
            $scope.books = [
                 { Id: 1, BookName: "Book1", AuthorName: "Author1" },
                 { Id: 2, BookName: "Book2", AuthorName: "Author2" },
                 { Id: 3, BookName: "Book3", AuthorName: "Author3" },
                 { Id: 4, BookName: "Book4", AuthorName: "Author4" },
                 { Id: 5, BookName: "Book5", AuthorName: "Author5" },
            ]
        }    
}
    var app = angular.module('myAngularApplication',[]);
    app.controller('booksController',bookscontroller);
//var app1 = angular.module('myAngularApplication',[]);
}());

//CreateModule();