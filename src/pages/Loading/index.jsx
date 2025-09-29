import { LoadingStyled } from "./style";

const Loading = () => {
  return (
    <LoadingStyled>
      <div className="circle">
        <div className="wave"></div>
      </div>
    </LoadingStyled>
  );
};

export default Loading;
