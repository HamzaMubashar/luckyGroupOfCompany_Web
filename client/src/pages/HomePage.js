import { useEffect, useState } from "react";
import styled from "styled-components";
import colors from "../constants/colors";
import bp from "../constants/breakpoints";
import SectionTitle from "../components/SectionTitle";
import { FeatureCard, StatCard } from "../components/Cards";
import luckyLogo from "../assets/lucky-logo.png";

const pageStats = [
  { value: "4", label: "Business Divisions" },
  { value: "Expert", label: "Professional Team" },
  { value: "100+", label: "Trusted Partners" },
  { value: "100%", label: "Client Satisfaction" },
];

const companyCards = [
  {
    id: "01",
    title: "Lucky Builders and Development",
    accent: "🏗️",
    text: "Delivering high-quality construction, development, and project management solutions with a focus on innovation, quality, and customer satisfaction from residential to large commercial builds.",
    tags: [
      "Residential Construction",
      "Commercial Projects",
      "Real Estate",
      "Project Management",
    ],
    details: {
      heading: "Lucky Builders and Development",
      description:
        "A forward-focused construction and development company delivering dependable, design-led results for residential, commercial, and mixed-use projects. The detail content can be expanded later with official project-specific information.",
      coreServices: [
        "Turnkey Construction",
        "Project Planning",
        "Site Supervision",
        "Interior Fit-Out",
      ],
      whyChooseUs: [
        "Quality-first execution",
        "Transparent project delivery",
        "Experienced site management",
        "Scalable project support",
      ],
      missionVision: {
        mission:
          "Deliver construction work that is efficient, durable, and aligned with client expectations.",
        vision:
          "Become a trusted name for modern builds and long-term development partnerships.",
      },
      readyTitle: "Ready to start your next build?",
      readyText:
        "Share your project goals with us and we will shape the right plan, team, and execution path.",
    },
  },
  {
    id: "02",
    title: "Lucky Global Holdings Limited",
    accent: "📊",
    text: "A diversified holding company focused on strategic investments, business development, and long-term value creation across multiple industries through responsible management and financial planning.",
    tags: [
      "Strategic Investments",
      "Business Management",
      "Portfolio Development",
      "Corporate Holdings",
    ],
    details: {
      heading: "Lucky Global Holdings Limited",
      description:
        "A holdings platform designed to coordinate investments, business expansion, and governance across the group. This placeholder content is intentionally generic and can be replaced later with final company-approved copy.",
      coreServices: [
        "Investment Strategy",
        "Portfolio Oversight",
        "Business Growth Planning",
        "Holding Structure Management",
      ],
      whyChooseUs: [
        "Strategic leadership",
        "Long-term value orientation",
        "Measured decision making",
        "Multi-industry perspective",
      ],
      missionVision: {
        mission:
          "Create stable growth through disciplined investment and business stewardship.",
        vision:
          "Build a resilient holdings platform that supports the group’s long-term expansion.",
      },
      readyTitle: "Looking for strategic partnership?",
      readyText:
        "We can discuss an investment or growth opportunity once your details are ready.",
    },
  },
  {
    id: "03",
    title: "Eraj Global Trading SMC Pvt. Ltd.",
    accent: "🌍",
    text: "Providing reliable local and international trading solutions with professionalism and integrity — connecting markets through efficient import, export, sourcing, and procurement services.",
    tags: [
      "Import & Export",
      "Product Sourcing",
      "Procurement",
      "Supply Chain",
    ],
    details: {
      heading: "Eraj Global Trading SMC Pvt. Ltd.",
      description:
        "A trading and sourcing company focused on connecting markets with reliable procurement and supply support. Replace this content later with the official operational scope and market focus.",
      coreServices: [
        "Import & Export",
        "Global Sourcing",
        "Procurement Support",
        "Distribution Coordination",
      ],
      whyChooseUs: [
        "Responsive supply handling",
        "Trusted trade coordination",
        "Cross-border market understanding",
        "Reliable partner network",
      ],
      missionVision: {
        mission:
          "Deliver trade solutions that make procurement and distribution simpler for clients.",
        vision:
          "Become a preferred partner for seamless sourcing and international market access.",
      },
      readyTitle: "Need a trading partner?",
      readyText:
        "Send us your requirements and we will tailor a trading response around them.",
    },
  },
  {
    id: "04",
    title: "Lucky Global Traders",
    accent: "📦",
    text: "A dynamic trading company specializing in sourcing, procurement, and distribution of quality products across multiple industries with a trusted global supplier network and competitive pricing.",
    tags: [
      "Wholesale Supply",
      "B2B Trading",
      "Logistics Support",
      "Global Network",
    ],
    details: {
      heading: "Lucky Global Traders",
      description:
        "A trading arm built to move products efficiently across sourcing, supply, and distribution workflows. The placeholder copy can be refined later to match the final business brief.",
      coreServices: [
        "Wholesale Supply",
        "B2B Trading",
        "Supplier Coordination",
        "Logistics Support",
      ],
      whyChooseUs: [
        "Fast response cycles",
        "Practical market knowledge",
        "Supply chain reliability",
        "Flexible trading support",
      ],
      missionVision: {
        mission:
          "Deliver practical trading support that improves sourcing, supply, and distribution outcomes.",
        vision:
          "Grow into a dependable trading network recognized for speed and consistency.",
      },
      readyTitle: "Let’s trade with confidence.",
      readyText:
        "We can align pricing, supply, and logistics once your details are shared.",
    },
  },
  {
    id: "05",
    title: "Lucky Foundation",
    accent: "🌱",
    text: "Committed to education, healthcare, community development, and humanitarian support to create a brighter future for all.",
    tags: [
      "Education Support",
      "Healthcare Initiatives",
      "Community Development",
      "Humanitarian Relief",
    ],
    details: {
      heading: "Lucky Foundation",
      description:
        "Lucky Foundation is committed to education, healthcare, community development, and humanitarian support to create a brighter future for all. The content below is a clean placeholder structure that can be replaced later with the final foundation copy.",
      coreServices: [
        "Education Support",
        "Healthcare Initiatives",
        "Community Development",
        "Humanitarian Relief",
      ],
      whyChooseUs: [
        "Foundation ka mission",
        "Vision-driven support",
        "Values-based community work",
      ],
      about: {
        mission:
          "Serve communities through meaningful support that improves lives and expands opportunity.",
        vision:
          "Build a stronger society where care, access, and shared responsibility create lasting change.",
        values: ["Compassion", "Accountability", "Inclusion", "Sustainability"],
      },
      focusAreas: [
        "📚 Education Support",
        "🏥 Healthcare Initiatives",
        "🤝 Community Development",
        "🌱 Environmental Sustainability",
        "🆘 Emergency & Humanitarian Relief",
      ],
      impact: [
        "Beneficiaries served",
        "Projects completed",
        "Communities reached",
      ],
      currentProjects: ["Ongoing initiatives", "Upcoming programs"],
      getInvolved: ["Volunteer", "Partner with Us", "Donate"],
      contact: ["Email", "Phone", "Address", "Social Media Links"],
      readyTitle: "Support the Foundation mission.",
      readyText:
        "Join us in education, healthcare, and relief work through volunteering, partnership, or support.",
    },
  },
];

const DrawerOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 40;
  background: rgba(3, 8, 15, 0.66);
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  pointer-events: ${({ $open }) => ($open ? "auto" : "none")};
  transition: opacity 0.28s ease;
`;

const DrawerPanel = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 41;
  width: min(50vw, 760px);
  height: 100vh;
  background: linear-gradient(
    180deg,
    ${colors.sectionAlt} 0%,
    ${colors.whitePure} 22%,
    ${colors.sectionAlt} 100%
  );
  box-shadow: -24px 0 80px rgba(10, 22, 40, 0.24);
  transform: translateX(${({ $open }) => ($open ? "0" : "100%")});
  transition: transform 0.32s ease;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media (max-width: ${bp.lg}) {
    width: 100vw;
  }
`;

const DrawerHeader = styled.div`
  background: ${colors.navy};
  color: ${colors.whitePure};
  padding: 22px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  border-bottom: 1px solid rgba(201, 168, 76, 0.16);
  box-shadow: inset 0 -1px 0 rgba(201, 168, 76, 0.35);

  .eyebrow {
    font-size: 11px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: ${colors.gold};
    margin-bottom: 6px;
  }

  h3 {
    margin: 0;
    font-family: "Playfair Display", serif;
    font-size: 26px;
    line-height: 1.15;
  }

  button {
    width: 42px;
    height: 42px;
    border-radius: 999px;
    border: 1px solid rgba(201, 168, 76, 0.24);
    background: rgba(255, 255, 255, 0.06);
    color: ${colors.whitePure};
    cursor: pointer;
    font-size: 18px;
    flex-shrink: 0;
  }
`;

const DrawerBody = styled.div`
  padding: 22px 24px 28px;
  overflow-y: auto;
  display: grid;
  gap: 18px;
`;

const DrawerCard = styled.section`
  background: ${colors.whitePure};
  border: 1px solid ${colors.grayLight};
  border-radius: 18px;
  padding: 20px;
  box-shadow: 0 16px 34px rgba(10, 22, 40, 0.06);
  border-top: 3px solid rgba(201, 168, 76, 0.45);

  h4 {
    margin: 0 0 12px;
    font-family: "Playfair Display", serif;
    font-size: 18px;
    color: ${colors.navy};
  }

  p {
    margin: 0;
    color: #5e6470;
    line-height: 1.7;
    font-size: 14px;
  }
`;

// const DrawerSubCard = styled.div`
//   background: rgba(10, 22, 40, 0.03);
//   border: 1px solid rgba(201, 168, 76, 0.18);
//   border-radius: 16px;
//   padding: 16px;

//   h5 {
//     margin: 0 0 8px;
//     font-family: "Playfair Display", serif;
//     font-size: 16px;
//     color: ${colors.navy};
//   }

//   p {
//     margin: 0;
//     color: ${colors.grayMid};
//     font-size: 13px;
//     line-height: 1.65;
//   }
// `;

const ServiceList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;

  @media (max-width: ${bp.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const ServiceItem = styled.div`
  padding: 14px 16px;
  border-radius: 14px;
  background: rgba(10, 22, 40, 0.03);
  border: 1px solid rgba(201, 168, 76, 0.22);
  color: ${colors.navy};
  font-weight: 600;
  font-size: 13px;
`;

const BulletList = styled.ul`
  display: grid;
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    position: relative;
    padding-left: 18px;
    color: ${colors.grayMid};
    line-height: 1.65;
    font-size: 14px;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0.58em;
      width: 7px;
      height: 7px;
      border-radius: 999px;
      background: ${colors.gold};
    }
  }
`;

const MissionVisionGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;

  @media (max-width: ${bp.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const ReadyCard = styled.div`
  padding: 22px;
  border-radius: 18px;
  background: linear-gradient(
    135deg,
    ${colors.navy} 0%,
    ${colors.navyLight} 100%
  );
  color: ${colors.whitePure};
  border: 1px solid rgba(201, 168, 76, 0.16);

  h4 {
    color: ${colors.whitePure};
  }

  p {
    color: rgba(245, 245, 245, 0.68);
    margin-bottom: 18px;
  }

  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 12px 18px;
    border-radius: 999px;
    background: ${colors.gold};
    color: ${colors.navy};
    text-decoration: none;
    font-weight: 700;
    font-size: 13px;
  }
`;

const timelineItems = [
  {
    year: "Foundation",
    title: "Lucky Group Established",
    text: "The group was founded with a clear vision — to build a diversified, trusted business organization delivering value across multiple sectors.",
  },
  {
    year: "Early Growth",
    title: "Construction Division Launched",
    text: "Lucky Builders and Development commenced operations, establishing a reputation for quality craftsmanship and timely project delivery.",
  },
  {
    year: "Expansion",
    title: "Trading & Investments Added",
    text: "Eraj Global Trading and Lucky Global Holdings were established, expanding the group’s footprint into international markets and strategic investments.",
  },
  {
    year: "Today",
    title: "Four Pillars, One Vision",
    text: "With four strong subsidiaries operating in synergy, Lucky Group now serves clients across construction, investments, import/export, and global supply chains.",
  },
];

const advantageItems = [
  {
    icon: "🏆",
    title: "Excellence & Quality",
    text: "Every project and transaction is executed to the highest standards, with no compromise on quality or deliverable outcomes.",
  },
  {
    icon: "💡",
    title: "Innovation & Growth",
    text: "We embrace forward-thinking approaches and continuously innovate to deliver smarter, more efficient solutions for clients.",
  },
  {
    icon: "👥",
    title: "Experienced Professionals",
    text: "Our team brings deep sector expertise across construction, finance, and international trade to every engagement.",
  },
  {
    icon: "😊",
    title: "Customer Satisfaction",
    text: "Client satisfaction is our primary metric — we build lasting relationships through consistent, reliable service delivery.",
  },
];

const Page = styled.main`
  padding-top: 72px;
  overflow-x: hidden;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Section = styled.section`
  padding: 100px 5%;
  background: ${({ $variant }) => {
    if ($variant === "dark") return colors.navy;
    if ($variant === "cream") return colors.sectionAlt;
    return colors.whitePure;
  }};

  @media (max-width: ${bp.lg}) {
    padding: 70px 5%;
  }
`;

const HeroSection = styled.section`
  min-height: min(720px, calc(78vh - 72px));
  background: ${colors.navy};
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 82px 5% 56px;
  color: ${colors.whitePure};

  @media (max-width: ${bp.xxl}) {
    padding: 70px 5% 48px;
  }

  @media (max-width: ${bp.lg}) {
    min-height: auto;
    padding: 58px 5% 42px;
  }

  @media (max-width: ${bp.md}) {
    padding: 46px 4% 34px;
  }

  @media (max-width: ${bp.mobile}) {
    justify-content: center;
    text-align: center;
    padding: 40px 4% 30px;
  }

  @media (max-width: ${bp.xxs}) {
    padding: 34px 4% 24px;
  }
`;

const HeroPattern = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0.04;
  background-image:
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 60px,
      rgba(201, 168, 76, 1) 60px,
      rgba(201, 168, 76, 1) 61px
    ),
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 60px,
      rgba(201, 168, 76, 1) 60px,
      rgba(201, 168, 76, 1) 61px
    );
`;

const HeroGlow = styled.div`
  position: absolute;
  top: -200px;
  right: -200px;
  width: 600px;
  height: 600px;
  background: radial-gradient(
    circle,
    rgba(201, 168, 76, 0.12) 0%,
    transparent 70%
  );
  pointer-events: none;
`;

const HeroGlow2 = styled.div`
  position: absolute;
  bottom: -150px;
  left: -150px;
  width: 500px;
  height: 500px;
  background: radial-gradient(
    circle,
    rgba(26, 45, 79, 0.8) 0%,
    transparent 70%
  );
  pointer-events: none;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 700px;

  @media (max-width: ${bp.mobile}) {
    margin: 0 auto;
    max-width: 560px;
  }
`;

const HeroEyebrow = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 28px;

  span {
    font-size: 12px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: ${colors.gold};
    font-weight: 500;
  }

  @media (max-width: ${bp.mobile}) {
    justify-content: center;
    margin-bottom: 20px;

    span {
      font-size: 10px;
    }
  }
`;

const HeroEyebrowLine = styled.div`
  width: 40px;
  height: 2px;
  background: ${colors.gold};
`;

const HeroTitle = styled.h1`
  margin: 0 0 24px;
  font-family: "Playfair Display", serif;
  font-size: clamp(34px, 5vw, 58px);
  font-weight: 700;
  color: ${colors.whitePure};
  line-height: 1.1;

  em {
    color: ${colors.gold};
    font-style: normal;
  }

  @media (max-width: ${bp.mobile}) {
    margin-bottom: 16px;
    font-size: clamp(27px, 8vw, 34px);
    line-height: 1.18;
  }

  @media (max-width: ${bp.xxs}) {
    font-size: 26px;
  }
`;

const HeroSub = styled.p`
  margin: 0 0 44px;
  max-width: 580px;
  font-size: 14px;
  line-height: 1.8;
  color: rgba(245, 245, 245, 0.65);
  font-weight: 300;

  @media (max-width: ${bp.mobile}) {
    margin: 0 auto 26px;
    font-size: 12.5px;
    line-height: 1.65;
  }
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 64px;

  @media (max-width: ${bp.sm}) {
    flex-direction: column;
  }

  @media (max-width: ${bp.mobile}) {
    justify-content: center;
    margin-bottom: 34px;
  }
`;

const HeroButton = styled.a`
  display: inline-block;
  padding: 14px 32px;
  border-radius: 6px;
  border: 1.5px solid
    ${({ $ghost }) => ($ghost ? "rgba(201,168,76,0.5)" : "transparent")};
  background: ${({ $ghost }) => ($ghost ? "transparent" : colors.gold)};
  color: ${({ $ghost }) => ($ghost ? colors.gold : colors.navy)};
  text-decoration: none;
  font-weight: ${({ $ghost }) => ($ghost ? 500 : 600)};
  font-size: 14px;
  letter-spacing: 0.04em;
  transition: all 0.2s;

  &:hover {
    transform: translateY(-2px);
    background: ${({ $ghost }) =>
      $ghost ? "rgba(201,168,76,0.08)" : colors.goldLight};
    border-color: ${colors.gold};
  }

  @media (max-width: ${bp.mobile}) {
    padding: 11px 20px;
    font-size: 12px;
    letter-spacing: 0.03em;
  }

  @media (max-width: ${bp.sm}) {
    width: min(100%, 260px);
    margin: 0 auto;
  }
`;

const HeroStats = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 2fr));
  width: min(100%, 720px);
  gap: 1px;
  background: rgba(201, 168, 76, 0.15);
  border: 1px solid rgba(201, 168, 76, 0.15);
  border-radius: 10px;
  overflow: hidden;

  @media (max-width: ${bp.lg}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: ${bp.mobile}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    width: min(100%, 360px);
    margin: 0 auto;
  }

  /* compact overrides for StatCard inside hero to match HTML sizing */
  & > div {
    min-width: 0;
    padding: 0.85rem 0.9rem;
    background: rgba(17, 32, 64, 0.9);
  }

  & > div strong {
    font-family: "Playfair Display", serif;
    font-size: 1rem;
    color: ${colors.gold};
    margin-bottom: 6px;
  }

  & > div span {
    font-size: 11px;
    color: rgba(245, 245, 245, 0.7);
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  @media (max-width: ${bp.mobile}) {
    & > div {
      padding: 0.72rem 0.55rem;
    }

    & > div strong {
      font-size: 1rem;
      margin-bottom: 4px;
    }

    & > div span {
      font-size: 9.5px;
      letter-spacing: 0.04em;
      line-height: 1.25;
    }
  }

  @media (max-width: ${bp.xxs}) {
    width: 100%;

    & > div {
      padding: 0.7rem 0.45rem;
    }

    & > div strong {
      font-size: 0.96rem;
    }
  }
`;

const HeroVisual = styled.div`
  position: absolute;
  right: 5%;
  top: 50%;
  transform: translateY(-50%);
  width: 420px;
  opacity: 0.12;
  pointer-events: none;

  @media (max-width: ${bp.xxl}) {
    display: none;
  }
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 0.9fr 1fr;
  gap: 64px;
  align-items: center;

  @media (max-width: ${bp.lg}) {
    grid-template-columns: 1fr;
    gap: 50px;
  }
`;

const AboutVisual = styled.div`
  position: relative;
  width: min(100%, 390px);
  justify-self: center;

  @media (max-width: ${bp.lg}) {
    width: min(100%, 340px);
  }
`;

const AboutMain = styled.div`
  width: 100%;
  aspect-ratio: 4 / 5;
  background: ${colors.navy};
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AboutInner = styled.svg`
  width: 80%;
`;

const AboutOverlay = styled.div`
  position: absolute;
  bottom: -20px;
  right: -20px;
  width: 132px;
  height: 132px;
  background: ${colors.gold};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;
  text-align: center;

  strong {
    font-family: "Playfair Display", serif;
    font-size: 34px;
    font-weight: 700;
    color: ${colors.navy};
    line-height: 1;
  }

  span {
    font-size: 10px;
    color: ${colors.navyLight};
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  @media (max-width: ${bp.lg}) {
    bottom: -10px;
    right: 10px;
    width: 108px;
    height: 108px;

    strong {
      font-size: 28px;
    }
  }
`;

const AboutText = styled.div`
  & > div p {
    margin-top: 10px;
  }

  p {
    font-size: 15px;
    line-height: 1.7;
    color: #555;
    margin: 0 0 20px;
  }

  @media (max-width: ${bp.mobile}) {
    text-align: center;

    & > div {
      text-align: center;
      margin-bottom: 1rem;
    }

    & > div p {
      margin-left: auto;
      margin-right: auto;
      margin-top: 8px;
    }

    p {
      font-size: 12.5px;
      line-height: 1.6;
      margin: 0 auto 12px;
    }
  }
`;

const AboutFeatures = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-top: 32px;

  @media (max-width: ${bp.mobile}) {
    gap: 12px;
  }
`;

const AboutFeature = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;

  .icon {
    width: 36px;
    height: 36px;
    background: rgba(201, 168, 76, 0.12);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    color: ${colors.gold};
    font-size: 16px;
  }

  strong {
    display: block;
    font-size: 13px;
    font-weight: 600;
    color: ${colors.navy};
    margin-bottom: 2px;
  }

  span {
    font-size: 12px;
    color: #888;
  }
`;

const TimelineGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  max-width: 900px;
  margin: 0 auto;

  @media (max-width: ${bp.lg}) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const TimelineColumn = styled.div`
  position: relative;
  padding-left: 40px;

  &::before {
    content: "";
    position: absolute;
    left: 12px;
    top: 8px;
    bottom: 8px;
    width: 2px;
    background: rgba(201, 168, 76, 0.2);
  }

  &:last-child {
    padding-top: 40px;
  }
`;

const TimelineItem = styled.div`
  position: relative;
  margin-bottom: 44px;

  &::before {
    content: "";
    position: absolute;
    left: -40px;
    top: 4px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: ${colors.whitePure};
    border: 2px solid ${colors.gold};
  }

  &::after {
    content: "";
    position: absolute;
    left: -32px;
    top: 12px;
    width: 8px;
    height: 8px;
    background: ${colors.gold};
    border-radius: 50%;
  }

  .year {
    font-size: 11px;
    font-weight: 700;
    color: ${colors.gold};
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-bottom: 6px;
  }

  h3 {
    margin: 0 0 8px;
    font-family: "Playfair Display", serif;
    font-size: 18px;
    font-weight: 600;
    color: ${colors.navy};
  }

  p {
    margin: 0;
    font-size: 14px;
    color: #666;
    line-height: 1.7;
  }
`;

const CompaniesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 28px;

  @media (max-width: ${bp.lg}) {
    grid-template-columns: 1fr;
  }
`;

const CompanyCard = styled.article`
  background: ${colors.whitePure};
  border: 1px solid ${colors.grayLight};
  border-radius: 14px;
  padding: 36px 32px;
  position: relative;
  overflow: hidden;
  transition:
    transform 0.3s,
    box-shadow 0.3s,
    border-color 0.3s;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${colors.gold};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s;
  }

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 60px rgba(10, 22, 40, 0.1);
    border-color: rgba(201, 168, 76, 0.3);
  }

  &:hover::before {
    transform: scaleX(1);
  }

  .card-heading {
    display: flex;
    align-items: center;
    gap: 14px;
    margin-bottom: 16px;
    padding-right: 56px;
  }

  .icon {
    width: 56px;
    height: 56px;
    border-radius: 12px;
    background: rgba(10, 22, 40, 0.06);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    flex-shrink: 0;
  }

  .number {
    position: absolute;
    top: 28px;
    right: 28px;
    font-family: "Playfair Display", serif;
    font-size: 52px;
    font-weight: 700;
    color: ${colors.grayMid};
    opacity: 0.18;
    line-height: 1;
  }

  h3 {
    margin: 0;
    font-family: "Playfair Display", serif;
    font-size: 18px;
    font-weight: 700;
    color: ${colors.navy};
    line-height: 1.3;
  }

  @media (max-width: ${bp.mobile}) {
    padding: 30px 24px;

    .card-heading {
      gap: 12px;
      padding-right: 40px;
    }

    .icon {
      width: 48px;
      height: 48px;
      font-size: 18px;
    }

    h3 {
      font-size: 16px;
    }
  }

  p {
    margin: 0 0 20px;
    font-size: 13px;
    line-height: 1.75;
    color: #666;
  }
`;

const CompanyTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;

  span {
    font-size: 11px;
    padding: 4px 12px;
    background: rgba(201, 168, 76, 0.1);
    color: ${colors.goldDark};
    border-radius: 20px;
    font-weight: 500;
    letter-spacing: 0.02em;
  }
`;

const CompanyLink = styled.button`
  font-size: 13px;
  font-weight: 600;
  color: ${colors.success};
  letter-spacing: 0.04em;
  display: flex;
  align-items: center;
  gap: 6px;
  width: fit-content;
  margin: 0 auto;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;

  &:hover {
    gap: 10px;
  }
`;

const WhyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  @media (max-width: ${bp.xl}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${bp.sm}) {
    grid-template-columns: 1fr;
  }
`;

const MissionGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;

  @media (max-width: ${bp.lg}) {
    grid-template-columns: 1fr;
  }
`;

const MissionCard = styled.article`
  position: relative;
  padding: 52px 44px;
  border-radius: 16px;
  overflow: hidden;
  background: ${({ $variant }) =>
    $variant === "gold" ? colors.gold : colors.navy};
  color: ${({ $variant }) =>
    $variant === "gold" ? colors.navy : colors.whitePure};

  .bg-letter {
    position: absolute;
    top: -40px;
    right: -40px;
    font-family: "Playfair Display", serif;
    font-size: 120px;
    font-weight: 700;
    opacity: 0.06;
    line-height: 1;
    color: ${({ $variant }) =>
      $variant === "gold" ? colors.navy : colors.whitePure};
  }

  .label {
    font-size: 11px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    font-weight: 700;
    margin-bottom: 20px;
    color: ${({ $variant }) =>
      $variant === "gold" ? colors.navyLight : colors.gold};
  }

  h3 {
    margin: 0 0 20px;
    font-family: "Playfair Display", serif;
    font-size: 21px;
    font-weight: 700;
    line-height: 1.35;
  }

  p {
    margin: 0;
    font-size: 13px;
    line-height: 1.72;
    color: ${({ $variant }) =>
      $variant === "gold" ? "rgba(10,22,40,0.75)" : "rgba(245,245,245,0.65)"};
  }

  @media (max-width: ${bp.mobile}) {
    padding: 38px 24px;

    h3 {
      font-size: 20px;
      margin-bottom: 14px;
    }

    p {
      font-size: 13px;
      line-height: 1.62;
    }
  }
`;

const Footer = styled.footer`
  background: #07101f;
  padding: 48px 5% 0;

  @media (max-width: ${bp.mobile}) {
    padding-top: 36px;
  }
`;

const FooterGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto 34px;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 34px;

  @media (max-width: ${bp.xl}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${bp.md}) {
    grid-template-columns: 1fr;
  }
`;

const FooterBrand = styled.div`
  .logo {
    display: inline-flex;
    align-items: center;
    gap: 12px;
  }

  .mark {
    width: 42px;
    height: 42px;
    border-radius: 8px;
    object-fit: contain;
    display: block;
  }

  .text {
    display: flex;
    flex-direction: column;
  }

  .text span:first-child {
    font-family: "Playfair Display", serif;
    font-size: 16px;
    font-weight: 700;
    color: ${colors.whitePure};
  }

  .text span:last-child {
    font-size: 10px;
    color: ${colors.gold};
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  p {
    font-size: 14px;
    color: rgba(245, 245, 245, 0.45);
    line-height: 1.7;
    margin: 12px 0 0;
    max-width: 280px;
  }
`;

const FooterCol = styled.div`
  h4 {
    font-size: 12px;
    font-weight: 700;
    font-size: 22px;
    text-transform: uppercase;
    color: ${colors.gold};
    margin: 0 0 20px;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    margin-bottom: 12px;
  }

  a,
  p {
    font-size: 13.5px;
    color: rgba(245, 245, 245, 0.5);
    text-decoration: none;
    transition: color 0.2s;
    margin: 0;
  }

  a:hover {
    color: ${colors.gold};
  }
`;

// const FooterSocial = styled.div`
//   display: flex;
//   gap: 10px;
//   margin-top: 16px;
// `;

// const SocialBtn = styled.a`
//   width: 36px;
//   height: 36px;
//   border-radius: 8px;
//   background: rgba(255, 255, 255, 0.06);
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-size: 15px;
//   text-decoration: none;
//   transition: background 0.2s;

//   &:hover {
//     background: rgba(201, 168, 76, 0.2);
//   }
// `;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.07);
  padding: 18px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;

  p {
    font-size: 13px;
    color: rgba(245, 245, 245, 0.3);
    margin: 0;
  }

  a {
    color: ${colors.gold};
    font-size: 13px;
  }

  @media (max-width: ${bp.lg}) {
    flex-direction: column;
    text-align: center;
  }
    
`;

 


export default function HomePage() {
  const [activeCompany, setActiveCompany] = useState(null);

  useEffect(() => {
    document.body.style.overflow = activeCompany ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [activeCompany]);

  return (
    <Page>
      <HeroSection id="home">
        <HeroPattern />
        <HeroGlow />
        <HeroGlow2 />
        <HeroVisual aria-hidden="true">
          <svg viewBox="0 0 320 400" xmlns="http://www.w3.org/2000/svg">
            <rect width="320" height="400" fill="#0a1628" />
            <rect x="30" y="280" width="60" height="120" fill="#1a2d4f" />
            <rect x="100" y="220" width="60" height="180" fill="#1a2d4f" />
            <rect x="170" y="180" width="60" height="220" fill="#1a2d4f" />
            <rect x="240" y="240" width="50" height="160" fill="#1a2d4f" />
            <rect
              x="30"
              y="280"
              width="60"
              height="120"
              fill="none"
              stroke="#c9a84c"
              strokeWidth="1"
              opacity="0.4"
            />
            <rect
              x="100"
              y="220"
              width="60"
              height="180"
              fill="none"
              stroke="#c9a84c"
              strokeWidth="1"
              opacity="0.4"
            />
            <rect
              x="170"
              y="180"
              width="60"
              height="220"
              fill="none"
              stroke="#c9a84c"
              strokeWidth="1"
              opacity="0.4"
            />
            <rect
              x="240"
              y="240"
              width="50"
              height="160"
              fill="none"
              stroke="#c9a84c"
              strokeWidth="1"
              opacity="0.4"
            />
            <circle
              cx="160"
              cy="120"
              r="60"
              fill="none"
              stroke="#c9a84c"
              strokeWidth="1"
              opacity="0.2"
            />
            <circle
              cx="160"
              cy="120"
              r="40"
              fill="none"
              stroke="#c9a84c"
              strokeWidth="1"
              opacity="0.3"
            />
            <text
              x="160"
              y="132"
              textAnchor="middle"
              fontFamily="Playfair Display, serif"
              fontSize="28"
              fontWeight="700"
              fill="#c9a84c"
            >
              LG
            </text>
            <line
              x1="0"
              y1="400"
              x2="320"
              y2="400"
              stroke="#c9a84c"
              strokeWidth="2"
              opacity="0.5"
            />
          </svg>
        </HeroVisual>

        <HeroContent>
          <HeroEyebrow>
            <HeroEyebrowLine />
            <span>Diversified Business Group</span>
          </HeroEyebrow>
          <HeroTitle>
            Building <em>Excellence</em>
            <br />
            Across Industries
          </HeroTitle>
          <HeroSub>
            Lucky Group of Companies is a diversified organization delivering
            innovative solutions in construction, investments, trading, and
            business development — creating sustainable value and long-term
            growth.
          </HeroSub>
          <HeroButtons>
            <HeroButton href="#companies">Explore Companies</HeroButton>
            <HeroButton href="#about" $ghost>
              About Us
            </HeroButton>
          </HeroButtons>
          <HeroStats>
            {pageStats.map((item) => (
              <StatCard key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </StatCard>
            ))}
          </HeroStats>
        </HeroContent>
      </HeroSection>

      <Section id="about">
        <Container>
          <AboutGrid>
            <AboutVisual>
              <AboutMain>
                <AboutInner
                  viewBox="0 0 320 400"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="320" height="400" fill="#0a1628" />
                  <rect x="30" y="280" width="60" height="120" fill="#1a2d4f" />
                  <rect
                    x="100"
                    y="220"
                    width="60"
                    height="180"
                    fill="#1a2d4f"
                  />
                  <rect
                    x="170"
                    y="180"
                    width="60"
                    height="220"
                    fill="#1a2d4f"
                  />
                  <rect
                    x="240"
                    y="240"
                    width="50"
                    height="160"
                    fill="#1a2d4f"
                  />
                  <rect
                    x="30"
                    y="280"
                    width="60"
                    height="120"
                    fill="none"
                    stroke="#c9a84c"
                    strokeWidth="1"
                    opacity="0.4"
                  />
                  <rect
                    x="100"
                    y="220"
                    width="60"
                    height="180"
                    fill="none"
                    stroke="#c9a84c"
                    strokeWidth="1"
                    opacity="0.4"
                  />
                  <rect
                    x="170"
                    y="180"
                    width="60"
                    height="220"
                    fill="none"
                    stroke="#c9a84c"
                    strokeWidth="1"
                    opacity="0.4"
                  />
                  <rect
                    x="240"
                    y="240"
                    width="50"
                    height="160"
                    fill="none"
                    stroke="#c9a84c"
                    strokeWidth="1"
                    opacity="0.4"
                  />
                  <circle
                    cx="160"
                    cy="120"
                    r="60"
                    fill="none"
                    stroke="#c9a84c"
                    strokeWidth="1"
                    opacity="0.2"
                  />
                  <circle
                    cx="160"
                    cy="120"
                    r="40"
                    fill="none"
                    stroke="#c9a84c"
                    strokeWidth="1"
                    opacity="0.3"
                  />
                  <text
                    x="160"
                    y="132"
                    textAnchor="middle"
                    fontFamily="Playfair Display, serif"
                    fontSize="28"
                    fontWeight="700"
                    fill="#c9a84c"
                  >
                    LG
                  </text>
                  <line
                    x1="0"
                    y1="400"
                    x2="320"
                    y2="400"
                    stroke="#c9a84c"
                    strokeWidth="2"
                    opacity="0.5"
                  />
                </AboutInner>
              </AboutMain>
              <AboutOverlay>
                <strong>10+</strong>
                <span>
                  Years of
                  <br />
                  Excellence
                </span>
              </AboutOverlay>
            </AboutVisual>

            <AboutText>
              <SectionTitle
                align="left"
                compact
                eyebrow="About Us"
                title="A Legacy of Trust & Innovation"
                subtitle="Lucky Group of Companies is a diversified business group operating through specialized subsidiaries serving construction, investments, trade, and business development sectors across local and international markets."
              />

              <p>
                Through innovation, integrity, and excellence, the group is
                committed to delivering sustainable growth and long-term value
                for clients, partners, and stakeholders. Our approach combines
                global expertise with local understanding.
              </p>

              <AboutFeatures>
                <AboutFeature>
                  <span className="icon">🏗️</span>
                  <div>
                    <strong>Construction</strong>
                    <span>World-class builds</span>
                  </div>
                </AboutFeature>
                <AboutFeature>
                  <span className="icon">📈</span>
                  <div>
                    <strong>Investments</strong>
                    <span>Strategic growth</span>
                  </div>
                </AboutFeature>
                <AboutFeature>
                  <span className="icon">🌐</span>
                  <div>
                    <strong>Global Trade</strong>
                    <span>Worldwide reach</span>
                  </div>
                </AboutFeature>
                <AboutFeature>
                  <span className="icon">🤝</span>
                  <div>
                    <strong>Partnerships</strong>
                    <span>Long-term relations</span>
                  </div>
                </AboutFeature>
              </AboutFeatures>
            </AboutText>
          </AboutGrid>
        </Container>
      </Section>

      <Section $variant="cream">
        <Container>
          <SectionTitle
            eyebrow="Our Journey"
            title="Growth Through the Years"
            subtitle="From a focused vision to a diversified group, every milestone reflects our commitment to excellence and sustainable progress."
          />

          <TimelineGrid>
            <TimelineColumn>
              {timelineItems.slice(0, 2).map((item) => (
                <TimelineItem key={item.title}>
                  <div className="year">{item.year}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </TimelineItem>
              ))}
            </TimelineColumn>
            <TimelineColumn>
              {timelineItems.slice(2).map((item) => (
                <TimelineItem key={item.title}>
                  <div className="year">{item.year}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </TimelineItem>
              ))}
            </TimelineColumn>
          </TimelineGrid>
        </Container>
      </Section>

      <Section id="companies">
        <Container>
          <SectionTitle
            eyebrow="Group Companies"
            title="Our Business Subsidiaries"
            subtitle="Five specialized companies working in concert to deliver comprehensive solutions across construction, investment, global trade, and community support."
          />

          <CompaniesGrid>
            {companyCards.map((company) => (
              <CompanyCard key={company.id}>
                <div className="number">{company.id}</div>
                <div className="card-heading">
                  <div className="icon">{company.accent}</div>
                  <h3>{company.title}</h3>
                </div>
                <p>{company.text}</p>
                <CompanyTags>
                  {company.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </CompanyTags>
                <CompanyLink
                  type="button"
                  onClick={() => setActiveCompany(company)}
                >
                  Learn More →
                </CompanyLink>
              </CompanyCard>
            ))}
          </CompaniesGrid>
        </Container>
      </Section>

      <Section id="why" $variant="dark">
        <Container>
          <SectionTitle
            light
            eyebrow="Why Choose Us"
            title="The Lucky Group Advantage"
            subtitle="We combine global reach with local understanding, backed by experienced professionals who put client success at the heart of everything we do."
          />

          <WhyGrid>
            {advantageItems.map((item) => (
              <FeatureCard key={item.title}>
                <div className="icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </FeatureCard>
            ))}
          </WhyGrid>
        </Container>
      </Section>

      <Section $variant="cream">
        <Container>
          <SectionTitle eyebrow="Our Purpose" title="Vision & Mission" />

          <MissionGrid>
            <MissionCard>
              <div className="bg-letter">V</div>
              <div className="label">Our Vision</div>
              <h3>
                To become a trusted global business group creating sustainable
                growth.
              </h3>
              <p>
                We aspire to be recognized worldwide as a diversified business
                group that delivers excellence across every industry we operate
                in — setting benchmarks for quality, trust, and innovation that
                benefit clients, partners, and communities alike.
              </p>
            </MissionCard>
            <MissionCard $variant="gold">
              <div className="bg-letter">M</div>
              <div className="label">Our Mission</div>
              <h3>
                To provide innovative solutions and foster long-term
                relationships.
              </h3>
              <p>
                Our mission is to deliver innovative, reliable, and value-driven
                solutions across construction, investment, and trade — while
                contributing meaningfully to economic growth and community
                development through ethical business practices.
              </p>
            </MissionCard>
          </MissionGrid>
        </Container>
      </Section>

      <Footer>
        <FooterGrid>
          <FooterBrand>
            <a className="logo" href="#home" style={{ textDecoration: "none" }}>
             <span className="mark">  
              <img src={luckyLogo} alt="Lucky Group logo" />
              </span>
              <span className="text">
                <span>Lucky Group</span>
                <span>of Companies</span>
              </span>
            </a>
            <p>
              A diversified business group delivering excellence across
              construction, investments, and global trade. Building trust,
              creating value, and driving sustainable growth.
            </p>
            
          </FooterBrand>

          <FooterCol>
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#companies">Group Companies</a>
              </li>
              <li>
                <a href="#why">Why Choose Us</a>
              </li>
            </ul>
          </FooterCol>

          <FooterCol>
            <h4>Group Companies</h4>
            <ul>
              <li>
                <a href="#companies">Lucky Builders & Development</a>
              </li>
              <li>
                <a href="#companies">Lucky Global Holdings Ltd.</a>
              </li>
              <li>
                <a href="#companies">Eraj Global Trading SMC</a>
              </li>
              <li>
                <a href="#companies">Lucky Global Traders</a>
              </li>
              <li>
                <a href="#companies">Lucky Foundation</a>
              </li>
            </ul>
          </FooterCol>

          <FooterCol>
            <h4>Contact</h4>
            <ul>
              <li>
                <a href="tel:+923000000000">+92 331 4387915</a>
              </li>
              <li>
                <a href="mailto:info@luckygroup.com">
                  umair_shahzad41@yahoo.com
                </a>
              </li>
              <li>
                <p>13 BI-BII Ghalib Market Gulberg III, Lahore, Pakistan</p>
              </li>
              <li>
                <p>Mon-Sat, 8AM-10PM</p>
              </li>
            </ul>
          </FooterCol>
        </FooterGrid>

        <FooterBottom>
          <p>© 2026 Lucky Group of Companies. All Rights Reserved.</p>
          <p>Designed with excellence & care.</p>
        </FooterBottom>
      </Footer>

      <DrawerOverlay
        $open={Boolean(activeCompany)}
        onClick={() => setActiveCompany(null)}
      />

      <DrawerPanel $open={Boolean(activeCompany)} aria-hidden={!activeCompany}>
        {activeCompany ? (
          <>
            <DrawerHeader>
              <div>
                <div className="eyebrow">Group Company Details</div>
                <h3>{activeCompany.details.heading}</h3>
              </div>
              <button
                type="button"
                aria-label="Close company details"
                onClick={() => setActiveCompany(null)}
              >
                ×
              </button>
            </DrawerHeader>

            <DrawerBody>
              <DrawerCard>
                <h4>About {activeCompany.details.heading}</h4>
                <p>{activeCompany.details.description}</p>
              </DrawerCard>

              {activeCompany.details.about ? (
                <DrawerCard>
                  <h4>Our Values</h4>
                  <ServiceList style={{ marginTop: "0" }}>
                    {activeCompany.details.about.values.map((value) => (
                      <ServiceItem key={value}>{value}</ServiceItem>
                    ))}
                  </ServiceList>
                </DrawerCard>
              ) : null}

              {activeCompany.details.focusAreas ? (
                <DrawerCard>
                  <h4>Our Focus Areas</h4>
                  <BulletList>
                    {activeCompany.details.focusAreas.map((area) => (
                      <li key={area}>{area}</li>
                    ))}
                  </BulletList>
                </DrawerCard>
              ) : null}

              {activeCompany.details.impact ? (
                <DrawerCard>
                  <h4>Our Impact</h4>
                  <ServiceList>
                    {activeCompany.details.impact.map((item) => (
                      <ServiceItem key={item}>{item}</ServiceItem>
                    ))}
                  </ServiceList>
                </DrawerCard>
              ) : null}

              {activeCompany.details.currentProjects ? (
                <DrawerCard>
                  <h4>Current Projects</h4>
                  <BulletList>
                    {activeCompany.details.currentProjects.map((project) => (
                      <li key={project}>{project}</li>
                    ))}
                  </BulletList>
                </DrawerCard>
              ) : null}

              {activeCompany.details.getInvolved ? (
                <DrawerCard>
                  <h4>Get Involved</h4>
                  <ServiceList>
                    {activeCompany.details.getInvolved.map((item) => (
                      <ServiceItem key={item}>{item}</ServiceItem>
                    ))}
                  </ServiceList>
                </DrawerCard>
              ) : null}

              <DrawerCard>
                <h4>Core Services</h4>
                <ServiceList>
                  {(activeCompany.details.coreServices || []).map((service) => (
                    <ServiceItem key={service}>{service}</ServiceItem>
                  ))}
                </ServiceList>
              </DrawerCard>

              <DrawerCard>
                <h4>Why Choose Us</h4>
                <BulletList>
                  {(
                    activeCompany.details.whyChooseUs ||
                    activeCompany.details.about?.values ||
                    []
                  ).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </BulletList>
              </DrawerCard>

              <DrawerCard>
                <h4>Mission &amp; Vision</h4>
                <MissionVisionGrid>
                  <DrawerCard style={{ background: "rgba(10, 22, 40, 0.03)" }}>
                    <h4>Mission</h4>
                    <p>
                      {activeCompany.details.missionVision?.mission ||
                        activeCompany.details.about?.mission ||
                        "Mission details will be added here."}
                    </p>
                  </DrawerCard>
                  <DrawerCard
                    style={{ background: "rgba(201, 168, 76, 0.08)" }}
                  >
                    <h4>Vision</h4>
                    <p>
                      {activeCompany.details.missionVision?.vision ||
                        activeCompany.details.about?.vision ||
                        "Vision details will be added here."}
                    </p>
                  </DrawerCard>
                </MissionVisionGrid>
              </DrawerCard>

              <ReadyCard>
                <div
                  className="eyebrow"
                  style={{
                    color: colors.gold,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    fontSize: "11px",
                    marginBottom: "6px",
                  }}
                >
                  Ready to work with us
                </div>
                <h4>{activeCompany.details.readyTitle}</h4>
                <p>{activeCompany.details.readyText}</p>
                <a href="#about" onClick={() => setActiveCompany(null)}>
                  Talk to our team
                </a>
              </ReadyCard>
            </DrawerBody>
          </>
        ) : null}
      </DrawerPanel>
    </Page>
  );
}
