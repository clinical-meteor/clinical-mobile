// // Write your tests here!
// // Here is an example.
//
//
// describe('clinical:mobile', function () {
//   var server = meteor();
//   var client = browser(server);
//
//   beforeEach(function () {
//     server.execute(function () {
//
//     }).then(function (value){
//
//     });
//   });
//   afterEach(function () {
//     server.execute(function () {
//
//     });
//   });
//
//   it('Mobile exists', function () {
//     return client.execute(function () {
//       expect(Mobile).to.exist;
//     }).then(function (){
//       return server.execute(function () {
//         expect(Mobile).to.not.exist;
//       });
//     });
//   });
//
//   it('Mobile can detect phone size', function () {
//     return client.execute(function () {
//       expect(Mobile.isPhone()).to.be.true;
//     }));
//   });
//
//   it('Mobile can detect tablet landscape', function () {
//     return client.execute(function () {
//       expect(Mobile.isLandscape()).to.be.true;
//     }));
//   });
//
//   it('Mobile can detect tablet portrait', function () {
//     return client.execute(function () {
//       expect(Mobile.isPortrait()).to.be.true;
//     }));
//   });
//
//   it('Mobile can detect desktop', function () {
//     return client.execute(function () {
//       expect(Mobile.isDesktop()).to.be.true;
//     }));
//   });
//
//   it('Mobile can detect thunderbolt display', function () {
//     return client.execute(function () {
//       expect(Mobile.isThunderbolt()).to.be.true;
//     }));
//   });
//
// });
