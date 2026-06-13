import styled from 'styled-components';
import colors from '../constants/colors';
import fontSizes from '../constants/fontsize';

const Eyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-size: ${fontSizes.xs};
  color: ${colors.gold};
  margin-bottom: 0.95rem;

  &::before {
    content: '';
    width: 2.25rem;
    height: 1px;
    background: ${colors.gold};
  }
`;

const Title = styled.h2`
  margin: 0;
  font-family: 'Playfair Display', serif;
  font-size: clamp(1.65rem, 3.2vw, 2.35rem);
  line-height: 1.2;
  color: ${({ $light }) => ($light ? colors.whitePure : colors.navy)};
`;

const Subtitle = styled.p`
  margin: 0.85rem 0 0;
  max-width: 40rem;
  font-size: ${fontSizes.md};
  line-height: 1.8;
  color: ${({ $light }) => ($light ? 'rgba(245, 245, 245, 0.6)' : colors.grayMid)};
`;

const SectionTitleWrap = styled.div`
  text-align: ${({ $align }) => ($align === 'left' ? 'left' : 'center')};
  /* narrower center width to match the source HTML */
  max-width: ${({ $align }) => ($align === 'left' ? '44rem' : '36rem')};
  margin: 0 auto ${({ $compact }) => ($compact ? '2rem' : '3rem')};
`;

export default function SectionTitle({ eyebrow, title, subtitle, align = 'center', compact = false, light = false }) {
  return (
    <SectionTitleWrap $align={align} $compact={compact}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <Title $light={light}>{title}</Title>
      {subtitle ? <Subtitle $light={light}>{subtitle}</Subtitle> : null}
    </SectionTitleWrap>
  );
}