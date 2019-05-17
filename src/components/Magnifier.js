import React from 'react';
import { Heading, Box, Flex, Text } from 'rebass';
import { Label, Input } from './style';

const Slider = ({ title, min, max, step, value, rate }) => (
  <Flex flexDirection="column" justifyContent="center" flex={1} mx={2}>
    <Box>
      <Text fontSize={2}>{title}</Text>
    </Box>
    <Flex mt={1}>
      <Box flex={1}>
        <Input type="range" min={min} max={max} step={step} value={value} />
      </Box>
      <Box>
        <Label>{value}x</Label>
      </Box>
    </Flex>
  </Flex>
);

const Magnifier = props => {
  return (
    <Box>
      {/* 調整參數bar */}
      <Flex px={3} color="text" bg="primaryDark" justifyContent="center">
        <Box>
          <Heading fontSize="h3" fontWeight={900}>
            {props.match.params.img}
          </Heading>
        </Box>
        <Flex px={3} flex={1}>
          <Slider title="縮圖比例" min={0.1} max={1} step={0.1} value={0.1} />
          <Slider title="檢視寬度" min={1} max={3} step={0.5} value={1} />
          <Slider title="檢視高度" min={1} max={2} step={0.5} value={1} />
        </Flex>
      </Flex>

      {/* 小圖大圖 */}
      <Box p={3}>
        <Heading>Image</Heading>
      </Box>
    </Box>
  );
};

export default Magnifier;
