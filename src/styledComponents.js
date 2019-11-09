import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledCard = styled(Link)`
  flex-grow: 1;
  margin: 1%;
  min-width: 300px;
  max-width: 300px;
  height: 300px;
  border-style: solid;
  border-width: 2;
  border-color: black;
  border-radius: 2%;
  background-color: lighgrey;
  }
`

export const StyledButtons = styled(Link)`
  margin: 1%;
  border-radius: 10%;
  border-style: solid;
  text-decoration: none;
  padding: 15px;
  &:link {
      color: #551A8B;
    },
  &:visited {
      color: #551A8B;
    }
  }
`
