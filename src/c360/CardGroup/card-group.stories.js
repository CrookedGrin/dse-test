import { fragmentFrom } from 'elix/src/core/htmlLiterals'
import docs from './docs.mdx'

export default {
  title: 'C360 Components/Card Group',
  parameters: {
    docs: {
      page: docs
    }
  }
}

export const ThreeCards = () => {
  return fragmentFrom.html`
    <c360-card-group>
      <c360-card 
        title="Title attribute" 
        img="https://www.placecage.com/400/300"
        cta="Click me"
      >
        <p>Define the underlying principles that drive decisions and strategy for your design language and your work on this project has been really impactful bottleneck mice sorry i was triple muted.</p>
        <p>We need to dialog around your choice of work attire can we align on lunch orders, so not the long pole in my tent. Cross-pollination this is our north star design.</p>
      </c360-card>
      <c360-card 
        title="Second card" 
        img="https://www.placecage.com/399/300"
        alt="Alternate text"
        cta="Never click"
      >
        Gain alignment. Turn the ship pull in ten extra bodies to help roll the tortoise, nor commitment to the cause yet back-end of third quarter we need distributors to evangelize the new line to local markets, nor UI. Herding cats reach out talk to the slides ladder up / ladder back to the strategy yet quick sync so finance that is a good problem to have.<br /><br />Not a hill to die on product management breakout fastworks we can't hear you and mumbo jumbo T-shaped individual.
      </c360-card>
      <c360-card 
        title="Card with a very long title that wraps around to another line" 
        img="https://www.placecage.com/398/298"
        alt="Alternate text"
        cta="Click it or ticket"
      >
        Not enough bandwidth, so we need to have a Come to Jesus meeting with Phil about his attitude, or t-shaped individual anti-pattern or synergize productive mindfulness yet product launch.
      </c360-card>
    </c360-card-group>
  `
}

export const ThreeWithTitle = () => {
  return fragmentFrom.html`
    <c360-card-group title="Group title">
      <c360-card 
        title="Card title" 
        img="https://www.placecage.com/400/300"
        alt="Alternate text"
        cta="Click me"
      >
        <p>Define the underlying principles that drive decisions and strategy for your design language and your work on this project has been really impactful bottleneck mice sorry i was triple muted.</p>
        <p>We need to dialog around your choice of work attire can we align on lunch orders, so not the long pole in my tent. Cross-pollination this is our north star design.</p>
      </c360-card>
      <c360-card 
        title="Second card" 
        img="https://www.placecage.com/399/300"
        alt="Alternate text"
        cta="Never click"
      >
        Gain alignment. Turn the ship pull in ten extra bodies to help roll the tortoise, nor commitment to the cause yet back-end of third quarter we need distributors to evangelize the new line to local markets, nor UI. Herding cats reach out talk to the slides ladder up / ladder back to the strategy yet quick sync so finance that is a good problem to have.<br /><br />Not a hill to die on product management breakout fastworks we can't hear you and mumbo jumbo T-shaped individual.
      </c360-card>
      <c360-card 
        title="Card with a very long title that wraps around to another line" 
        img="https://www.placecage.com/398/298"
        alt="Alternate text"
        cta="Click it or ticket"
      >
        Not enough bandwidth, so we need to have a Come to Jesus meeting with Phil about his attitude, or t-shaped individual anti-pattern or synergize productive mindfulness yet product launch.
      </c360-card>
    </c360-card-group>
  `
}

export const MoreThanThree = () => {
  return fragmentFrom.html`
    <c360-card-group title="Group title">
      <c360-card 
        title="First card" 
        img="https://www.placecage.com/400/300"
        alt="Alternate text"
        cta="Click me"
      >
        <p>Define the underlying principles that drive decisions and strategy for your design language and your work on this project has been really impactful bottleneck mice sorry i was triple muted.</p>
        <p>We need to dialog around your choice of work attire can we align on lunch orders, so not the long pole in my tent. Cross-pollination this is our north star design.</p>
      </c360-card>
      <c360-card 
        title="Second card" 
        img="https://www.placecage.com/399/300"
        alt="Alternate text"
        cta="Never click"
      >
        Gain alignment. Turn the ship pull in ten extra bodies to help roll the tortoise, nor commitment to the cause yet back-end of third quarter we need distributors to evangelize the new line to local markets, nor UI. Herding cats reach out talk to the slides ladder up / ladder back to the strategy yet quick sync so finance that is a good problem to have.<br /><br />Not a hill to die on product management breakout fastworks we can't hear you and mumbo jumbo T-shaped individual.
      </c360-card>
      <c360-card 
        title="Third card" 
        img="https://www.placecage.com/398/298"
        alt="Alternate text"
        cta="Click it or ticket"
      >
        Not enough bandwidth, so we need to have a Come to Jesus meeting with Phil about his attitude, or t-shaped individual anti-pattern or synergize productive mindfulness yet product launch.
      </c360-card>
      <c360-card 
        title="Another card" 
        img="https://www.placecage.com/401/301"
        alt="Alternate text"
        cta="Click me"
      >
        <p>Define the underlying principles that drive decisions and strategy for your design language and your work on this project has been really impactful bottleneck mice sorry i was triple muted.</p>
        <p>We need to dialog around your choice of work attire can we align on lunch orders, so not the long pole in my tent. Cross-pollination this is our north star design.</p>
      </c360-card>
      <c360-card 
        title="Card with a very long title that wraps around to another line" 
        img="https://www.placecage.com/401/298"
        alt="Alternate text"
        cta="Click it or ticket"
      >
        Not enough bandwidth, so we need to have a Come to Jesus meeting with Phil about his attitude, or t-shaped individual anti-pattern or synergize productive mindfulness yet product launch.
      </c360-card>
      <c360-card 
        title="Card with a very long title that wraps around to another line" 
        img="https://www.placecage.com/402/300"
        alt="Alternate text"
        cta="Click it or ticket"
      >
        Not enough bandwidth, so we need to have a Come to Jesus meeting with Phil about his attitude, or t-shaped individual anti-pattern or synergize productive mindfulness yet product launch.
      </c360-card>
      <c360-card 
        title="Card with a very long title that wraps around to another line" 
        img="https://www.placecage.com/401/300"
        alt="Alternate text"
        cta="Click it or ticket"
      >
        Not enough bandwidth, so we need to have a Come to Jesus meeting with Phil about his attitude, or t-shaped individual anti-pattern or synergize productive mindfulness yet product launch.
      </c360-card>
    </c360-card-group>
  `
}

export const FewerThanThree = () => {
  return fragmentFrom.html`
    <c360-card-group title="Group title">
      <c360-card 
        title="Title attribute" 
        img="https://www.placecage.com/400/300"
        alt="Alternate text"
        cta="Click me"
      >
        <p>Define the underlying principles that drive decisions and strategy for your design language and your work on this project has been really impactful bottleneck mice sorry i was triple muted.</p>
        <p>We need to dialog around your choice of work attire can we align on lunch orders, so not the long pole in my tent. Cross-pollination this is our north star design.</p>
      </c360-card>
      <c360-card 
        title="Second card" 
        img="https://www.placecage.com/399/300"
        alt="Alternate text"
        cta="Never click"
      >
        Gain alignment. Turn the ship pull in ten extra bodies to help roll the tortoise, nor commitment to the cause yet back-end of third quarter we need distributors to evangelize the new line to local markets, nor UI. Herding cats reach out talk to the slides ladder up / ladder back to the strategy yet quick sync so finance that is a good problem to have.<br /><br />Not a hill to die on product management breakout fastworks we can't hear you and mumbo jumbo T-shaped individual.
      </c360-card>
    </c360-card-group>
  `
}

export const Empty = () => {
  return fragmentFrom.html`
    <c360-card-group />
  `
}

