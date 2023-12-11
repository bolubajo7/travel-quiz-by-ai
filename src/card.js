import {
  CCard,
  // CCardImage,
  CCardBody,
  CCardTitle,
  CCardText,
  CButton,
} from "@coreui/react";

export default function Card() {
  return (
    <CCard style={{ width: "18rem" }}>
      {/* <CCardImage orientation="top" src={ReactImg} /> */}
      <CCardBody>
        <CCardTitle>Card title</CCardTitle>
        <CCardText>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </CCardText>
        <CButton href="#">Go somewhere</CButton>
      </CCardBody>
    </CCard>
  );
}
