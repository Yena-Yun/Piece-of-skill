import { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { images } from '../../data/Image';

const ImagePicker = (): JSX.Element => {
  const [pickers, setPickers] = useState<JSX.Element[]>([]);
  const [pickIndex, setPickIndex] = useState<number>(0);

  const handlePrevClick = useCallback((): void => {
    if (pickIndex <= 0) {
      setPickIndex(images.length - 1);
      return;
    }
    setPickIndex(pickIndex - 1);
  }, [pickIndex]);

  const handleNextClick = useCallback((): void => {
    if (pickIndex + 1 === images.length) {
      setPickIndex(0);
      return;
    }
    setPickIndex(pickIndex + 1);
  }, [pickIndex]);

  const onPickIndex = useCallback(
    (idx: number): void => {
      if (pickIndex === idx) {
        return;
      }

      setPickIndex(idx);
    },
    [pickIndex]
  );

  useEffect(() => {
    setPickers(
      images?.map((_: string, idx: number) => {
        return <Picker onClick={() => onPickIndex(idx)} background={pickIndex === idx ? 'orange' : 'white'}></Picker>;
      })
    );
  }, [onPickIndex, pickIndex]);

  return (
    <Container>
      <FillImage src={images[pickIndex]} />

      <Arrow isLeft={true} onClick={handlePrevClick}>
        <AiOutlineArrowLeft />
      </Arrow>

      <Arrow isLeft={false} onClick={handleNextClick}>
        <AiOutlineArrowRight />
      </Arrow>

      <PickerWrapper>{pickers}</PickerWrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 800px;
  height: 500px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const FillImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const PickerWrapper = styled.div`
  position: absolute;
  left: 50%;
  bottom: 10px;
  transform: translate(-50%, -10px);
  display: flex;
`;

const Arrow = styled.div<{ isLeft: boolean }>`
  width: 50px;
  height: 50px;
  background-color: gray;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  ${(props) => (props.isLeft ? 'left: 5px' : 'right: 5px')};
  transform: translate(-5px, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: white;
  cursor: pointer;
`;

const Picker = styled.div<{ background: string }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${(props) => props.background};
  margin: 0 6px;
  cursor: pointer;
`;

export default ImagePicker;
