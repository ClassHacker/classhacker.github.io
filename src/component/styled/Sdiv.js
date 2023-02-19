import styled, { keyframes } from 'styled-components';
import { merge, bounce, fadeInDown, fadeIn, zoomIn, flash, flipInX } from 'react-animations';

export const fadeInXZoomIn = merge(bounce, fadeIn)

export const Bounce = styled.div.attrs({})` animation: 2s ${keyframes `${bounce}`} infinite `;
export const FlipInX = styled.div.attrs({})` animation: 2s ${keyframes `${flipInX}`} infinite `;
export const FadeIn = styled.div.attrs({})` animation: 2s ${keyframes `${fadeIn}`} `;
export const ZoomIn = styled.div.attrs({})` animation: 2s ${keyframes `${zoomIn}`} `;
export const FadeInDown = styled.div.attrs({})` animation: 2s ${keyframes `${fadeInDown}`} `;
export const FadeInXZoomIn = styled.div.attrs({})` animation: 2s ${keyframes `${fadeInXZoomIn}`} infinite`;
export const Flash = styled.h1.attrs({})` animation: 5s ${keyframes `${flash}`}`;