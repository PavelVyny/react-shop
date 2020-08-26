import React from "react";
import styled from "styled-components";
import { Row } from "react-bootstrap";

const Title = ({ title }) => {
	return (
		<TitleWrapper md="auto" className="justify-content-center mt-5">
			<h2>{title}</h2>
		</TitleWrapper>
	);
};

const TitleWrapper = styled(Row)`
	h2 {
		font-weight: bold;
		font-size: 48px;
		text-align: center;
	}
`;

export default Title;
