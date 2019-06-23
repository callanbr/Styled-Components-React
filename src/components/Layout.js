import styled from 'styled-components';

export const Container = styled.div`
  width: 600px;
  margin: 0 auto;
  padding: 30px;
  background: ${props => props.theme === 'light' ? '#fefefe' : '#5e8899'};
`;
