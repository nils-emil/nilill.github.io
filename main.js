(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'popcorn-prime';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _movie_row_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./movie-row.component */ "./src/app/movie-row.component.ts");
/* harmony import */ var _search_block_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./search-block.component */ "./src/app/search-block.component.ts");
/* harmony import */ var _not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./not-found.component */ "./src/app/not-found.component.ts");
/* harmony import */ var _movie_over_view_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./movie-over-view.component */ "./src/app/movie-over-view.component.ts");
/* harmony import */ var _navigation_context__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./navigation-context */ "./src/app/navigation-context.ts");
/* harmony import */ var _movie_http_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./movie.http-service */ "./src/app/movie.http-service.ts");
/* harmony import */ var _movie_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./movie-detail.component */ "./src/app/movie-detail.component.ts");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_6__["ROUTES"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ],
            // tslint:disable-next-line:whitespace
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _movie_row_component__WEBPACK_IMPORTED_MODULE_7__["MovieRowComponent"],
                _search_block_component__WEBPACK_IMPORTED_MODULE_8__["SearchBlockComponent"],
                _not_found_component__WEBPACK_IMPORTED_MODULE_9__["NotFoundComponent"],
                _movie_detail_component__WEBPACK_IMPORTED_MODULE_13__["MovieDetailComponent"],
                _movie_over_view_component__WEBPACK_IMPORTED_MODULE_10__["MovieOverViewComponent"]],
            providers: [_navigation_context__WEBPACK_IMPORTED_MODULE_11__["NavigationContext"],
                _movie_http_service__WEBPACK_IMPORTED_MODULE_12__["MovieHttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var _movie_over_view_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movie-over-view.component */ "./src/app/movie-over-view.component.ts");
/* harmony import */ var _movie_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./movie-detail.component */ "./src/app/movie-detail.component.ts");
/* harmony import */ var _not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./not-found.component */ "./src/app/not-found.component.ts");



var ROUTES = [
    {
        path: '',
        component: _movie_over_view_component__WEBPACK_IMPORTED_MODULE_0__["MovieOverViewComponent"]
    },
    {
        path: 'movie-details/:id',
        component: _movie_detail_component__WEBPACK_IMPORTED_MODULE_1__["MovieDetailComponent"]
    },
    {
        path: 'movie-details/error/404',
        component: _not_found_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"]
    }
];


/***/ }),

/***/ "./src/app/movie-detail.component.ts":
/*!*******************************************!*\
  !*** ./src/app/movie-detail.component.ts ***!
  \*******************************************/
/*! exports provided: MovieDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailComponent", function() { return MovieDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _movie_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./movie.http-service */ "./src/app/movie.http-service.ts");




var MovieDetailComponent = /** @class */ (function () {
    function MovieDetailComponent(route, router, movieHttpService) {
        this.route = route;
        this.router = router;
        this.movieHttpService = movieHttpService;
    }
    MovieDetailComponent.prototype.navigateToMainPage = function () {
        this.router.navigate(['/']);
    };
    MovieDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.movieHttpService.getMovieDetails(this.route.snapshot.paramMap.get('id'))
            .subscribe(function (response) { return _this.movie = response; }, function () { return _this.router.navigate(['/movie-details/error/404']); });
    };
    MovieDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n    <button type=\"button\" class=\"nav-bar__button nav-bar__button-left rounded-circle\" (click)=\"navigateToMainPage()\">\n      <span class=\"fa fa-arrow-left\"></span>\n    </button>\n    <div class=\"container details-container pt-5\">\n      <div class=\"row\">\n        <div class=\"col-md-12 col-lg-3 pt-lg-5\">\n          <img class='detail-view-image' src=\"../assets/images/movie-covers/{{movie?.img}}\">\n        </div>\n        <div class=\"col-md-12 col-lg-9 p-2 pt-5\">\n          <table class=\"table\">\n            <tbody>\n            <tr>\n              <td>Name</td>\n              <td>{{movie?.name}}</td>\n            </tr>\n            <tr>\n              <th scope=\"row\">Description</th>\n              <td>{{movie?.description}}</td>\n            </tr>\n            <tr>\n              <th scope=\"row\">Genres</th>\n              <td>{{movie?.genres}}</td>\n            </tr>\n            <tr>\n              <th scope=\"row\">Length</th>\n              <td>{{movie?.length}}</td>\n            </tr>\n            <tr>\n              <th scope=\"row\">Ratings</th>\n              <td>{{movie?.rate}}</td>\n            </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  ",
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _movie_http_service__WEBPACK_IMPORTED_MODULE_3__["MovieHttpService"]])
    ], MovieDetailComponent);
    return MovieDetailComponent;
}());



/***/ }),

/***/ "./src/app/movie-over-view.component.ts":
/*!**********************************************!*\
  !*** ./src/app/movie-over-view.component.ts ***!
  \**********************************************/
/*! exports provided: MovieOverViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieOverViewComponent", function() { return MovieOverViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _navigation_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navigation-context */ "./src/app/navigation-context.ts");



var MovieOverViewComponent = /** @class */ (function () {
    function MovieOverViewComponent(navigationContext) {
        this.navigationContext = navigationContext;
        this.menuToggled = false;
    }
    MovieOverViewComponent.prototype.isMenuToggled = function () {
        return this.navigationContext.menuToggled;
    };
    MovieOverViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movie-overview',
            template: "\n    <div class=\"row m-0\">\n      <app-movie-row class=\"movie-content__nav-bar-active p-0 pt-5 col-sm-10 col-7\" *ngIf=\"isMenuToggled()\"></app-movie-row>\n      <app-movie-row class=\"movie-content__nav-bar-inactive p-0 pt-5 col-12\" *ngIf=\"!isMenuToggled()\"></app-movie-row>\n      <app-search-block class=\"p-0\" [ngClass]=\"{'col-sm-2 col-5' : isMenuToggled()}\"></app-search-block>\n    </div>\n  ",
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_navigation_context__WEBPACK_IMPORTED_MODULE_2__["NavigationContext"]])
    ], MovieOverViewComponent);
    return MovieOverViewComponent;
}());



/***/ }),

/***/ "./src/app/movie-row.component.ts":
/*!****************************************!*\
  !*** ./src/app/movie-row.component.ts ***!
  \****************************************/
/*! exports provided: MovieRowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieRowComponent", function() { return MovieRowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _navigation_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navigation-context */ "./src/app/navigation-context.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _movie_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./movie.http-service */ "./src/app/movie.http-service.ts");





var MovieRowComponent = /** @class */ (function () {
    function MovieRowComponent(movieHttpService, navigationContext, router) {
        this.movieHttpService = movieHttpService;
        this.navigationContext = navigationContext;
        this.router = router;
    }
    MovieRowComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.movieHttpService.getMovieGenres().subscribe(function (response) { return _this.genres = response; });
        this.movieHttpService.getAllMovies().subscribe(function (response) { return _this.movies = response; });
    };
    MovieRowComponent.prototype.matchesKeyword = function (movie) {
        return movie.name.toUpperCase().indexOf(this.navigationContext.movieNameKeyword.toUpperCase()) > -1;
    };
    MovieRowComponent.prototype.isInCorrectGenre = function (movie, genre) {
        return movie.genres.indexOf(genre) > -1;
    };
    MovieRowComponent.prototype.isGenreAllowed = function (genre) {
        return this.navigationContext.selectedGenres.length === 0
            || this.navigationContext.selectedGenres.indexOf(genre) > -1;
    };
    MovieRowComponent.prototype.goToMovieDetails = function (movie) {
        this.router.navigate(['/movie-details', movie.id]);
    };
    MovieRowComponent.prototype.scrollRight = function (id) {
        this.sideScroll(id, 10);
    };
    MovieRowComponent.prototype.scrollLeft = function (id) {
        this.sideScroll(id, -10);
    };
    MovieRowComponent.prototype.sideScroll = function (id, increment) {
        var elementById = document.getElementById(id);
        if (elementById) {
            this.scrollerInterval = setInterval(function () {
                elementById.scrollLeft += increment;
            }, 10);
        }
    };
    MovieRowComponent.prototype.cancelScroll = function () {
        clearInterval(this.scrollerInterval);
    };
    MovieRowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movie-row',
            template: "\n    <div class=\"container\">\n      <div *ngIf=\"navigationContext.movieNameKeyword.length > 0\">\n        <h1 class=\"heading-primary pl-5\">Search results for '{{navigationContext.movieNameKeyword}}'</h1>\n        <div class=\"row single-line-row align-middle px-4\">\n           <span class=\"scroll__left align-middle pr-5 fa fa-arrow-left\"\n                 (mouseover)=\"scrollLeft('keyWordSearch')\"\n                 (mouseout)=\"cancelScroll()\"></span>\n          <div [attr.id]=\"'keyWordSearch'\" class=\"row single-line-row mb-5\">\n            <div class=\"py-4\" *ngFor=\"let movie of movies\">\n              <div class=\"col-md-6\" *ngIf=\"matchesKeyword(movie)\" (click)=\"goToMovieDetails(movie)\">\n                <div class=\"film-card\">\n                  <img [src]=\"'assets/images/movie-covers/' + movie?.img\">\n                </div>\n              </div>\n            </div>\n          </div>\n          <span class=\"scroll__right pl-5 fa fa-arrow-right align-content-center\"\n                (mouseover)=\"scrollRight('keyWordSearch')\"\n                (mouseout)=\"cancelScroll()\"></span>\n        </div>\n      </div>\n      <ng-container *ngIf=\"navigationContext.movieNameKeyword.length == 0\">\n        <div *ngFor=\"let genre of genres\">\n          <ng-container *ngIf=\"isGenreAllowed(genre)\">\n            <h1 class=\"heading-primary pl-5\">{{genre.toUpperCase()}}</h1>\n            <div class=\"row single-line-row align-middle px-4\">\n           <span class=\"scroll__left align-middle pr-5 fa fa-arrow-left\"\n                 (mouseover)=\"scrollLeft(genre)\"\n                 (mouseout)=\"cancelScroll()\"></span>\n              <div [attr.id]=\"genre\" class=\"row single-line-row mb-5\">\n                <div class=\"py-4\" *ngFor=\"let movie of movies\">\n                  <div class=\"col-md-6\" *ngIf=\"isInCorrectGenre(movie, genre)\" (click)=\"goToMovieDetails(movie)\">\n                    <div class=\"film-card\">\n                      <img [src]=\"'assets/images/movie-covers/' + movie?.img\">\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <span class=\"scroll__right pl-5 fa fa-arrow-right align-content-center\"\n                    (mouseover)=\"scrollRight(genre)\"\n                    (mouseout)=\"cancelScroll()\"></span>\n            </div>\n          </ng-container>\n        </div>\n      </ng-container>\n    </div>\n  ",
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_movie_http_service__WEBPACK_IMPORTED_MODULE_4__["MovieHttpService"],
            _navigation_context__WEBPACK_IMPORTED_MODULE_2__["NavigationContext"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], MovieRowComponent);
    return MovieRowComponent;
}());



/***/ }),

/***/ "./src/app/movie.http-service.ts":
/*!***************************************!*\
  !*** ./src/app/movie.http-service.ts ***!
  \***************************************/
/*! exports provided: MovieHttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieHttpService", function() { return MovieHttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _movie_mock_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./movie.mock-data */ "./src/app/movie.mock-data.ts");




var MovieHttpService = /** @class */ (function () {
    function MovieHttpService() {
        this.menuToggled = false;
        this.selectedGenres = [];
    }
    MovieHttpService.prototype.getMovieDetails = function (movieId) {
        // mock data instead of http call
        var filteredMovies = _movie_mock_data__WEBPACK_IMPORTED_MODULE_3__["movies"].filter(function (movie) { return movie.id.toString() === movieId; });
        if (filteredMovies.length > 0) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(filteredMovies[0]);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Not found');
    };
    MovieHttpService.prototype.getMovieGenres = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(['action', 'adventure', 'biography', 'comedy', 'crime',
            'drama', 'history', 'mystery', 'scifi', 'sport', 'thriller']);
    };
    MovieHttpService.prototype.getAllMovies = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_movie_mock_data__WEBPACK_IMPORTED_MODULE_3__["movies"]);
    };
    MovieHttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], MovieHttpService);
    return MovieHttpService;
}());



/***/ }),

/***/ "./src/app/movie.mock-data.ts":
/*!************************************!*\
  !*** ./src/app/movie.mock-data.ts ***!
  \************************************/
/*! exports provided: movies */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "movies", function() { return movies; });
/* harmony import */ var _movie_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movie.model */ "./src/app/movie.model.ts");

var movies = [
    {
        id: 1,
        key: 'deadpool',
        name: 'Deadpool',
        description: 'A former Special Forces operative turned mercenary is subjected to a rogue experiment that leaves him with accelerated healing powers, adopting the alter ego Deadpool.',
        genres: [_movie_model__WEBPACK_IMPORTED_MODULE_0__["genreType"].action, _movie_model__WEBPACK_IMPORTED_MODULE_0__["genreType"].adventure, _movie_model__WEBPACK_IMPORTED_MODULE_0__["genreType"].comedy],
        rate: '8.6',
        length: '1hr 48mins',
        img: 'deadpool.jpg'
    },
    {
        id: 2,
        key: 'we-are-the-millers',
        name: 'We\'re the Millers',
        description: 'A veteran pot dealer creates a fake family as part of his plan to move a huge shipment of weed into the U.S. from Mexico.',
        genres: [_movie_model__WEBPACK_IMPORTED_MODULE_0__["genreType"].adventure, _movie_model__WEBPACK_IMPORTED_MODULE_0__["genreType"].comedy, _movie_model__WEBPACK_IMPORTED_MODULE_0__["genreType"].crime],
        rate: '7.0',
        length: '1hr 50mins',
        img: 'we-are-the-millers.jpg'
    },
    {
        id: 3,
        key: 'straight-outta-compton',
        name: 'Straight Outta Compton',
        description: 'The group NWA emerges from the mean streets of Compton in Los Angeles, California, in the mid-1980s and revolutionizes Hip Hop culture with their music and tales about life in the hood.',
        genres: [_movie_model__WEBPACK_IMPORTED_MODULE_0__["genreType"].biography, _movie_model__WEBPACK_IMPORTED_MODULE_0__["genreType"].drama, _movie_model__WEBPACK_IMPORTED_MODULE_0__["genreType"].history],
        rate: '8.0',
        length: '2hr 27mins',
        img: 'straight-outta-compton.jpg'
    },
    {
        id: 4,
        key: 'gridiron-gang',
        name: 'Gridiron Gang',
        description: 'Teenagers at a juvenile detention center, under the leadership of their counselor, gain self-esteem by playing football together.',
        genres: [_movie_model__WEBPACK_IMPORTED_MODULE_0__["genreType"].crime, _movie_model__WEBPACK_IMPORTED_MODULE_0__["genreType"].drama, _movie_model__WEBPACK_IMPORTED_MODULE_0__["genreType"].sport],
        rate: '6.9',
        length: '2hr 5mins',
        img: 'gridiron-gang.jpg'
    },
    {
        id: 5,
        key: 'american-gangster',
        name: 'American Gangster',
        description: 'In 1970s America, a detective works to bring down the drug empire of Frank Lucas, a heroin kingpin from Manhattan, who is smuggling the drug into the country from the Far East.',
        genres: [_movie_model__WEBPACK_IMPORTED_MODULE_0__["genreType"].biography, _movie_model__WEBPACK_IMPORTED_MODULE_0__["genreType"].crime, _movie_model__WEBPACK_IMPORTED_MODULE_0__["genreType"].drama],
        rate: '7.8',
        length: '2hr 37mins',
        img: 'american-gangster.jpg'
    },
    {
        id: 6,
        key: 'gangster-squad',
        name: 'Gangster Squad',
        description: 'It\'s 1949 Los Angeles, the city is run by gangsters and a malicious mobster, Mickey Cohen. Determined to end the corruption, John O\'Mara assembles a team of cops, ready to take down the ruthless leader and restore peace to the city.',
        genres: [_movie_model__WEBPACK_IMPORTED_MODULE_0__["genreType"].action, _movie_model__WEBPACK_IMPORTED_MODULE_0__["genreType"].crime, _movie_model__WEBPACK_IMPORTED_MODULE_0__["genreType"].drama],
        rate: '6.8',
        length: '1hr 53mins',
        img: 'gangster-squad.jpg'
    },
    {
        id: 7,
        key: 'now-you-see-me',
        name: 'Now You See Me',
        description: 'An FBI agent and an Interpol detective track a team of illusionists who pull off bank heists during their performances and reward their audiences with the money.',
        genres: [_movie_model__WEBPACK_IMPORTED_MODULE_0__["genreType"].crime, _movie_model__WEBPACK_IMPORTED_MODULE_0__["genreType"].mystery, _movie_model__WEBPACK_IMPORTED_MODULE_0__["genreType"].thriller],
        rate: '7.3',
        length: '1hr 55mins',
        img: 'now-you-see-me.jpg'
    },
    {
        id: 8,
        key: 'jurassic-world',
        name: 'Jurassic World',
        description: 'A new theme park is built on the original site of Jurassic Park. Everything is going well until the park\'s newest attraction--a genetically modified giant stealth killing machine--escapes containment and goes on a killing spree.',
        genres: [_movie_model__WEBPACK_IMPORTED_MODULE_0__["genreType"].action, _movie_model__WEBPACK_IMPORTED_MODULE_0__["genreType"].adventure, _movie_model__WEBPACK_IMPORTED_MODULE_0__["genreType"].scifi],
        rate: '7.1',
        length: '2hr 4mins',
        img: 'jurassic-world.jpg'
    },
    {
        id: 9,
        key: 'mission-impossible-rogue-nation',
        name: 'Mission: Impossible: Rogue Nation',
        description: 'Ethan and team take on their most impossible mission yet, eradicating the Syndicate - an International rogue organization as highly skilled as they are, committed to destroying the IMF.',
        genres: [_movie_model__WEBPACK_IMPORTED_MODULE_0__["genreType"].action, _movie_model__WEBPACK_IMPORTED_MODULE_0__["genreType"].adventure, _movie_model__WEBPACK_IMPORTED_MODULE_0__["genreType"].thriller],
        rate: '7.5',
        length: '2hr 11mins',
        img: 'mission-impossible-rogue-nation.jpg'
    },
    {
        id: 10,
        key: 'the-man-from-uncle',
        name: 'The Man from U.N.C.L.E.',
        description: 'In the early 1960s, CIA agent Napoleon Solo and KGB operative Illya Kuryakin participate in a joint mission against a mysterious criminal organization, which is working to proliferate nuclear weapons.',
        genres: [_movie_model__WEBPACK_IMPORTED_MODULE_0__["genreType"].action, _movie_model__WEBPACK_IMPORTED_MODULE_0__["genreType"].adventure, _movie_model__WEBPACK_IMPORTED_MODULE_0__["genreType"].thriller],
        rate: '7.3',
        length: '1hr 56mins',
        img: 'the-man-from-uncle.jpg'
    },
    {
        id: 10,
        key: 'spectre',
        name: 'Spectre',
        description: 'A cryptic message from Bond\'s past sends him on a trail to uncover a sinister organization. While M battles political forces to keep the secret service alive, Bond peels back the layers of deceit to reveal the terrible truth behind SPECTRE.',
        genres: [_movie_model__WEBPACK_IMPORTED_MODULE_0__["genreType"].action, _movie_model__WEBPACK_IMPORTED_MODULE_0__["genreType"].adventure, _movie_model__WEBPACK_IMPORTED_MODULE_0__["genreType"].thriller],
        rate: '6.9',
        length: '2hr 28mins',
        img: 'spectre.jpg'
    },
    {
        id: 11,
        key: 'legend',
        name: 'Legend',
        description: 'The film tells the story of the identical twin gangsters Reggie and Ronnie Kray, two of the most notorious criminals in British history, and their organised crime empire in the East End of London during the 1960s.',
        genres: [_movie_model__WEBPACK_IMPORTED_MODULE_0__["genreType"].biography, _movie_model__WEBPACK_IMPORTED_MODULE_0__["genreType"].crime, _movie_model__WEBPACK_IMPORTED_MODULE_0__["genreType"].drama],
        rate: '7.0',
        length: '2hr 28mins',
        img: 'legend.jpg'
    },
    {
        id: 12,
        key: 'southpaw',
        name: 'Southpaw',
        description: 'Boxer Billy Hope turns to trainer Tick Wills to help him get his life back on track after losing his wife in a tragic accident and his daughter to child protection services.',
        genres: [_movie_model__WEBPACK_IMPORTED_MODULE_0__["genreType"].action, _movie_model__WEBPACK_IMPORTED_MODULE_0__["genreType"].drama, _movie_model__WEBPACK_IMPORTED_MODULE_0__["genreType"].sport],
        rate: '7.5',
        length: '2hr 4mins',
        img: 'southpaw.jpg'
    },
    {
        id: 13,
        key: 'bridge-of-spies',
        name: 'Bridge of Spies',
        description: 'During the Cold War, an American lawyer is recruited to defend an arrested Soviet spy in court, and then help the CIA facilitate an exchange of the spy for the Soviet captured American U2 spy plane pilot, Francis Gary Powers.',
        genres: [_movie_model__WEBPACK_IMPORTED_MODULE_0__["genreType"].biography, _movie_model__WEBPACK_IMPORTED_MODULE_0__["genreType"].drama, _movie_model__WEBPACK_IMPORTED_MODULE_0__["genreType"].thriller],
        rate: '7.7',
        length: '2hr 22mins',
        img: 'bridge-of-spies.jpg'
    },
    {
        id: 14,
        key: 'ant-man',
        name: 'Ant-Man',
        description: 'Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will save the world.',
        genres: [_movie_model__WEBPACK_IMPORTED_MODULE_0__["genreType"].action, _movie_model__WEBPACK_IMPORTED_MODULE_0__["genreType"].adventure, _movie_model__WEBPACK_IMPORTED_MODULE_0__["genreType"].scifi],
        rate: '7.4',
        length: '1hr 57mins',
        img: 'ant-man.jpg'
    },
    {
        id: 15,
        key: 'fast-and-furious-7',
        name: 'Fast & Furious 7',
        description: 'Deckard Shaw seeks revenge against Dominic Toretto and his family for his comatose brother.',
        genres: [_movie_model__WEBPACK_IMPORTED_MODULE_0__["genreType"].action, _movie_model__WEBPACK_IMPORTED_MODULE_0__["genreType"].crime, _movie_model__WEBPACK_IMPORTED_MODULE_0__["genreType"].thriller],
        rate: '7.3',
        length: '2hr 17mins',
        img: 'fast-and-furious-7.jpg'
    },
    {
        id: 16,
        key: 'tracers',
        name: 'Tracers',
        description: 'Wanted by the Chinese mafia, a New York City bike messenger escapes into the world of parkour after meeting a beautiful stranger.',
        genres: [_movie_model__WEBPACK_IMPORTED_MODULE_0__["genreType"].action, _movie_model__WEBPACK_IMPORTED_MODULE_0__["genreType"].crime, _movie_model__WEBPACK_IMPORTED_MODULE_0__["genreType"].drama],
        rate: '5.6',
        length: '1hr 34mins',
        img: 'tracers.jpg'
    },
    {
        id: 17,
        key: 'running-scared',
        name: 'Running Scared',
        description: 'A low-ranking thug is entrusted by his crime boss to dispose of a gun that killed corrupt cops, but things get out of control when the gun ends up in wrong hands.',
        genres: [_movie_model__WEBPACK_IMPORTED_MODULE_0__["genreType"].action, _movie_model__WEBPACK_IMPORTED_MODULE_0__["genreType"].crime, _movie_model__WEBPACK_IMPORTED_MODULE_0__["genreType"].drama],
        rate: '7.4',
        length: '2hr 2mins',
        img: 'running-scared.jpg'
    },
    {
        id: 18,
        key: 'the-hangover',
        name: 'The Hangover',
        description: 'Three buddies wake up from a bachelor party in Las Vegas, with no memory of the previous night and the bachelor missing. They make their way around the city in order to find their friend before his wedding.',
        genres: [_movie_model__WEBPACK_IMPORTED_MODULE_0__["genreType"].comedy],
        rate: '7.8',
        length: '1hr 40mins',
        img: 'the-hangover.jpg'
    },
    {
        id: 19,
        key: 'project-x',
        name: 'Project X',
        description: '3 high school seniors throw a birthday party to make a name for themselves. As the night progresses, things spiral out of control as word of the party spreads.',
        genres: [_movie_model__WEBPACK_IMPORTED_MODULE_0__["genreType"].comedy, _movie_model__WEBPACK_IMPORTED_MODULE_0__["genreType"].crime],
        rate: '6.7',
        length: '1hr 28mins',
        img: 'project-x.jpg'
    },
    {
        id: 20,
        key: 'the-dark-knight',
        name: 'The Dark Knight',
        description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.',
        genres: [_movie_model__WEBPACK_IMPORTED_MODULE_0__["genreType"].action, _movie_model__WEBPACK_IMPORTED_MODULE_0__["genreType"].crime, _movie_model__WEBPACK_IMPORTED_MODULE_0__["genreType"].drama],
        rate: '9.0',
        length: '2hr 32mins',
        img: 'the-dark-knight.jpg'
    },
    {
        id: 21,
        key: 'the-tournament',
        name: 'The Tournament',
        description: 'Every seven years in an unsuspecting town, The Tournament takes place. A battle royale between 30 of the world\'s deadliest assassins. The last man standing receiving the $10,000,000 cash prize and the title of Worlds No 1, which itself carries the legendary million dollar a bullet price tag.',
        genres: [_movie_model__WEBPACK_IMPORTED_MODULE_0__["genreType"].action, _movie_model__WEBPACK_IMPORTED_MODULE_0__["genreType"].thriller],
        rate: '6.1',
        length: '1hr 35mins',
        img: 'the-tournament.jpg'
    },
    {
        id: 22,
        key: 'the-matrix',
        name: 'The Matrix',
        description: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
        genres: [_movie_model__WEBPACK_IMPORTED_MODULE_0__["genreType"].action, _movie_model__WEBPACK_IMPORTED_MODULE_0__["genreType"].scifi],
        rate: '8.7',
        length: '2hr 16mins',
        img: 'the-matrix.jpg'
    },
    {
        id: 23,
        key: 'bad-boys',
        name: 'Bad Boys',
        description: 'Two hip detectives protect a murder witness while investigating a case of stolen heroin.',
        genres: [_movie_model__WEBPACK_IMPORTED_MODULE_0__["genreType"].action, _movie_model__WEBPACK_IMPORTED_MODULE_0__["genreType"].comedy, _movie_model__WEBPACK_IMPORTED_MODULE_0__["genreType"].crime],
        rate: '6.8',
        length: '1hr 59mins',
        img: 'bad-boys.jpg'
    }
];


/***/ }),

/***/ "./src/app/movie.model.ts":
/*!********************************!*\
  !*** ./src/app/movie.model.ts ***!
  \********************************/
/*! exports provided: genreType, Movie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genreType", function() { return genreType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Movie", function() { return Movie; });
var genreType = {
    action: 'action',
    adventure: 'adventure',
    biography: 'biography',
    comedy: 'comedy',
    crime: 'crime',
    drama: 'drama',
    history: 'history',
    mystery: 'mystery',
    scifi: 'scifi',
    sport: 'sport',
    thriller: 'thriller'
};
var Movie = /** @class */ (function () {
    function Movie() {
    }
    return Movie;
}());



/***/ }),

/***/ "./src/app/navigation-context.ts":
/*!***************************************!*\
  !*** ./src/app/navigation-context.ts ***!
  \***************************************/
/*! exports provided: NavigationContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationContext", function() { return NavigationContext; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavigationContext = /** @class */ (function () {
    function NavigationContext() {
        this.movieNameKeyword = '';
        this.menuToggled = false;
        this.selectedGenres = [];
    }
    NavigationContext = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], NavigationContext);
    return NavigationContext;
}());



/***/ }),

/***/ "./src/app/not-found.component.ts":
/*!****************************************!*\
  !*** ./src/app/not-found.component.ts ***!
  \****************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n    <div class=\"container pt-5\">\n      <p class=\"heading-primary pt-5\">The movie you were looking for was not found. We apologize</p>\n    </div>\n  ",
        })
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/search-block.component.ts":
/*!*******************************************!*\
  !*** ./src/app/search-block.component.ts ***!
  \*******************************************/
/*! exports provided: SearchBlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBlockComponent", function() { return SearchBlockComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _navigation_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navigation-context */ "./src/app/navigation-context.ts");
/* harmony import */ var _movie_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./movie.http-service */ "./src/app/movie.http-service.ts");




var SearchBlockComponent = /** @class */ (function () {
    function SearchBlockComponent(movieHttpService, navigationContext) {
        this.movieHttpService = movieHttpService;
        this.navigationContext = navigationContext;
        this.genres = [];
        this.movieNameKeyword = '';
    }
    SearchBlockComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.movieHttpService.getMovieGenres().subscribe(function (response) { return _this.genres = response; });
    };
    SearchBlockComponent.prototype.isChecked = function (genre) {
        return this.navigationContext.selectedGenres.indexOf(genre) > -1;
    };
    SearchBlockComponent.prototype.resetFilter = function () {
        this.navigationContext.selectedGenres = [];
        this.navigationContext.movieNameKeyword = '';
    };
    SearchBlockComponent.prototype.toggleGenre = function (genre) {
        var index = this.navigationContext.selectedGenres.indexOf(genre);
        if (index > -1) {
            if (this.navigationContext.selectedGenres.length === 1) {
                this.navigationContext.selectedGenres = [];
            }
            else {
                delete this.navigationContext.selectedGenres[index];
            }
        }
        else {
            this.navigationContext.selectedGenres.push(genre);
        }
    };
    SearchBlockComponent.prototype.toggleMenu = function () {
        this.navigationContext.menuToggled = !this.navigationContext.menuToggled;
    };
    SearchBlockComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search-block',
            template: "\n    <button type=\"button\" class=\"nav-bar__button rounded-circle\" (click)=\"toggleMenu()\">\n      <span class=\"fa fa-search\"></span>\n    </button>\n    <div class=\"nav-bar p-3\" *ngIf=\"navigationContext.menuToggled\">\n      <!--MOVIE-SEARCH-->\n      <label class=\"pt-5\" for=\"exampleFormControlInput1\">Keyword search</label>\n      <input type=\"text\"\n             class=\"form-control\"\n             [(ngModel)]=\"navigationContext.movieNameKeyword\"\n             placeholder=\"Type keyword\">\n      <!--GENRE-->\n      <ng-container *ngIf=\"!navigationContext.movieNameKeyword || navigationContext.movieNameKeyword.length === 0\">\n        <p class=\"pt-3\">Select genre</p>\n        <ul>\n          <div class=\"form-check py-1\" *ngFor=\"let genre of genres\">\n            <input class=\"form-check-input \"\n                   [checked]=\"isChecked(genre)\"\n                   type=\"checkbox\"\n                   (click)=\"toggleGenre(genre)\"\n                   value=\"\"\n                   [attr.id]=\"genre + '-input'\">\n            <label class=\"form-check-label\" for=\"{{genre}} + '-input'\">\n              {{genre.charAt(0).toUpperCase() + genre.slice(1)}}\n            </label>\n          </div>\n        </ul>\n      </ng-container>\n      <button class=\"btn btn-dark mt-4\" (click)=\"resetFilter()\">Clear filter</button>\n    </div>\n  ",
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_movie_http_service__WEBPACK_IMPORTED_MODULE_3__["MovieHttpService"],
            _navigation_context__WEBPACK_IMPORTED_MODULE_2__["NavigationContext"]])
    ], SearchBlockComponent);
    return SearchBlockComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/nils/school/real-deal/popcorn-prime/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map