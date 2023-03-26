import { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";

const theme = {};

function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

Theme.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Theme;
