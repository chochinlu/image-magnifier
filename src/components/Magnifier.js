import React, { useState, useEffect } from 'react';
import { Heading, Box, Flex, Text } from 'rebass';
import { Label, Input, StyledLink, Pre } from './style';
import ReactImageMagnify from 'react-image-magnify';

const Slider = ({ title, min, max, step, value, onChange }) => (
  <Flex flexDirection="column" justifyContent="center" flex={1} mx={2}>
    <Box>
      <Text fontSize={2}>{title}</Text>
    </Box>
    <Flex mt={1}>
      <Box flex={1}>
        <Input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={onChange}
        />
      </Box>
      <Box>
        <Label>{value}x</Label>
      </Box>
    </Flex>
  </Flex>
);

const imageSource = {
  nasa:
    'https://images-assets.nasa.gov/image/iss036e009053/iss036e009053~orig.jpg',
  hass: 'https://cdn.hasselblad.com/samples/B0000994.jpg'
};

const ImageView = ({
  source,
  smallImageRate,
  oriImageDimention,
  enlargeRate
}) => (
  <ReactImageMagnify
    {...{
      smallImage: {
        alt: 'Wristwatch by Ted Baker London',
        isFluidWidth: false,
        src: source,
        width: oriImageDimention.width * smallImageRate,
        height: oriImageDimention.height * smallImageRate
      },
      largeImage: {
        src: source,
        width: oriImageDimention.width,
        height: oriImageDimention.height
      },
      enlargedImageContainerDimensions: {
        width: enlargeRate.x,
        height: enlargeRate.y
      }
    }}
  />
);

const numToPercent = rate => ({
  x: `${rate.x * 100}%`,
  y: `${rate.y * 100}%`
});

const Magnifier = props => {
  const [oriImageDimention, setOriImageDimention] = useState({
    width: 0,
    height: 0
  });

  const [smallImageRate, setSmallImageRate] = useState(0.1);
  const [enlargeRate, setEnlargeRate] = useState({ x: 2, y: 1.5 });

  useEffect(() => {
    let image = new Image(); // or document.createElement('img')
    image.onload = function() {
      const width = this.width;
      const height = this.height;
      // console.log({ width, height });
      setOriImageDimention({ width, height });
    };
    image.src = imageSource[props.match.params.img];

    return () => {
      //unmount image
      if (!image) {
        return;
      }
      image.onload = function() {};
      image = null;
    };
  });

  const handleSmallImageRate = e => {
    e.preventDefault();
    setSmallImageRate(e.target.value);
  };

  const handleChangeEnlargeRateX = e => {
    e.preventDefault();
    setEnlargeRate({
      ...enlargeRate,
      x: e.target.value
    });
  };

  const handleChangeEnlargeRateY = e => {
    e.preventDefault();
    setEnlargeRate({
      ...enlargeRate,
      y: e.target.value
    });
  };

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
          <Slider
            title="縮圖比例"
            min={0.05}
            max={0.12}
            step={0.01}
            value={smallImageRate}
            onChange={e => handleSmallImageRate(e)}
          />
          <Slider
            title="檢視寬度"
            min={1}
            max={5}
            step={0.1}
            value={enlargeRate.x}
            onChange={e => handleChangeEnlargeRateX(e)}
          />
          <Slider
            title="檢視高度"
            min={1}
            max={2}
            step={0.1}
            value={enlargeRate.y}
            onChange={e => handleChangeEnlargeRateY(e)}
          />
          <Box mt={4}>
            <StyledLink
              to="/"
              color="text"
              border="1px solid"
              fontSize={4}
              px={2}
              py={1}
            >
              Back
            </StyledLink>
          </Box>
        </Flex>
      </Flex>

      {/* 小圖大圖 */}
      <Flex p={3} justifyContent="center">
        <Box width={['100vw', '100vw', '100vw']}>
          <ImageView
            source={imageSource[props.match.params.img]}
            smallImageRate={smallImageRate}
            oriImageDimention={oriImageDimention}
            enlargeRate={numToPercent(enlargeRate)}
          />
          <Pre>{JSON.stringify(oriImageDimention, null, 2)}</Pre>
        </Box>
      </Flex>
    </Box>
  );
};

export default Magnifier;
