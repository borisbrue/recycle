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

  ::placeholder {
    color: var(--primary-color);
  }
`;

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
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
