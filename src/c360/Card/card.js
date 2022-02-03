import ReactiveElement from 'elix/src/core/ReactiveElement'
import { defaultState, render, setState, state, template } from 'elix/src/base/internal'
import { fragmentFrom, templateFrom } from 'elix/src/core/htmlLiterals.js'

import stylesheet from './card.css'

class C360Card extends ReactiveElement {

  get title() {
    return this[state].title
  }

  set title(title) {
    this[setState]({title})
  }

  get cta() {
    return this[state].cta
  }

  set cta(cta) {
    this[setState]({cta})
  }

  /** The c360 / SDS buttons don't appear to have any sort of callback prop, but that seems like a thing to add */
  // get callback() {
  //   return this[state].callback
  // }

  // set callback(callback) {
  //   this[setState]({callback})
  // }

  get img() {
    return this[state].img
  }

  set img(img) {
    this[setState]({img})
  }

  get alt() {
    return this[state].alt
  }

  set alt(alt) {
    this[setState]({alt})
  }

  get [defaultState]() {
    return Object.assign(super[defaultState], {
      title: 'NEEDS TITLE',
      cta: 'NEEDS CTA LABEL',
      img: '',
      alt: 'NEEDS ALT TEXT'
    })
  }

  get [template]() {
    const { title, cta, img, alt } = this[state]

    const cardTemplate = templateFrom.html`
    <style>
      ${stylesheet}
    </style>
    <c360-headline level="h1" size="small">
      <span class="title">${title}</span>
    </c360-headline>
    `

    if (img !== '') {
      cardTemplate.content.append(fragmentFrom.html`
        <img class="image" alt="${alt}" src="${img}"/>
      `)
    }

    cardTemplate.content.append(fragmentFrom.html`
        <span class="content"><slot></slot></span>
        <c360-button part="button" variant="brand">
          <span class="cta">${cta}</span>
        </c360-button>
    `)

    return cardTemplate
  }

  [render](changed) {
    super[render](changed)

    if (changed.title) {
      const { title } = this[state]
      const titleElement = this.shadowRoot.querySelector('.title')
      titleElement.innerHTML = title
    }

    if (changed.cta) {
      const { cta } = this[state]
      const ctaElement = this.shadowRoot.querySelector('.cta')
      ctaElement.innerHTML = cta
    }

    if (changed.img || changed.alt) {
      const { img, alt } = this[state]
      const oldImage = this.shadowRoot.querySelector('img')
      if (img !== '') {
        const newImage = document.createElement('img')
        newImage.classList.add('image')
        newImage.setAttribute('src', img)
        newImage.setAttribute('alt', alt)
        if (oldImage) {
          this.shadowRoot.insertBefore(newImage, oldImage)
          this.shadowRoot.removeChild(oldImage)
        } else {
          /* This seems fragile. What if we change the order of elements? But not sure what best practice would be. */
          const content = this.shadowRoot.querySelector('.content')
          this.shadowRoot.insertBefore(newImage, content)
        }
      } else {
        if (oldImage) {
          this.shadowRoot.removeChild(oldImage)
        }
      }
    }
  }

}

export default C360Card
