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
        <slot name="prefix" />
        <slot />
        <slot name="suffix" />
      </Host>
    );
  }
}
