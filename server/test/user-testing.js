const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const User = require('../model/user');
chai.use(chaiHttp);
const expect = chai.expect;

describe("user testing", function () {

    // describe("user register", function () {
    //     // after(function(){
    //     //     return User.deleteMany({
    //     //         role: 'user'
    //     //     });
    //     // })
    //     it("POST/users/sign-up", function (done) {
    //         let newUser = {
    //             username: `ardi`,
    //             email: `ardi@ardi.com`,
    //             password: `123456`
    //         }
    //         chai
    //             .request(app)
    //             .post(`/users/sign-up`)
    //             .send(newUser)
    //             .end(function (err, res) {
    //                 expect(res.body.username).to.be.a("string")
    //                 expect(res.body.email).to.be.a("string")
    //                 expect(res.body.password).to.be.a("string")
    //                 done()
    //             })
    //     })

    // })

    // describe("user login", function () {
    //     it("POST/users/login", function (done) {
    //         let newUser = {
    //             email: `teddy@teddy.com`,
    //             password: `123456`
    //         }
    //         chai
    //             .request(app)
    //             .post(`/users/login`)
    //             .send(newUser)
    //             .end(function (err, res) {
    //                 console.log(res.body.token)
    //                 expect(res.body).to.be.haveOwnProperty(`token`)
    //                 expect(res.body.token).to.be.a(`string`)
    //                 done()
    //             })
    //     })
    // })


})