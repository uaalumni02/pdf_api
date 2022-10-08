import casual from "casual";

let awardType = casual.random_element([
  "Perfect Attendance",
  "Awesome Employee",
]);

let certificateDate = casual.random_element(["2022-09-29", "2022-10-15"]);

let firstName = casual.random_element(["Todd", "Bill"]);

let lastName = casual.random_element(["Bell", "Jones"]);

casual.define("award", () => {
  return {
    awardType,
  };
});

casual.define("certificate", () => {
  return {
    certificateDate,
    firstName,
    lastName,
    awardType: '632e3d330c5ee9cef499356c'
  };
});

export default casual;
