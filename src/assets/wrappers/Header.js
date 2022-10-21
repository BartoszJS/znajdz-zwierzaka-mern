import styled from "styled-components";

const Wrapper = styled.nav`
  .header {
    margin: 0 auto;
    height: 100px;
    background-color: #00aa00;
    position: fixed;
    width: 100%;
    opacity: 0.9;
    z-index: 1;
  }

  .header li {
    display: inline;
    width: 200px;
  }
  .header .logo {
    float: left;
  }
  .header .navbars {
    float: right;
    padding-top: 35px;
    color: white;
  }
  .place {
    border: 1px solid blue;
    color: white;
    padding-left: 50px;
    padding-right: 50px;
  }
`;
export default Wrapper;
