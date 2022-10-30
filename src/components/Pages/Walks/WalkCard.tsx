import React from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdbreact";
import { Link } from "react-router-dom";
import { GiWalkingBoot } from "react-icons/gi";
import urlify from "../../../functions/urlify";
import "./Walks.scss";

interface Props {
  key: string;
  imgSrc: string;
  name: string;
  city: string;
  description: string;
}

const WalkCard: React.FC<Props> = (props: Props) => {
  const { key, imgSrc, name, city, description } = props;

  return (
    <div key={key}>
      <Link to={"walks/" + urlify(name)}>
        <MDBCard className="walk-card">
          <MDBCardImage
            className="cutter img-fluid"
            src={imgSrc}
            alt={name}
            waves
          />
          <MDBCardBody>
            <MDBCardTitle>{city}</MDBCardTitle>
            <MDBCardTitle className="display-font">{name}</MDBCardTitle>
            <MDBCardText>{description}</MDBCardText>
            <MDBBtn outline color="elegant" className="city-card-btn">
              Explore <GiWalkingBoot />
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </Link>
    </div>
  );
};

export default WalkCard;