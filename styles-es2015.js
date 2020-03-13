(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles.sass":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/dist/cjs.js??ref--13-3!./src/styles.sass ***!
  \********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\n* {\n  box-sizing: border-box;\n  font-family: Raleway, serif;\n}\nbody {\n  margin: 0;\n  overflow: hidden;\n  overflow-y: scroll;\n}\n.flex-row-container {\n  display: flex;\n  flex-direction: row;\n  margin: auto auto;\n  align-items: center;\n  width: 100%;\n}\n.header-container {\n  padding-left: 25rem;\n  padding-right: 25rem;\n}\n@media only screen and (min-width: 900px) {\n  .flex-row-container {\n    padding-left: 10rem;\n    padding-right: 10rem;\n  }\n\n  .header-container {\n    padding-left: 10rem;\n    padding-right: 10rem;\n  }\n}\n@media only screen and (min-width: 1650px) {\n  .flex-row-container {\n    padding-left: 25rem;\n    padding-right: 25rem;\n  }\n\n  .header-container {\n    padding-left: 25rem;\n    padding-right: 25rem;\n  }\n}\n@media only screen and (max-width: 900px) {\n  .flex-row-container {\n    padding-left: 5rem;\n    padding-right: 5rem;\n  }\n\n  .header-container {\n    padding-left: 5rem;\n    padding-right: 5rem;\n  }\n}\n@media only screen and (max-width: 400px) {\n  .flex-row-container {\n    padding-left: 1rem;\n    padding-right: 1rem;\n  }\n\n  .header-container {\n    padding-left: 1rem;\n    padding-right: 1rem;\n  }\n}\n@media only screen and (min-width: 1250px) {\n  .pl-4 {\n    padding-left: 4rem;\n  }\n\n  .pr-4 {\n    padding-right: 4rem;\n  }\n}\n.container {\n  position: relative;\n  margin: 0 auto;\n  width: 100vw;\n  max-width: 200rem;\n  -webkit-animation-name: slideInFromLeft;\n          animation-name: slideInFromLeft;\n  -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n}\n@media only screen and (min-width: 1250px) {\n  .container {\n    position: relative;\n    width: 100vw;\n    min-height: 100vh;\n  }\n}\n.background-light-gray {\n  background-color: #F9F9F9;\n}\n@media only screen and (min-width: 1250px) {\n  .container {\n    display: flex;\n    justify-content: center;\n  }\n}\n@media only screen and (max-width: 1400px) {\n  .flex-row-container {\n    flex-direction: column;\n  }\n\n  .flex-direction-column-reverse-sm {\n    flex-direction: column-reverse;\n  }\n}\n.m-10 {\n  margin-top: 10rem;\n  margin-bottom: 10rem;\n}\n.pb-10 {\n  padding-bottom: 10rem;\n}\n.col-1 {\n  width: 8.3333333333%;\n}\n.col-2 {\n  width: 16.6666666667%;\n}\n.col-3 {\n  width: 25%;\n}\n.col-4 {\n  width: 33.3333333333%;\n}\n.col-5 {\n  width: 41.6666666667%;\n}\n.col-6 {\n  width: 50%;\n}\n.col-7 {\n  width: 58.3333333333%;\n}\n.col-8 {\n  width: 66.6666666667%;\n}\n.col-9 {\n  width: 75%;\n}\n.col-10 {\n  width: 83.3333333333%;\n}\n.col-11 {\n  width: 91.6666666667%;\n}\n.col-12 {\n  width: 100%;\n}\n@media only screen and (max-width: 1250px) {\n  .col-sm-1 {\n    width: 8.3333333333%;\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n  }\n\n  .col-sm-2 {\n    width: 16.6666666667%;\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n  }\n\n  .col-sm-3 {\n    width: 25%;\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n  }\n\n  .col-sm-4 {\n    width: 33.3333333333%;\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n  }\n\n  .col-sm-5 {\n    width: 41.6666666667%;\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n  }\n\n  .col-sm-6 {\n    width: 50%;\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n  }\n\n  .col-sm-7 {\n    width: 58.3333333333%;\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n  }\n\n  .col-sm-8 {\n    width: 66.6666666667%;\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n  }\n\n  .col-sm-9 {\n    width: 75%;\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n  }\n\n  .col-sm-10 {\n    width: 83.3333333333%;\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n  }\n\n  .col-sm-11 {\n    width: 91.6666666667%;\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n  }\n\n  .col-sm-12 {\n    width: 100%;\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n  }\n}\n.flex-center-sm {\n  display: flex;\n}\n.btn {\n  background-color: #16161D;\n  border: none;\n  color: white;\n  padding: 8px 32px;\n  text-align: center;\n  text-decoration: none;\n  font-weight: 500;\n  display: inline-block;\n  font-size: 1rem;\n  border-radius: 10px;\n  cursor: pointer;\n  transition: all 0.2s ease-in-out;\n}\n.btn:hover {\n  transform: scale(1.1);\n}\nh1 {\n  font-size: 3rem;\n  font-style: normal;\n  line-height: 4rem;\n  font-weight: 600;\n}\np {\n  font-size: 0.9rem;\n  line-height: 2;\n}\nimg {\n  max-width: 40rem;\n}\n.relative {\n  position: relative;\n}\n.mt-0 {\n  margin-top: 0 !important;\n}\n@media only screen and (max-width: 1250px) {\n  .flex-center-sm {\n    display: flex;\n    justify-content: center;\n  }\n\n  p {\n    text-align: center;\n  }\n\n  .col-6 > h1 {\n    text-align: center;\n  }\n}\n.flex-center {\n  display: flex;\n  justify-content: center;\n}\nhr {\n  width: 100%;\n}\n@media only screen and (max-width: 1250px) {\n  hr {\n    margin-bottom: 0;\n  }\n}\n.header-container {\n  display: flex;\n  margin-top: 0.5rem;\n  justify-content: space-between;\n}\n.header-logo {\n  cursor: pointer;\n  font-family: Space Mono, serif;\n  font-style: normal;\n  font-size: 2rem;\n  left: 0;\n  margin: 0;\n  line-height: 1;\n}\n.header-btn {\n  right: 0;\n}\n@media only screen and (max-width: 300px) {\n  .header-btn {\n    display: none;\n  }\n}\n@media only screen and (max-width: 900px) {\n  h1 {\n    font-size: 2rem;\n    line-height: 1;\n  }\n}\n@-webkit-keyframes slideInFromLeft {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes slideInFromLeft {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@media only screen and (min-width: 2700px) {\n  html {\n    font-size: 200%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9DOlxcVXNlcnNcXE5pbHNcXFByb2plY3RzXFxsYWF0LnNob3BcXGxhYXQvc3JjXFxzdHlsZXMuc2FzcyIsInNyYy9zdHlsZXMuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQUNBO0VBQ0Usc0JBQUE7RUFDQSwyQkFBQTtBQ0NGO0FEQ0E7RUFDRSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0VGO0FEQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ0dGO0FEREE7RUFDRSxtQkFBQTtFQUNBLG9CQUFBO0FDSUY7QURGQTtFQUNFO0lBQ0UsbUJBQUE7SUFDQSxvQkFBQTtFQ0tGOztFREpBO0lBQ0UsbUJBQUE7SUFDQSxvQkFBQTtFQ09GO0FBQ0Y7QUROQTtFQUNFO0lBQ0UsbUJBQUE7SUFDQSxvQkFBQTtFQ1FGOztFRFBBO0lBQ0UsbUJBQUE7SUFDQSxvQkFBQTtFQ1VGO0FBQ0Y7QURUQTtFQUNFO0lBQ0Usa0JBQUE7SUFDQSxtQkFBQTtFQ1dGOztFRFZBO0lBQ0Usa0JBQUE7SUFDQSxtQkFBQTtFQ2FGO0FBQ0Y7QURaQTtFQUNFO0lBQ0Usa0JBQUE7SUFDQSxtQkFBQTtFQ2NGOztFRGJBO0lBQ0Usa0JBQUE7SUFDQSxtQkFBQTtFQ2dCRjtBQUNGO0FEZkE7RUFDRTtJQUNFLGtCQUFBO0VDaUJGOztFRGhCQTtJQUNFLG1CQUFBO0VDbUJGO0FBQ0Y7QURsQkE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSx1Q0FBQTtVQUFBLCtCQUFBO0VBQ0EsMkJBQUE7VUFBQSxtQkFBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7QUNvQkY7QURsQkE7RUFDRTtJQUNFLGtCQUFBO0lBQ0EsWUFBQTtJQUNBLGlCQUFBO0VDcUJGO0FBQ0Y7QURwQkE7RUFDRSx5QkFBQTtBQ3NCRjtBRHBCQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLHVCQUFBO0VD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QUFDRjtBRGpLQTtFQUNFO0lBQ0UsZUFBQTtFQ21LRjtBQUNGIiwiZmlsZSI6InNyYy9zdHlsZXMuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbipcbiAgYm94LXNpemluZzogYm9yZGVyLWJveFxuICBmb250LWZhbWlseTogUmFsZXdheSwgc2VyaWZcblxuYm9keVxuICBtYXJnaW46IDBcbiAgb3ZlcmZsb3c6IGhpZGRlblxuICBvdmVyZmxvdy15OiBzY3JvbGxcblxuLmZsZXgtcm93LWNvbnRhaW5lclxuICBkaXNwbGF5OiBmbGV4XG4gIGZsZXgtZGlyZWN0aW9uOiByb3dcbiAgbWFyZ2luOiBhdXRvIGF1dG9cbiAgYWxpZ24taXRlbXM6IGNlbnRlclxuICB3aWR0aDogMTAwJVxuXG4uaGVhZGVyLWNvbnRhaW5lclxuICBwYWRkaW5nLWxlZnQ6IDI1cmVtXG4gIHBhZGRpbmctcmlnaHQ6IDI1cmVtXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTAwcHgpXG4gIC5mbGV4LXJvdy1jb250YWluZXJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcmVtXG4gICAgcGFkZGluZy1yaWdodDogMTByZW1cbiAgLmhlYWRlci1jb250YWluZXJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcmVtXG4gICAgcGFkZGluZy1yaWdodDogMTByZW1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNjUwcHgpXG4gIC5mbGV4LXJvdy1jb250YWluZXJcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cmVtXG4gICAgcGFkZGluZy1yaWdodDogMjVyZW1cbiAgLmhlYWRlci1jb250YWluZXJcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cmVtXG4gICAgcGFkZGluZy1yaWdodDogMjVyZW1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweClcbiAgLmZsZXgtcm93LWNvbnRhaW5lclxuICAgIHBhZGRpbmctbGVmdDogNXJlbVxuICAgIHBhZGRpbmctcmlnaHQ6IDVyZW1cbiAgLmhlYWRlci1jb250YWluZXJcbiAgICBwYWRkaW5nLWxlZnQ6IDVyZW1cbiAgICBwYWRkaW5nLXJpZ2h0OiA1cmVtXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpXG4gIC5mbGV4LXJvdy1jb250YWluZXJcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW1cbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtXG4gIC5oZWFkZXItY29udGFpbmVyXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtXG4gICAgcGFkZGluZy1yaWdodDogMXJlbVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyNTBweClcbiAgLnBsLTRcbiAgICBwYWRkaW5nLWxlZnQ6IDRyZW1cbiAgLnByLTRcbiAgICBwYWRkaW5nLXJpZ2h0OiA0cmVtXG5cbi5jb250YWluZXJcbiAgcG9zaXRpb246IHJlbGF0aXZlXG4gIG1hcmdpbjogMCBhdXRvXG4gIHdpZHRoOiAxMDB2d1xuICBtYXgtd2lkdGg6IDIwMHJlbVxuICBhbmltYXRpb24tbmFtZTogc2xpZGVJbkZyb21MZWZ0XG4gIGFuaW1hdGlvbi1kZWxheTogMHNcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxc1xuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyNTBweClcbiAgLmNvbnRhaW5lclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxuICAgIHdpZHRoOiAxMDB2d1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoXG5cbi5iYWNrZ3JvdW5kLWxpZ2h0LWdyYXlcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y5RjlGOVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyNTBweClcbiAgLmNvbnRhaW5lclxuICAgIGRpc3BsYXk6IGZsZXhcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxuXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQwMHB4KVxuICAuZmxleC1yb3ctY29udGFpbmVyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxuXG4gIC5mbGV4LWRpcmVjdGlvbi1jb2x1bW4tcmV2ZXJzZS1zbVxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZVxuXG4ubS0xMFxuICBtYXJnaW4tdG9wOiAxMHJlbVxuICBtYXJnaW4tYm90dG9tOiAxMHJlbVxuLnBiLTEwXG4gIHBhZGRpbmctYm90dG9tOiAxMHJlbVxuXG5AZm9yICRpIGZyb20gMSB0aHJvdWdoIDEyXG4gIC5jb2wtI3skaX1cbiAgICB3aWR0aDogMTAwJSAvIDEyICogJGlcblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjUwcHgpXG4gIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggMTJcbiAgICAuY29sLXNtLSN7JGl9XG4gICAgICB3aWR0aDogMTAwJSAvIDEyICogJGlcbiAgICAgIHBhZGRpbmctdG9wOiAxcmVtXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMXJlbVxuLmZsZXgtY2VudGVyLXNtXG4gIGRpc3BsYXk6IGZsZXhcblxuLmJ0blxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTYxNjFEXG4gIGJvcmRlcjogbm9uZVxuICBjb2xvcjogd2hpdGVcbiAgcGFkZGluZzogOHB4IDMycHhcbiAgdGV4dC1hbGlnbjogY2VudGVyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZVxuICBmb250LXdlaWdodDogNTAwXG4gIGRpc3BsYXk6IGlubGluZS1ibG9ja1xuICBmb250LXNpemU6IDFyZW1cbiAgYm9yZGVyLXJhZGl1czogMTBweFxuICBjdXJzb3I6IHBvaW50ZXJcbiAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dFxuXG4uYnRuOmhvdmVyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKVxuXG5oMVxuICBmb250LXNpemU6IDNyZW1cbiAgZm9udC1zdHlsZTogbm9ybWFsXG4gIGxpbmUtaGVpZ2h0OiA0cmVtXG4gIGZvbnQtd2VpZ2h0OiA2MDBcblxucFxuICBmb250LXNpemU6IC45cmVtXG4gIGxpbmUtaGVpZ2h0OiAyXG5cbmltZ1xuICBtYXgtd2lkdGg6IDQwcmVtXG5cbi5yZWxhdGl2ZVxuICBwb3NpdGlvbjogcmVsYXRpdmVcblxuLm10LTBcbiAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyNTBweClcbiAgLmZsZXgtY2VudGVyLXNtXG4gICAgZGlzcGxheTogZmxleFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyXG4gIHBcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcbiAgLmNvbC02ID4gaDFcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcbi5mbGV4LWNlbnRlclxuICBkaXNwbGF5OiBmbGV4XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyXG5oclxuICB3aWR0aDogMTAwJVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyNTBweClcbiAgaHJcbiAgICBtYXJnaW4tYm90dG9tOiAwXG5cbi5oZWFkZXJcbiAgJi1jb250YWluZXJcbiAgICBkaXNwbGF5OiBmbGV4XG4gICAgbWFyZ2luLXRvcDogLjVyZW1cbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW5cblxuICAmLWxvZ29cbiAgICBjdXJzb3I6IHBvaW50ZXJcbiAgICBmb250LWZhbWlseTogU3BhY2UgTW9ubywgc2VyaWZcbiAgICBmb250LXN0eWxlOiBub3JtYWxcbiAgICBmb250LXNpemU6IDJyZW1cbiAgICBsZWZ0OiAwXG4gICAgbWFyZ2luOiAwXG4gICAgbGluZS1oZWlnaHQ6IDFcblxuICAmLWJ0blxuICAgIHJpZ2h0OiAwXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMDBweClcbiAgICAgIGRpc3BsYXk6IG5vbmVcblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweClcblxuICBoMVxuICAgIGZvbnQtc2l6ZTogMnJlbVxuICAgIGxpbmUtaGVpZ2h0OiAxXG5cbkBrZXlmcmFtZXMgc2xpZGVJbkZyb21MZWZ0XG4gIDAlXG4gICAgb3BhY2l0eTogMFxuICAxMDAlXG4gICAgb3BhY2l0eTogMVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDI3MDBweClcbiAgaHRtbFxuICAgIGZvbnQtc2l6ZTogMjAwJVxuIiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtZmFtaWx5OiBSYWxld2F5LCBzZXJpZjtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG4uZmxleC1yb3ctY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgbWFyZ2luOiBhdXRvIGF1dG87XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaGVhZGVyLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctbGVmdDogMjVyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDI1cmVtO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDkwMHB4KSB7XG4gIC5mbGV4LXJvdy1jb250YWluZXIge1xuICAgIHBhZGRpbmctbGVmdDogMTByZW07XG4gICAgcGFkZGluZy1yaWdodDogMTByZW07XG4gIH1cblxuICAuaGVhZGVyLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHJlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHJlbTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNjUwcHgpIHtcbiAgLmZsZXgtcm93LWNvbnRhaW5lciB7XG4gICAgcGFkZGluZy1sZWZ0OiAyNXJlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNXJlbTtcbiAgfVxuXG4gIC5oZWFkZXItY29udGFpbmVyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDI1cmVtO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gIC5mbGV4LXJvdy1jb250YWluZXIge1xuICAgIHBhZGRpbmctbGVmdDogNXJlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cmVtO1xuICB9XG5cbiAgLmhlYWRlci1jb250YWluZXIge1xuICAgIHBhZGRpbmctbGVmdDogNXJlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cmVtO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gIC5mbGV4LXJvdy1jb250YWluZXIge1xuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xuICB9XG5cbiAgLmhlYWRlci1jb250YWluZXIge1xuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyNTBweCkge1xuICAucGwtNCB7XG4gICAgcGFkZGluZy1sZWZ0OiA0cmVtO1xuICB9XG5cbiAgLnByLTQge1xuICAgIHBhZGRpbmctcmlnaHQ6IDRyZW07XG4gIH1cbn1cbi5jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogMTAwdnc7XG4gIG1heC13aWR0aDogMjAwcmVtO1xuICBhbmltYXRpb24tbmFtZTogc2xpZGVJbkZyb21MZWZ0O1xuICBhbmltYXRpb24tZGVsYXk6IDBzO1xuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyNTBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICB9XG59XG4uYmFja2dyb3VuZC1saWdodC1ncmF5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y5RjlGOTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjUwcHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDAwcHgpIHtcbiAgLmZsZXgtcm93LWNvbnRhaW5lciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4gIC5mbGV4LWRpcmVjdGlvbi1jb2x1bW4tcmV2ZXJzZS1zbSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICB9XG59XG4ubS0xMCB7XG4gIG1hcmdpbi10b3A6IDEwcmVtO1xuICBtYXJnaW4tYm90dG9tOiAxMHJlbTtcbn1cblxuLnBiLTEwIHtcbiAgcGFkZGluZy1ib3R0b206IDEwcmVtO1xufVxuXG4uY29sLTEge1xuICB3aWR0aDogOC4zMzMzMzMzMzMzJTtcbn1cblxuLmNvbC0yIHtcbiAgd2lkdGg6IDE2LjY2NjY2NjY2NjclO1xufVxuXG4uY29sLTMge1xuICB3aWR0aDogMjUlO1xufVxuXG4uY29sLTQge1xuICB3aWR0aDogMzMuMzMzMzMzMzMzMyU7XG59XG5cbi5jb2wtNSB7XG4gIHdpZHRoOiA0MS42NjY2NjY2NjY3JTtcbn1cblxuLmNvbC02IHtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLmNvbC03IHtcbiAgd2lkdGg6IDU4LjMzMzMzMzMzMzMlO1xufVxuXG4uY29sLTgge1xuICB3aWR0aDogNjYuNjY2NjY2NjY2NyU7XG59XG5cbi5jb2wtOSB7XG4gIHdpZHRoOiA3NSU7XG59XG5cbi5jb2wtMTAge1xuICB3aWR0aDogODMuMzMzMzMzMzMzMyU7XG59XG5cbi5jb2wtMTEge1xuICB3aWR0aDogOTEuNjY2NjY2NjY2NyU7XG59XG5cbi5jb2wtMTIge1xuICB3aWR0aDogMTAwJTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjUwcHgpIHtcbiAgLmNvbC1zbS0xIHtcbiAgICB3aWR0aDogOC4zMzMzMzMzMzMzJTtcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgfVxuXG4gIC5jb2wtc20tMiB7XG4gICAgd2lkdGg6IDE2LjY2NjY2NjY2NjclO1xuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICB9XG5cbiAgLmNvbC1zbS0zIHtcbiAgICB3aWR0aDogMjUlO1xuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICB9XG5cbiAgLmNvbC1zbS00IHtcbiAgICB3aWR0aDogMzMuMzMzMzMzMzMzMyU7XG4gICAgcGFkZGluZy10b3A6IDFyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gIH1cblxuICAuY29sLXNtLTUge1xuICAgIHdpZHRoOiA0MS42NjY2NjY2NjY3JTtcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgfVxuXG4gIC5jb2wtc20tNiB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgfVxuXG4gIC5jb2wtc20tNyB7XG4gICAgd2lkdGg6IDU4LjMzMzMzMzMzMzMlO1xuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICB9XG5cbiAgLmNvbC1zbS04IHtcbiAgICB3aWR0aDogNjYuNjY2NjY2NjY2NyU7XG4gICAgcGFkZGluZy10b3A6IDFyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gIH1cblxuICAuY29sLXNtLTkge1xuICAgIHdpZHRoOiA3NSU7XG4gICAgcGFkZGluZy10b3A6IDFyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gIH1cblxuICAuY29sLXNtLTEwIHtcbiAgICB3aWR0aDogODMuMzMzMzMzMzMzMyU7XG4gICAgcGFkZGluZy10b3A6IDFyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gIH1cblxuICAuY29sLXNtLTExIHtcbiAgICB3aWR0aDogOTEuNjY2NjY2NjY2NyU7XG4gICAgcGFkZGluZy10b3A6IDFyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gIH1cblxuICAuY29sLXNtLTEyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgfVxufVxuLmZsZXgtY2VudGVyLXNtIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNjE2MUQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA4cHggMzJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxcmVtO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG4uYnRuOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogNHJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxucCB7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBsaW5lLWhlaWdodDogMjtcbn1cblxuaW1nIHtcbiAgbWF4LXdpZHRoOiA0MHJlbTtcbn1cblxuLnJlbGF0aXZlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubXQtMCB7XG4gIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjUwcHgpIHtcbiAgLmZsZXgtY2VudGVyLXNtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG5cbiAgcCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLmNvbC02ID4gaDEge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuLmZsZXgtY2VudGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbmhyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI1MHB4KSB7XG4gIGhyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG59XG4uaGVhZGVyLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmhlYWRlci1sb2dvIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LWZhbWlseTogU3BhY2UgTW9ubywgc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAycmVtO1xuICBsZWZ0OiAwO1xuICBtYXJnaW46IDA7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuLmhlYWRlci1idG4ge1xuICByaWdodDogMDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzAwcHgpIHtcbiAgLmhlYWRlci1idG4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xuICBoMSB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNsaWRlSW5Gcm9tTGVmdCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMjcwMHB4KSB7XG4gIGh0bWwge1xuICAgIGZvbnQtc2l6ZTogMjAwJTtcbiAgfVxufSJdfQ== */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/styles.sass":
/*!*************************!*\
  !*** ./src/styles.sass ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/dist/cjs.js??ref--13-3!./styles.sass */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles.sass");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./src/styles.sass ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Nils\Projects\laat.shop\laat\src\styles.sass */"./src/styles.sass");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map