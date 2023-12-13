import {
  CCard,
  // CCardImage,
  CCardBody,
  CCardTitle,
  CCardText,
  CButton,
} from "@coreui/react";

// Accept props in your function component
export default function Card({ headerText, bodyText }) {
  return (
    <CCard style={{ width: "18rem" }}>
      {/* <CCardImage orientation="top" src={ReactImg} /> */}
      <CCardBody>
        {/* Use props for setting header and body text */}
        <CCardTitle>{headerText}</CCardTitle>
        <CCardText>{bodyText}</CCardText>
        <CButton href="#">Go somewhere</CButton>
      </CCardBody>
    </CCard>
  );
}
