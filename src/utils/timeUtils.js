import moment from "moment";

export const msToTime = (ms) => {
  let h = moment.duration(ms).hours();
  let m = moment.duration(ms).minutes();
  let s = moment.duration(ms).seconds();
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  return `${h}:${m}:${s}`;
};
