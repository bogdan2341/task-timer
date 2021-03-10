import classes from "./MainLayout.module.css";

export default function ({ children }) {
  return <div className={classes.Main}>{children}</div>;
}
