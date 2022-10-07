import "dotenv/config";
import chai from "chai";
import chaiHttp from "chai-http";
import request from "supertest";
import Mock from "../__mocks__/index";
import app from "../../src/server";

const http = request.agent(app);
const { expect } = chai;

chai.use(chaiHttp);
chai.should();

const awardPath = "/api/award";

let id;

describe("Award", () => {
  before(function (done) {
    this.timeout(20000);
    http
      .post(awardPath)
      .send(Mock.award)
      .end((error, response) => {
        done();
      });
  });

  describe("Add award", () => {
    it("Should add award type", (done) => {
      request(app).post(awardPath).send(Mock.award).expect(201, done);
      Mock.award.should.be.a("object");
      expect(Mock.award).to.have.property("awardType");
    });
  });

  describe("Add award", () => {
    it("should not add award, no values passed", (done) => {
      request(app).post(awardPath).expect(500, done);
    });
  });

  describe("Get awards", () => {
    it("should get all awards", (done) => {
      chai
        .request(app)
        .get(awardPath)
        .end((err, response) => {
          id = response.body.data[0]._id;
          response.body.should.be.a("object");
          expect(response.body).to.have.nested.property("success").to.eql(true);
          expect(response.body).to.have.nested.property("data[0].awardType");
          done();
        });
    });
  });
  describe(" Get award by ID", () => {
    it("should get award by id", (done) => {
      chai
        .request(app)
        .get("/api/award/" + id)
        .end((err, response) => {
          response.body.should.be.a("object");
          expect(response.body).to.have.nested.property("success").to.eql(true);
          expect(response.body.data).to.have.nested.property("awardType");
          done();
        });
    });
  });
}).timeout(30000);
