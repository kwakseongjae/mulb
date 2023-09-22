import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

const Navigator = () => {
  const { pathname } = useLocation();
  return (
    <div className="Navigotor">
      <Link to="/" replace>
        홈
      </Link>

      <Link to="/login" replace>
        로그인
      </Link>

      <Link to="/page/:userId" replace>
        개인 페이지
      </Link>
    </div>
  );
};

export default Navigator;
