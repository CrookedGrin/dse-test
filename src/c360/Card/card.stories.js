import { fragmentFrom } from 'elix/src/core/htmlLiterals'
import docs from './docs.mdx'

export default {
  title: 'C360 Components/Card',
  parameters: {
    docs: {
      page: docs
    }
  }
}

export const BasicCopy = () => {
  return fragmentFrom.html`
  <div style="max-width: 400px;">
    <c360-card 
      title="Basic title" 
      img="https://www.placecage.com/400/300"
      alt="Alternate text"
      cta="Don't click"
    >
      Gain alignment. Turn the ship pull in ten extra bodies to help roll the tortoise, nor commitment to the cause yet back-end of third quarter we need distributors to evangelize the new line to local markets, nor UI. Herding cats reach out talk to the slides ladder up / ladder back to the strategy yet quick sync so finance that is a good problem to have.
    </c360-card>
  </div>
  `
}

export const HtmlCopy = () => {
  return fragmentFrom.html`
  <div style="max-width: 400px;">
    <c360-card 
      title="HTML content card" 
      img="https://www.placecage.com/399/300"
      alt="Alternate text"
      cta="Click me"
    >
      <p>Define the <a href="salesforce.com">underlying principles</a> that drive decisions and strategy for your design language and your work on this project has been <b>really impactful</b> bottleneck mice sorry i was triple muted.</p>
      <p>We need to dialog around your choice of work attire can we align on lunch orders, so not the long pole in my tent. Cross-pollination this is our north star design.</p>
    </c360-card>
  </div>
  `
}

export const LongTitle = () => {
  return fragmentFrom.html`
  <div style="max-width: 400px;">
    <c360-card 
      title="A very long title that wraps around to at least a second line" 
      img="https://www.placecage.com/399/300"
      alt="Alternate text"
      cta="Click me"
    >
      <p>Define the <a href="salesforce.com">underlying principles</a> that drive decisions and strategy for your design language and your work on this project has been <b>really impactful</b> bottleneck mice sorry i was triple muted.</p>
      <p>We need to dialog around your choice of work attire can we align on lunch orders, so not the long pole in my tent. Cross-pollination this is our north star design.</p>
    </c360-card>
  </div>
  `
}

export const NoImage = () => {
  return fragmentFrom.html`
  <div style="max-width: 400px;">
    <c360-card 
      title="Different title" 
      cta="Don't click"
    >
      Gain alignment. Turn the ship pull in ten extra bodies to help roll the tortoise, nor commitment to the cause yet back-end of third quarter we need distributors to evangelize the new line to local markets, nor UI. Herding cats reach out talk to the slides ladder up / ladder back to the strategy yet quick sync so finance that is a good problem to have.
    </c360-card>
  </div>
  `
}

export const Empty = () => {
  return fragmentFrom.html`
  <div style="max-width: 400px;">
    <c360-card />
  </div>
  `
}
