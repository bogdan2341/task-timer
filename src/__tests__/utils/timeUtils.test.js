import { msToTime } from "../../utils/timeUtils";

it("Convert to time correctly", () => {
  const oneSec = 1000;
  expect(msToTime(0)).toEqual("00:00:00");
  expect(msToTime(oneSec)).toEqual("00:00:01");
  expect(msToTime(oneSec * 60)).toEqual("00:01:00");
  expect(msToTime(oneSec * 60 * 60)).toEqual("01:00:00");
  expect(msToTime(oneSec * 60 * 60 * 60)).toEqual("60:00:00");
});
