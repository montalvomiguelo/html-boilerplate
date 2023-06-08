import { counter, incCounter } from 'lib'
import { LitElement, html } from 'lit'

export class Counter extends LitElement {
  constructor () {
    super()
    incCounter()
    console.log(counter)
  }

  render () {
    return html`<div>${counter}</div>`
  }
}
customElements.define('my-counter', Counter)
