import React from "react";
import styled from "styled-components";

const SCWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(to right, #1a1a1a, #363636);
`;
const SCBaslik = styled.h1`
  font-size: 48px;
  font-weight: bold;
  color: #fff;
  text-align: center;
  margin: 100px 0 50px;
  text-shadow: 2px 2px #000;
  letter-spacing: 2px;
  text-transform: uppercase;
`;
const SCMain = styled.div`
  margin: 0 auto;
  padding: 50px 20px;
  display: flex;
  justify-content: space-between;
`;

const SCImg = styled.img`
  max-width: 50%;
  height: auto;
  display: block;
  margin: 20px 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  border-radius: 50px;
`;

const SCParagraph = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
  text-align: center;
  border-radius: 20px;
  padding: 5px;
`;

const SCDesc = styled.p`
  background-color: #1a1a1a;
  color: #ffffff;
  padding: 20px;
  border: 1px solid #cccccc;
  border-radius: 30px;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  line-height: 1.5;
`;
const SCCopyright = styled.p`
  border: 5px solid grey;
  padding: 10px;
  color: white;
  font-weight: bold;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
  cursor: pointer;
`;

export default function Nasa(props) {
  const { data } = props;
  return (
    <>
      <SCWrapper>
        <SCBaslik>{data.title}</SCBaslik>
        <SCMain className="main-container">
          <SCImg src={data.url} alt={data.title} />
          <SCParagraph className="paragraph">
            <SCDesc className="aciklama">{data.explanation}</SCDesc>
            <SCCopyright className="copyright">{data.copyright}</SCCopyright>
          </SCParagraph>
        </SCMain>
      </SCWrapper>
    </>
  );
}
