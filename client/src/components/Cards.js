import styled from 'styled-components';
import colors from '../constants/colors';
import fontSizes from '../constants/fontsize';
import bp from '../constants/breakpoints';

export const StatCard = styled.div`
  padding: 1.5rem 1.25rem;
  border: 1px solid rgba(201, 168, 76, 0.15);
  background: rgba(17, 32, 64, 0.9);
  border-radius: 0.9rem;
  min-width: 11rem;
  color: ${colors.whitePure};
  text-align: center;

  strong {
    display: block;
    font-family: 'Playfair Display', serif;
    font-size: 2.25rem;
    line-height: 1;
    color: ${colors.gold};
    margin-bottom: 0.35rem;
  }

  span {
    font-size: ${fontSizes.xs};
    text-transform: uppercase;
    letter-spacing: 0.16em;
    color: rgba(245, 245, 245, 0.8);
  }
`;

export const FeatureCard = styled.article`
  padding: 1.6rem 1.25rem;
  border-radius: 0.75rem;
  border: 1px solid rgba(201, 168, 76, 0.15);
  background: rgba(255, 255, 255, 0.05);
  color: ${colors.whitePure};
  min-height: 12rem;
  text-align: center;

  .icon {
    width: 3.4rem;
    height: 3.4rem;
    border-radius: 1rem;
    display: grid;
    place-items: center;
    background: rgba(201, 168, 76, 0.1);
    color: ${colors.gold};
    margin: 0 auto 1rem;
    font-size: 1.2rem;
  }

  h3 {
    margin: 0 0 0.6rem;
    font-family: 'Playfair Display', serif;
    font-size: 1rem;
    color: ${colors.whitePure};
  }

  p {
    margin: 0;
    font-size: 0.92rem;
    line-height: 1.65;
    color: rgba(245, 245, 245, 0.78);
  }

  @media (max-width: ${bp.mobile}) {
    padding: 1.25rem 1rem;
    min-height: 10.5rem;

    .icon {
      width: 3rem;
      height: 3rem;
      font-size: 1.05rem;
      margin-bottom: 0.85rem;
    }

    h3 {
      font-size: 0.95rem;
    }

    p {
      font-size: 0.86rem;
      line-height: 1.55;
    }
  }
`;

export const ContactCard = styled.article`
  padding: 1.5rem;
  border-radius: 1rem;
  background: ${colors.whitePure};
  border: 1px solid ${colors.grayLight};
  box-shadow: 0 16px 40px ${colors.shadowSoft};

  .label {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-size: ${fontSizes.xs};
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: ${colors.goldDark};
    margin-bottom: 0.8rem;
  }

  h3 {
    margin: 0 0 0.5rem;
    font-family: 'Playfair Display', serif;
    font-size: 1.1rem;
    color: ${colors.navy};
  }

  p {
    margin: 0;
    line-height: 1.7;
    white-space: pre-line;
    color: ${colors.grayMid};
  }
`;