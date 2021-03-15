import { useTheme } from "@material-ui/core";

function TabLabel({ count, title }) {
  const theme = useTheme();
  return (
    <div>
      {title}
      {!!count && (
        <span
          style={{
            backgroundColor: theme.palette.secondary.main,
            borderRadius: "50%",
            padding: ".1em .4em",
            marginLeft: ".4rem",
          }}
        >
          {count}
        </span>
      )}
    </div>
  );
}

export default TabLabel;
