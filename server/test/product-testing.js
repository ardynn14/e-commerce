const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

chai.use(chaiHttp);
const expect = chai.expect;

describe('product', function () {

    describe('create', function () {
        it("input new product to database", function (done) {

            const newProduct = {
                name: 1111111,
                price: `13499000`,
                description: "Highend phone flagship",
            }
    const newProduct = {
        name: `LG 60LK6300`,
        price: `10999999`,
        description: "Quad-HD SmartTV",
    }
            chai.request(app)
                .post('/products')
                .set('token', `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDVhNzc5MWQ4NzdlYzdhMzQ3NWVkOTAiLCJ1c2VybmFtZSI6IlRlZGR5IiwiZW1haWwiOiJ0ZWRkeUB0ZWRkeS5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE1NjYyMTE4NDAsImV4cCI6MTU2NjQyNzg0MH0.eyRahbJt5-V9LssMF8WOg_t5m3xu-OA3M8FcjcdipWs`)
                .send(newProduct)
                .end(function (err, res) {
                    console.log(res.body);
                    expect(res.body.name).to.be.a("string")
                    expect(res.body.price).to.be.a("number")
                    expect(res.body.description).to.be.a("string")
                    expect(res).is.not.null
                    done()
                })
        })

    // it("input new product to database error", function (done) {
    //     let newProduct = {
    //         name: 111111,
    //         price: `13499000`
    //     }
    //     chai.request(app)
    //         .post('/products')
    //         .send(newProduct)
    //         .end(function (err, res) {
    //             console.log(err);
    //             expect(err).to.throw(`Property doesnt exists in products collections`)
    //             done()
    //         })
    // })
    // })

    // describe('delete', function () {
    //     it("input new product to database", function (done) {
    //         const productId = `5d5a48229f5cc45521ef49f5`
    //         chai.request(app)
    //             .delete(`/products/${productId}`)
    //             .set('token', `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDVhNzc5MWQ4NzdlYzdhMzQ3NWVkOTAiLCJ1c2VybmFtZSI6IlRlZGR5IiwiZW1haWwiOiJ0ZWRkeUB0ZWRkeS5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE1NjYyMTE4NDAsImV4cCI6MTU2NjQyNzg0MH0.eyRahbJt5-V9LssMF8WOg_t5m3xu-OA3M8FcjcdipWs`)
    //             .end(function (err, res) {
    //                 console.log(res.body);
    //                 expect(res).is.not.null
    //                 done()
    //             })
    //     })


    // })


    // describe('update', function () {
    //     it("input new product to database", function (done) {
    //         const productId = `5d5a497455cca359826e6d43`
    //         const newProductData = {
    //             name: `Polytron REF PRM28QN`,
    //             price: 3876500,
    //             description: `Refrigerator with 280L capacity`
    //         }
    //         chai.request(app)
    //             .patch(`/products/${productId}`)
    //             .set('token', `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDVhNzc5MWQ4NzdlYzdhMzQ3NWVkOTAiLCJ1c2VybmFtZSI6IlRlZGR5IiwiZW1haWwiOiJ0ZWRkeUB0ZWRkeS5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE1NjYyMTE4NDAsImV4cCI6MTU2NjQyNzg0MH0.eyRahbJt5-V9LssMF8WOg_t5m3xu-OA3M8FcjcdipWs`)
    //             .send(newProductData)
    //             .end(function (err, res) {
    //                 console.log(res.body);
    //                 expect(res.body.name).to.be.a("string")
    //                 expect(res.body.price).to.be.a("number")
    //                 expect(res.body.description).to.be.a("string")
    //                 expect(res).is.not.null
    //                 done()
    //             })
    //     })


    })





})