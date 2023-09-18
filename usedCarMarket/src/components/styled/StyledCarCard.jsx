import styled from "styled-components";

export const StyledCarCard = styled.div`
  display: flex;
  width: 100%;
  background-color: aliceblue;
  margin-top: 5px;

  h2,
  h3,
  p {
    margin: 0;
  }

  .blueText {
    color: #277ee3;
  }

  .sideBorder {
    border-right: 1px gray solid;
    padding-right: 8px;
  }

  .inner {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px gray solid;

    span {
      display: flex;
      gap: 1rem;
    }

    h2 {
      align-self: center;
    }
  }
  .innerWrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  img {
    width: 240px;
    height: 180px;
    object-fit: cover;
  }

  .moreInfo {
    padding: 1rem;
    display: flex;
    gap: 1.5rem;
  }
`;
