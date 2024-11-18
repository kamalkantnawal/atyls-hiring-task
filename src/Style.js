import styled from "styled-components";

export const BackgroundLayout = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("https://s3-alpha-sig.figma.com/img/73df/cd1d/2685aabd100b691b8c4e129cce68cb75?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZfBTWjJH4W8PLVP0D7bqtksFBu5xjkE~xskSc55PPt2UAOMzd8QJJeKOKTsgVXN362or63eyEeF1Ud2Yi7VRlLlEmbGlONUlldhpePf-jQJDIv7~1BYp8Mmr9IQ-DJ44Azqe2XYr~EvkIoOhgqPpMyE26hq8vBV6NeniQAGGOMT9J0PFE18B9-HXSwQvfSBgTCRRq~Y17Z6XK02CZTncwoC-3d0mFE7LOZAKxNuOWFQJdHBxMRpV8T6tpqty0L0gXhXh17Co-hnaqfnrmm4ubZOM-4onNp0WWFPUM5pIftnphQqjM2NUSbbMTOJdmxdNHOk~uTqsTHEKGfe1AgoTqA__");
    background-size: cover;
    background-position: center;
    opacity: 0.04;
    z-index: -1;
  }
`;

export const AppContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const InitialInput = styled.div`
  position: fixed;
  top: 400px;
  left: 155px;
  gap: 0px;
  opacity: 1;

  .label {
    font-family: Inter, sans-serif;
    font-size: 12px;
    font-weight: 600;
    line-height: 14.52px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    background-color: #ffeed9;
    padding: 5px;
  }

  .input {
    width: 92px;
    margin-top: 2px;
    border-radius: 6px;
    background: #ffffff;
    border: 2px solid #ffeed9;
    font-size: 1.2em;
    font-weight: bold;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const FinalOutputContainer = styled.div`
  opacity: 1;
  position: fixed;
  width: 111px;
  height: 50px;
  top: 405px;
  left: 1275px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const OutputLabel = styled.div`
  font-size: 10px;
  background-color: #d9f7e3;
  padding: 2px;
  border-radius: 3px;
  text-align: center;
`;

export const Output = styled.div`
  width: 111px;
  height: 50px;
  border-radius: 6px;
  background: #ffffff;
  border: 2px solid #2dd179;
  font-size: 1.2em;
  color: #2c8f64;
  font-weight: bold;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ChainContainer = styled.div`
  position: relative;
`;

export const StyledFunctionCard = styled.div`
  position: fixed;
  width: 235px;
  height: 251px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Function1 = styled(StyledFunctionCard)`
  top: 162px;
  left: 265px;
`;

export const Function2 = styled(StyledFunctionCard)`
  top: 162px;
  left: 631px;
`;

export const Function3 = styled(StyledFunctionCard)`
  top: 162px;
  left: 989px;
`;

export const Function4 = styled(StyledFunctionCard)`
  top: 520px;
  left: 454px;
`;

export const Function5 = styled(StyledFunctionCard)`
  top: 520px;
  left: 823px;
`;
