import styled from "styled-components/macro";
import PropTypes from "prop-types";
import { BasicStyle, BasicSize } from "../globalstyle";

const Input = styled.input`
  ${BasicStyle};
  ${BasicSize};
  background-color: var(--action-color);
  color: var(--primary-color);
  justify-content: space-around;
  margin: 8px 0;
  outline: none;
`;

Input.defaultProps = {
  type: "text",
  required: true,
};

export const InputField = ({ title, value, onChange }) => {
  return (
    <Input
      value={value}
      onChange={onChange}
      type="text"
      placeholder={title}
      size="29"
    />
  );
};

InputField.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
