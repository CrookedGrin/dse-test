import ReactiveElement from 'elix/src/core/ReactiveElement'
import { defaultState, render, setState, state, template } from 'elix/src/base/internal'
import { templateFrom, fragmentFrom } from 'elix/src/core/htmlLiterals.js'

import stylesheet from './card-group.css'

class C360CardGroup extends ReactiveElement {
  get title() {
    return this[state].title
  }

  set title(title) {
    this[setState]({title})
  }

  get [defaultState]() {
    return Object.assign(super[defaultState], {
      title: ''
    })
  }

  getHeadlineFragment(title) {
    return fragmentFrom.html`
      <c360-headline level="h1" size="x-large">
        <span class="title">${title}</span>
      </c360-headline>
    `
  }

  get [template]() {
    const { title } = this[state]
    const result = templateFrom.html`
    <style>
      ${stylesheet}
    </style>
    `

    if (title !== '') {
      const titleFragment = this.getHeadlineFragment(title)
      result.content.append(titleFragment)
    }

    result.content.append(fragmentFrom.html`<div class="group"><slot></slot></div>`)

    return result
  }

  [render](changed) {
    super[render](changed)

    if (changed.title) {
      const { title } = this[state]
      let titleElement = this.shadowRoot.querySelector('c360-headline')
      if (title !== '') {
        if (!titleElement) {
          titleElement = this.getHeadlineFragment(title)
          this.shadowRoot.insertBefore(titleElement, this.shadowRoot.firstChild)
        }
        titleElement.innerHTML = title;
      } else {
        if (titleElement) {
          this.shadowRoot.removeChild(titleElement)
        }
      }
    }
  }
}

export default C360CardGroup
