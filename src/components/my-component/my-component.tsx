import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: false,
  scoped: true,
})
export class MyComponent {
  render() {
    return (
      <Host>
        <div class="some-fancy-styles" id="prefix-wrapper">
          <slot name="prefix" />
        </div>
        <slot />
        <div class="some-fancy-styles" id="suffix-wrapper">
          <slot name="suffix" />
        </div>
      </Host>
    );
  }
}
