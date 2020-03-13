(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles.sass":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/dist/cjs.js??ref--13-3!./src/styles.sass ***!
  \********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\n* {\n  box-sizing: border-box;\n  font-family: Raleway, serif;\n}\nbody {\n  margin: 0;\n  overflow: hidden;\n  overflow-y: scroll;\n}\n.flex-row-container {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  width: 100%;\n}\n.header-container {\n  padding-left: 25rem;\n  padding-right: 25rem;\n}\n@media only screen and (min-width: 900px) {\n  .flex-row-container {\n    padding-left: 10rem;\n    padding-right: 10rem;\n  }\n\n  .header-container {\n    padding-left: 10rem;\n    padding-right: 10rem;\n  }\n}\n@media only screen and (min-width: 1650px) {\n  .flex-row-container {\n    padding-left: 25rem;\n    padding-right: 25rem;\n  }\n\n  .header-container {\n    padding-left: 25rem;\n    padding-right: 25rem;\n  }\n}\n@media only screen and (max-width: 900px) {\n  .flex-row-container {\n    padding-left: 5rem;\n    padding-right: 5rem;\n  }\n\n  .header-container {\n    padding-left: 5rem;\n    padding-right: 5rem;\n  }\n}\n@media only screen and (max-width: 400px) {\n  .flex-row-container {\n    padding-left: 1rem;\n    padding-right: 1rem;\n  }\n\n  .header-container {\n    padding-left: 1rem;\n    padding-right: 1rem;\n  }\n}\n@media only screen and (min-width: 1250px) {\n  .pl-4 {\n    padding-left: 4rem;\n  }\n\n  .pr-4 {\n    padding-right: 4rem;\n  }\n}\n.container {\n  position: relative;\n  width: 98vw;\n  -webkit-animation-name: slideInFromLeft;\n          animation-name: slideInFromLeft;\n  -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n}\n@media only screen and (min-width: 1250px) {\n  .container {\n    position: relative;\n    width: 98vw;\n    min-height: 100vh;\n  }\n}\n.background-light-gray {\n  background-color: #F9F9F9;\n}\n@media only screen and (min-width: 1250px) {\n  .container {\n    display: flex;\n    justify-content: center;\n  }\n}\n@media only screen and (max-width: 1400px) {\n  .flex-row-container {\n    flex-direction: column;\n  }\n\n  .flex-direction-column-reverse-sm {\n    flex-direction: column-reverse;\n  }\n}\n.m-10 {\n  margin-top: 10rem;\n  margin-bottom: 10rem;\n}\n.pb-10 {\n  padding-bottom: 10rem;\n}\n.col-1 {\n  width: 8.3333333333%;\n}\n.col-2 {\n  width: 16.6666666667%;\n}\n.col-3 {\n  width: 25%;\n}\n.col-4 {\n  width: 33.3333333333%;\n}\n.col-5 {\n  width: 41.6666666667%;\n}\n.col-6 {\n  width: 50%;\n}\n.col-7 {\n  width: 58.3333333333%;\n}\n.col-8 {\n  width: 66.6666666667%;\n}\n.col-9 {\n  width: 75%;\n}\n.col-10 {\n  width: 83.3333333333%;\n}\n.col-11 {\n  width: 91.6666666667%;\n}\n.col-12 {\n  width: 100%;\n}\n@media only screen and (max-width: 1250px) {\n  .col-sm-1 {\n    width: 8.3333333333%;\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n  }\n\n  .col-sm-2 {\n    width: 16.6666666667%;\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n  }\n\n  .col-sm-3 {\n    width: 25%;\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n  }\n\n  .col-sm-4 {\n    width: 33.3333333333%;\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n  }\n\n  .col-sm-5 {\n    width: 41.6666666667%;\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n  }\n\n  .col-sm-6 {\n    width: 50%;\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n  }\n\n  .col-sm-7 {\n    width: 58.3333333333%;\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n  }\n\n  .col-sm-8 {\n    width: 66.6666666667%;\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n  }\n\n  .col-sm-9 {\n    width: 75%;\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n  }\n\n  .col-sm-10 {\n    width: 83.3333333333%;\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n  }\n\n  .col-sm-11 {\n    width: 91.6666666667%;\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n  }\n\n  .col-sm-12 {\n    width: 100%;\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n  }\n}\n.flex-center-sm {\n  display: flex;\n}\n.btn {\n  background-color: #16161D;\n  border: none;\n  color: white;\n  padding: 8px 32px;\n  text-align: center;\n  text-decoration: none;\n  font-weight: 500;\n  display: inline-block;\n  font-size: 1rem;\n  border-radius: 10px;\n  cursor: pointer;\n  transition: all 0.2s ease-in-out;\n}\n.btn:hover {\n  transform: scale(1.1);\n}\nh1 {\n  font-size: 3rem;\n  font-style: normal;\n  line-height: 4rem;\n  font-weight: 600;\n}\np {\n  font-size: 0.9rem;\n  line-height: 2;\n}\nimg {\n  max-width: 40rem;\n}\n.relative {\n  position: relative;\n}\n.mt-0 {\n  margin-top: 0 !important;\n}\n@media only screen and (max-width: 1250px) {\n  .flex-center-sm {\n    display: flex;\n    justify-content: center;\n  }\n\n  p {\n    text-align: center;\n  }\n\n  .col-6 > h1 {\n    text-align: center;\n  }\n}\n.flex-center {\n  display: flex;\n  justify-content: center;\n}\nhr {\n  width: 100%;\n}\n@media only screen and (max-width: 1250px) {\n  hr {\n    margin-bottom: 0;\n  }\n}\n.header-container {\n  display: flex;\n  margin-top: 0.5rem;\n  justify-content: space-between;\n}\n.header-logo {\n  cursor: pointer;\n  font-family: Space Mono, serif;\n  font-style: normal;\n  font-size: 2rem;\n  left: 0;\n  margin: 0;\n  line-height: 1;\n}\n.header-btn {\n  right: 0;\n}\n@media only screen and (max-width: 300px) {\n  .header-btn {\n    display: none;\n  }\n}\n@media only screen and (max-width: 900px) {\n  h1 {\n    font-size: 2rem;\n    line-height: 1;\n  }\n}\n@-webkit-keyframes slideInFromLeft {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes slideInFromLeft {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9DOlxcVXNlcnNcXE5pbHNcXFByb2plY3RzXFxsYWF0LnNob3BcXGxhYXQvc3JjXFxzdHlsZXMuc2FzcyIsInNyYy9zdHlsZXMuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQUNBO0VBQ0Usc0JBQUE7RUFDQSwyQkFBQTtBQ0NGO0FEQ0E7RUFDRSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0VGO0FEQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUNHRjtBRERBO0VBQ0UsbUJBQUE7RUFDQSxvQkFBQTtBQ0lGO0FERkE7RUFDRTtJQUNFLG1CQUFBO0lBQ0Esb0JBQUE7RUNLRjs7RURKQTtJQUNFLG1CQUFBO0lBQ0Esb0JBQUE7RUNPRjtBQUNGO0FETkE7RUFDRTtJQUNFLG1CQUFBO0lBQ0Esb0JBQUE7RUNRRjs7RURQQTtJQUNFLG1CQUFBO0lBQ0Esb0JBQUE7RUNVRjtBQUNGO0FEVEE7RUFDRTtJQUNFLGtCQUFBO0lBQ0EsbUJBQUE7RUNXRjs7RURWQTtJQUNFLGtCQUFBO0lBQ0EsbUJBQUE7RUNhRjtBQUNGO0FEWkE7RUFDRTtJQUNFLGtCQUFBO0lBQ0EsbUJBQUE7RUNjRjs7RURiQTtJQUNFLGtCQUFBO0lBQ0EsbUJBQUE7RUNnQkY7QUFDRjtBRGZBO0VBQ0U7SUFDRSxrQkFBQTtFQ2lCRjs7RURoQkE7SUFDRSxtQkFBQTtFQ21CRjtBQUNGO0FEbEJBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUNBQUE7VUFBQSwrQkFBQTtFQUNBLDJCQUFBO1VBQUEsbUJBQUE7RUFDQSw4QkFBQTtVQUFBLHNCQUFBO0FDb0JGO0FEbEJBO0VBQ0U7SUFDRSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxpQkFBQTtFQ3FCRjtBQUNGO0FEckJBO0VBQ0UseUJBQUE7QUN1QkY7QURyQkE7RUFDRTtJQUNFLGFBQUE7SUFDQSx1QkFBQTtFQ3dCRjtBQUNGO0FEdEJBO0VBQ0U7SUFDRSxzQkFBQTtF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c291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuKlxuICBib3gtc2l6aW5nOiBib3JkZXItYm94XG4gIGZvbnQtZmFtaWx5OiBSYWxld2F5LCBzZXJpZlxuXG5ib2R5XG4gIG1hcmdpbjogMFxuICBvdmVyZmxvdzogaGlkZGVuXG4gIG92ZXJmbG93LXk6IHNjcm9sbFxuXG4uZmxleC1yb3ctY29udGFpbmVyXG4gIGRpc3BsYXk6IGZsZXhcbiAgZmxleC1kaXJlY3Rpb246IHJvd1xuICBhbGlnbi1pdGVtczogY2VudGVyXG4gIHdpZHRoOiAxMDAlXG5cbi5oZWFkZXItY29udGFpbmVyXG4gIHBhZGRpbmctbGVmdDogMjVyZW1cbiAgcGFkZGluZy1yaWdodDogMjVyZW1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5MDBweClcbiAgLmZsZXgtcm93LWNvbnRhaW5lclxuICAgIHBhZGRpbmctbGVmdDogMTByZW1cbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHJlbVxuICAuaGVhZGVyLWNvbnRhaW5lclxuICAgIHBhZGRpbmctbGVmdDogMTByZW1cbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHJlbVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE2NTBweClcbiAgLmZsZXgtcm93LWNvbnRhaW5lclxuICAgIHBhZGRpbmctbGVmdDogMjVyZW1cbiAgICBwYWRkaW5nLXJpZ2h0OiAyNXJlbVxuICAuaGVhZGVyLWNvbnRhaW5lclxuICAgIHBhZGRpbmctbGVmdDogMjVyZW1cbiAgICBwYWRkaW5nLXJpZ2h0OiAyNXJlbVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KVxuICAuZmxleC1yb3ctY29udGFpbmVyXG4gICAgcGFkZGluZy1sZWZ0OiA1cmVtXG4gICAgcGFkZGluZy1yaWdodDogNXJlbVxuICAuaGVhZGVyLWNvbnRhaW5lclxuICAgIHBhZGRpbmctbGVmdDogNXJlbVxuICAgIHBhZGRpbmctcmlnaHQ6IDVyZW1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweClcbiAgLmZsZXgtcm93LWNvbnRhaW5lclxuICAgIHBhZGRpbmctbGVmdDogMXJlbVxuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW1cbiAgLmhlYWRlci1jb250YWluZXJcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW1cbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTI1MHB4KVxuICAucGwtNFxuICAgIHBhZGRpbmctbGVmdDogNHJlbVxuICAucHItNFxuICAgIHBhZGRpbmctcmlnaHQ6IDRyZW1cblxuLmNvbnRhaW5lclxuICBwb3NpdGlvbjogcmVsYXRpdmVcbiAgd2lkdGg6IDk4dndcbiAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlSW5Gcm9tTGVmdFxuICBhbmltYXRpb24tZGVsYXk6IDBzXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXNcblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjUwcHgpXG4gIC5jb250YWluZXJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmVcbiAgICB3aWR0aDogOTh2d1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoXG4uYmFja2dyb3VuZC1saWdodC1ncmF5XG4gIGJhY2tncm91bmQtY29sb3I6ICNGOUY5RjlcblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjUwcHgpXG4gIC5jb250YWluZXJcbiAgICBkaXNwbGF5OiBmbGV4XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXJcblxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0MDBweClcbiAgLmZsZXgtcm93LWNvbnRhaW5lclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cblxuICAuZmxleC1kaXJlY3Rpb24tY29sdW1uLXJldmVyc2Utc21cbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2VcblxuLm0tMTBcbiAgbWFyZ2luLXRvcDogMTByZW1cbiAgbWFyZ2luLWJvdHRvbTogMTByZW1cbi5wYi0xMFxuICBwYWRkaW5nLWJvdHRvbTogMTByZW1cblxuQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAxMlxuICAuY29sLSN7JGl9XG4gICAgd2lkdGg6IDEwMCUgLyAxMiAqICRpXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI1MHB4KVxuICBAZm9yICRpIGZyb20gMSB0aHJvdWdoIDEyXG4gICAgLmNvbC1zbS0jeyRpfVxuICAgICAgd2lkdGg6IDEwMCUgLyAxMiAqICRpXG4gICAgICBwYWRkaW5nLXRvcDogMXJlbVxuICAgICAgcGFkZGluZy1ib3R0b206IDFyZW1cbi5mbGV4LWNlbnRlci1zbVxuICBkaXNwbGF5OiBmbGV4XG5cbi5idG5cbiAgYmFja2dyb3VuZC1jb2xvcjogIzE2MTYxRFxuICBib3JkZXI6IG5vbmVcbiAgY29sb3I6IHdoaXRlXG4gIHBhZGRpbmc6IDhweCAzMnB4XG4gIHRleHQtYWxpZ246IGNlbnRlclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmVcbiAgZm9udC13ZWlnaHQ6IDUwMFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2tcbiAgZm9udC1zaXplOiAxcmVtXG4gIGJvcmRlci1yYWRpdXM6IDEwcHhcbiAgY3Vyc29yOiBwb2ludGVyXG4gIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXRcblxuLmJ0bjpob3ZlclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSlcblxuaDFcbiAgZm9udC1zaXplOiAzcmVtXG4gIGZvbnQtc3R5bGU6IG5vcm1hbFxuICBsaW5lLWhlaWdodDogNHJlbVxuICBmb250LXdlaWdodDogNjAwXG5cbnBcbiAgZm9udC1zaXplOiAuOXJlbVxuICBsaW5lLWhlaWdodDogMlxuXG5pbWdcbiAgbWF4LXdpZHRoOiA0MHJlbVxuXG4ucmVsYXRpdmVcbiAgcG9zaXRpb246IHJlbGF0aXZlXG5cbi5tdC0wXG4gIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjUwcHgpXG4gIC5mbGV4LWNlbnRlci1zbVxuICAgIGRpc3BsYXk6IGZsZXhcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxuICBwXG4gICAgdGV4dC1hbGlnbjogY2VudGVyXG4gIC5jb2wtNiA+IGgxXG4gICAgdGV4dC1hbGlnbjogY2VudGVyXG4uZmxleC1jZW50ZXJcbiAgZGlzcGxheTogZmxleFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxuaHJcbiAgd2lkdGg6IDEwMCVcblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjUwcHgpXG4gIGhyXG4gICAgbWFyZ2luLWJvdHRvbTogMFxuXG4uaGVhZGVyXG4gICYtY29udGFpbmVyXG4gICAgZGlzcGxheTogZmxleFxuICAgIG1hcmdpbi10b3A6IC41cmVtXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuXG5cbiAgJi1sb2dvXG4gICAgY3Vyc29yOiBwb2ludGVyXG4gICAgZm9udC1mYW1pbHk6IFNwYWNlIE1vbm8sIHNlcmlmXG4gICAgZm9udC1zdHlsZTogbm9ybWFsXG4gICAgZm9udC1zaXplOiAycmVtXG4gICAgbGVmdDogMFxuICAgIG1hcmdpbjogMFxuICAgIGxpbmUtaGVpZ2h0OiAxXG5cbiAgJi1idG5cbiAgICByaWdodDogMFxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzAwcHgpXG4gICAgICBkaXNwbGF5OiBub25lXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpXG5cbiAgaDFcbiAgICBmb250LXNpemU6IDJyZW1cbiAgICBsaW5lLWhlaWdodDogMVxuXG5Aa2V5ZnJhbWVzIHNsaWRlSW5Gcm9tTGVmdFxuICAwJVxuICAgIG9wYWNpdHk6IDBcbiAgMTAwJVxuICAgIG9wYWNpdHk6IDFcblxuIiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtZmFtaWx5OiBSYWxld2F5LCBzZXJpZjtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG4uZmxleC1yb3ctY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5oZWFkZXItY29udGFpbmVyIHtcbiAgcGFkZGluZy1sZWZ0OiAyNXJlbTtcbiAgcGFkZGluZy1yaWdodDogMjVyZW07XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTAwcHgpIHtcbiAgLmZsZXgtcm93LWNvbnRhaW5lciB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHJlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHJlbTtcbiAgfVxuXG4gIC5oZWFkZXItY29udGFpbmVyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcmVtO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE2NTBweCkge1xuICAuZmxleC1yb3ctY29udGFpbmVyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDI1cmVtO1xuICB9XG5cbiAgLmhlYWRlci1jb250YWluZXIge1xuICAgIHBhZGRpbmctbGVmdDogMjVyZW07XG4gICAgcGFkZGluZy1yaWdodDogMjVyZW07XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgLmZsZXgtcm93LWNvbnRhaW5lciB7XG4gICAgcGFkZGluZy1sZWZ0OiA1cmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDVyZW07XG4gIH1cblxuICAuaGVhZGVyLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZy1sZWZ0OiA1cmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDVyZW07XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcbiAgLmZsZXgtcm93LWNvbnRhaW5lciB7XG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XG4gIH1cblxuICAuaGVhZGVyLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTI1MHB4KSB7XG4gIC5wbC00IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDRyZW07XG4gIH1cblxuICAucHItNCB7XG4gICAgcGFkZGluZy1yaWdodDogNHJlbTtcbiAgfVxufVxuLmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDk4dnc7XG4gIGFuaW1hdGlvbi1uYW1lOiBzbGlkZUluRnJvbUxlZnQ7XG4gIGFuaW1hdGlvbi1kZWxheTogMHM7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTI1MHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogOTh2dztcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgfVxufVxuLmJhY2tncm91bmQtbGlnaHQtZ3JheSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGOUY5Rjk7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTI1MHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQwMHB4KSB7XG4gIC5mbGV4LXJvdy1jb250YWluZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cblxuICAuZmxleC1kaXJlY3Rpb24tY29sdW1uLXJldmVyc2Utc20ge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgfVxufVxuLm0tMTAge1xuICBtYXJnaW4tdG9wOiAxMHJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMTByZW07XG59XG5cbi5wYi0xMCB7XG4gIHBhZGRpbmctYm90dG9tOiAxMHJlbTtcbn1cblxuLmNvbC0xIHtcbiAgd2lkdGg6IDguMzMzMzMzMzMzMyU7XG59XG5cbi5jb2wtMiB7XG4gIHdpZHRoOiAxNi42NjY2NjY2NjY3JTtcbn1cblxuLmNvbC0zIHtcbiAgd2lkdGg6IDI1JTtcbn1cblxuLmNvbC00IHtcbiAgd2lkdGg6IDMzLjMzMzMzMzMzMzMlO1xufVxuXG4uY29sLTUge1xuICB3aWR0aDogNDEuNjY2NjY2NjY2NyU7XG59XG5cbi5jb2wtNiB7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi5jb2wtNyB7XG4gIHdpZHRoOiA1OC4zMzMzMzMzMzMzJTtcbn1cblxuLmNvbC04IHtcbiAgd2lkdGg6IDY2LjY2NjY2NjY2NjclO1xufVxuXG4uY29sLTkge1xuICB3aWR0aDogNzUlO1xufVxuXG4uY29sLTEwIHtcbiAgd2lkdGg6IDgzLjMzMzMzMzMzMzMlO1xufVxuXG4uY29sLTExIHtcbiAgd2lkdGg6IDkxLjY2NjY2NjY2NjclO1xufVxuXG4uY29sLTEyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI1MHB4KSB7XG4gIC5jb2wtc20tMSB7XG4gICAgd2lkdGg6IDguMzMzMzMzMzMzMyU7XG4gICAgcGFkZGluZy10b3A6IDFyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gIH1cblxuICAuY29sLXNtLTIge1xuICAgIHdpZHRoOiAxNi42NjY2NjY2NjY3JTtcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgfVxuXG4gIC5jb2wtc20tMyB7XG4gICAgd2lkdGg6IDI1JTtcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgfVxuXG4gIC5jb2wtc20tNCB7XG4gICAgd2lkdGg6IDMzLjMzMzMzMzMzMzMlO1xuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICB9XG5cbiAgLmNvbC1zbS01IHtcbiAgICB3aWR0aDogNDEuNjY2NjY2NjY2NyU7XG4gICAgcGFkZGluZy10b3A6IDFyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gIH1cblxuICAuY29sLXNtLTYge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgcGFkZGluZy10b3A6IDFyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gIH1cblxuICAuY29sLXNtLTcge1xuICAgIHdpZHRoOiA1OC4zMzMzMzMzMzMzJTtcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgfVxuXG4gIC5jb2wtc20tOCB7XG4gICAgd2lkdGg6IDY2LjY2NjY2NjY2NjclO1xuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICB9XG5cbiAgLmNvbC1zbS05IHtcbiAgICB3aWR0aDogNzUlO1xuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICB9XG5cbiAgLmNvbC1zbS0xMCB7XG4gICAgd2lkdGg6IDgzLjMzMzMzMzMzMzMlO1xuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICB9XG5cbiAgLmNvbC1zbS0xMSB7XG4gICAgd2lkdGg6IDkxLjY2NjY2NjY2NjclO1xuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICB9XG5cbiAgLmNvbC1zbS0xMiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZy10b3A6IDFyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gIH1cbn1cbi5mbGV4LWNlbnRlci1zbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTYxNjFEO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogOHB4IDMycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXdlaWdodDogNTAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbn1cblxuLmJ0bjpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cblxuaDEge1xuICBmb250LXNpemU6IDNyZW07XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDRyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbnAge1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgbGluZS1oZWlnaHQ6IDI7XG59XG5cbmltZyB7XG4gIG1heC13aWR0aDogNDByZW07XG59XG5cbi5yZWxhdGl2ZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLm10LTAge1xuICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI1MHB4KSB7XG4gIC5mbGV4LWNlbnRlci1zbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuXG4gIHAge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5jb2wtNiA+IGgxIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cbi5mbGV4LWNlbnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5ociB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyNTBweCkge1xuICBociB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxufVxuLmhlYWRlci1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5oZWFkZXItbG9nbyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1mYW1pbHk6IFNwYWNlIE1vbm8sIHNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgbGVmdDogMDtcbiAgbWFyZ2luOiAwO1xuICBsaW5lLWhlaWdodDogMTtcbn1cbi5oZWFkZXItYnRuIHtcbiAgcmlnaHQ6IDA7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMwMHB4KSB7XG4gIC5oZWFkZXItYnRuIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgfVxufVxuQGtleWZyYW1lcyBzbGlkZUluRnJvbUxlZnQge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59Il19 */", '', '']]

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