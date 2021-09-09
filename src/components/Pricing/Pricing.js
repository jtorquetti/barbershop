import React from 'react';
import { Button } from '../../globalStyles';
import { GiCrystalBars } from 'react-icons/gi';
import { GiBeard, GiHairStrands } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature
} from './Pricing.elements';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Our Services</PricingHeading>
          <PricingContainer>
            <PricingCard href={"https://wa.me/32479392893?text=I%20want%20to%20make%20an%20appointment"}>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiHairStrands />
                </PricingCardIcon>
                <PricingCardPlan>Hair cut</PricingCardPlan>
                <PricingCardCost>$20,00</PricingCardCost>
                <PricingCardLength>Styled hair cut</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Hair cut(including fade)</PricingCardFeature>
                  <PricingCardFeature>Hair hidratation</PricingCardFeature>
                  <PricingCardFeature>Hair massage</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Make an Appointment</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard href={"https://wa.me/32479392893?text=I%20want%20to%20make%20an%20appointment"}>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiBeard />
                </PricingCardIcon>
                <PricingCardPlan>Beard Treatment</PricingCardPlan>
                <PricingCardCost>$15,00</PricingCardCost>
                <PricingCardLength>American style</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Beard Groomingg</PricingCardFeature>
                  <PricingCardFeature>Beard Shaping</PricingCardFeature>
                  <PricingCardFeature>Shaves</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Make an Appointment</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard href={"https://wa.me/32479392893?text=I%20want%20to%20make%20an%20appointment"}>
              <PricingCardInfo>
                <PricingCardIcon>
                <GiHairStrands /><GiBeard />
                </PricingCardIcon>
                <PricingCardPlan>Hair & Beard</PricingCardPlan>
                <PricingCardCost>$30,00</PricingCardCost>
                <PricingCardLength>Special promotion</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Best seller</PricingCardFeature>
                  <PricingCardFeature>All treatments</PricingCardFeature>
                  <PricingCardFeature>Special treatment</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Make an Appointment</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;