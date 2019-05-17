import React from 'react';
import { Box, Heading, Card } from 'rebass';
import { StyledLink } from './style';

const Main = props => {
  return (
    <Box m={4} p={4}>
      <Heading color="primary" fontSize="h3" fontWeight={300}>
        圖片檢視測試
      </Heading>
      <Card
        borderRadius={2}
        boxShadow="0 0.5rem 1rem rgba(0, 0, 0, .25)"
        fontSize="h4"
        p={3}
        my={3}
      >
        <StyledLink to="/check/nasa">Example 1</StyledLink>
      </Card>
    </Box>
  );
};

export default Main;
