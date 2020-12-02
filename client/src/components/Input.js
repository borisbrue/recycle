import styled from "styled-components/macro";
import PropTypes from "prop-types";
import { BasicStyle, BasicSize } from "../globalstyle";

const Form = styled.form`
  ${BasicStyle};
  ${BasicSize};
  background-color: var(--action-color);
  color: var(--primary-color);
  justify-content: space-around;
`;

const Input = styled.input`
  background-color: var(--action-color);
  color: var(--primary-color);
  border: none;

  ::placeholder {
    color: var(--primary-color);
  }
`;

const ButtonIcon = styled.button`
  background-color: var(--action-color);
  height: 20px;
  width: 20px;
  border: none;

  img {
    height: 20px;
    width: 20px;
  }
`;

export const Inputfield = ({ title, icon, alt }) => {
  return (
    <Form>
      <Input placeholder={title} size="29" />
      <ButtonIcon type="submit">
        <img src={icon} alt={alt} />
      </ButtonIcon>
    </Form>
  );
};

Inputfield.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.any,
  alt: PropTypes.string.isRequired,
};