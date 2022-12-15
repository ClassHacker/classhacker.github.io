import styled, { keyframes } from 'styled-components';
import { merge, bounce, fadeInDown, fadeIn, zoomIn, flash, flipInX } from 'react-animations';

const fadeInXZoomIn = merge(bounce, fadeIn)

const Bounce = styled.div.attrs({})` animation: 2s ${keyframes `${bounce}`} infinite `;
const FlipInX = styled.div.attrs({})` animation: 2s ${keyframes `${flipInX}`} infinite `;
const FadeIn = styled.div.attrs({})` animation: 2s ${keyframes `${fadeIn}`} `;
const ZoomIn = styled.div.attrs({})` animation: 2s ${keyframes `${zoomIn}`} `;
const FadeInDown = styled.div.attrs({})` animation: 2s ${keyframes `${fadeInDown}`} `;
const FadeInXZoomIn = styled.div.attrs({})` animation: 2s ${keyframes `${fadeInXZoomIn}`} infinite`;

export const Flash = styled.h1.attrs({})` animation: 5s ${keyframes `${flash}`}`;

export default FlipInX;