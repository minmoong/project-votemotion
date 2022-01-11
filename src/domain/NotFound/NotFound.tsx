import styled from "styled-components";
import { Link } from "react-router-dom";

const Goback = styled.div`
  color: #0d6efd;
  text-decoration: underline;
  text-decoration-color: #0d6efd;
`;

function NotFound() {
  return (
    <div>
      <div>
        존재하지 않는 곳이에요!
      </div>
      <Link to="/">
        <Goback>
          홈 화면으로 돌아가요!😋
        </Goback>
      </Link>
    </div>
  );
}

export default NotFound;