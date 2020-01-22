import styled from 'styled-components';

export default styled.li`
  color: #303030;
  cursor: pointer;
  display: inline-block;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  letter-spacing: 0.5px;
  padding: 35px 25px;
  position: relative;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid #f95b5b;
    color: #f95b5b;
  }
`;
