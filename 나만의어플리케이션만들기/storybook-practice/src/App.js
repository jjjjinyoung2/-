import styled from "styled-components";

const BlueButton = styled.button`
  background-color: blue;
  color: white;
`;

//만들어진 컴포넌트를 재활용해 컴포넌트를 만들 수 있습니다.
const ClickButton = styled(BlueButton)`
  padding: 10px;
  margin-top: 10px;
  height: 40px;
  width: 200px;
  font-size: medium;
  background-color: #8d007f;
  border-radius: 4rem;
`;

//재활용한 컴포넌트를 재활용할 수도 있습니다.
const MoreButton = styled(ClickButton)``;

const ArrowButton = styled(ClickButton)`
  border-radius: 10rem;
  width: 40px;
  font-size: 30px;
  margin: 10px;
  padding: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const BackButton = styled(ClickButton)``;
const LarrowButton = styled(ArrowButton)``;

export default function App() {
  return (
    <>
      {/* <BlueButton>Click</BlueButton> */}
      <br />
      <ClickButton>CLICK</ClickButton>
      <br />
      <MoreButton>MORE</MoreButton>
      <br />
      <BackButton>BACK</BackButton>
      <br />
      <ArrowButton>▶️</ArrowButton>

      <LarrowButton>◀️</LarrowButton>
    </>
  );
}
