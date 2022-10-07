import casual from "casual";

let awardType = casual.random_element([
  "Perfect Attendance",
  "Awesome Employee",
]);

casual.define("award", () => {
  return {
    awardType,
  };
});

export default casual;
