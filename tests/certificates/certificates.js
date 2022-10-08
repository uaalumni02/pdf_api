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

const certificatePath = "/api/certificate";

describe("Certificate", () => {
  before(function (done) {
    this.timeout(20000);
    http
      .post(certificatePath)
      .send(Mock.certificate)
      .end((error, response) => {
        done();
      });
  });

  describe("Add certificate", () => {
    it("Should add certificate", (done) => {
      request(app)
        .post(certificatePath)
        .send(Mock.certificate)
        .expect(201, done);
      Mock.certificate.should.be.a("object");
      expect(Mock.certificate).to.have.property("certificateDate");
      expect(Mock.certificate).to.have.property("firstName");
      expect(Mock.certificate).to.have.property("lastName");
      expect(Mock.certificate).to.have.property("awardType");
    });
  });
}).timeout(30000);
