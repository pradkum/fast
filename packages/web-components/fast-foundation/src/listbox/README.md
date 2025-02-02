---
id: listbox
title: fast-listbox
sidebar_label: listbox
custom_edit_url: https://github.com/microsoft/fast/edit/master/packages/web-components/fast-foundation/src/listbox/README.md
---

An implementation of a [listbox](https://www.w3.org/TR/wai-aria-practices-1.2/#Listbox). While any DOM content is permissible as a child of the listbox, only [`fast-option`](/docs/components/listbox-option) elements, `option` elements, and slotted items with `role="option"` will be treated as options and receive keyboard support.

The `listbox` component has no internals related to form association. For a form-associated `listbox`, see the [`fast-select` component](/docs/components/select).

## Setup

```ts
import {
    provideFASTDesignSystem,
    fastListbox,
    fastOption,
} from "@microsoft/fast-components";

provideFASTDesignSystem().register(fastListbox(), fastOption());
```

## Usage

```html live
<div>
    <label id="preferred-format">Preferred Format:</label>
    <br />
    <fast-listbox aria-labelledby="preferred-format" name="preferred-format">
        <fast-option value="vinyl">Vinyl Record</fast-option>
        <fast-option value="casette">Casette</fast-option>
        <fast-option value="cd">Compact Disc</fast-option>
        <fast-option value="digital">Digital</fast-option>
    </fast-listbox>
</div>
```

## Create your own design

### Listbox

```ts
import { Listbox, listboxTemplate as template } from "@microsoft/fast-foundation";
import { listboxStyles as styles } from "./my-listbox.styles";

export const myListbox = Listbox.compose({
    baseName: "listbox",
    template,
    styles,
});
```

### Option

See [listbox-option](/docs/components/listbox-option) for more information.

## API

## `src/listbox/listbox.element.ts`:

### class: `ListboxElement`

#### Superclass

| Name      | Module                  | Package |
| --------- | ----------------------- | ------- |
| `Listbox` | /src/listbox/listbox.js |         |

#### Static Fields

| Name                  | Privacy | Type | Default | Description                                         | Inherited From |
| --------------------- | ------- | ---- | ------- | --------------------------------------------------- | -------------- |
| `slottedOptionFilter` | public  |      |         | A static filter to include only selectable options. | Listbox        |

#### Static Methods

| Name      | Privacy | Description                                                                     | Parameters                      | Return                                                                                                           | Inherited From    |
| --------- | ------- | ------------------------------------------------------------------------------- | ------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ----------------- |
| `compose` | public  | Defines an element registry function with a set of element definition defaults. | `this: K, elementDefinition: T` | `(         overrideDefinition?: OverrideFoundationElementDefinition<T>     ) => FoundationElementRegistry<T, K>` | FoundationElement |

#### Fields

| Name               | Privacy   | Type                                  | Default | Description                                                                                                                                                                         | Inherited From    |
| ------------------ | --------- | ------------------------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `size`             | public    | `number`                              |         | The maximum number of options to display.                                                                                                                                           |                   |
| `length`           | public    | `number`                              |         | The number of options.                                                                                                                                                              | Listbox           |
| `options`          | public    | `ListboxOption[]`                     |         | The list of options.                                                                                                                                                                | Listbox           |
| `typeAheadExpired` | protected |                                       |         |                                                                                                                                                                                     | Listbox           |
| `disabled`         | public    | `boolean`                             |         | The disabled state of the listbox.                                                                                                                                                  | Listbox           |
| `multiple`         | public    | `boolean`                             |         | Indicates if the listbox is in multi-selection mode.                                                                                                                                | Listbox           |
| `selectedIndex`    | public    | `number`                              | `-1`    | The index of the selected option.                                                                                                                                                   | Listbox           |
| `selectedOptions`  | public    | `ListboxOption[]`                     | `[]`    | A collection of the selected options.                                                                                                                                               | Listbox           |
| `$presentation`    | public    | `ComponentPresentation \| null`       |         | A property which resolves the ComponentPresentation instance for the current component.                                                                                             | FoundationElement |
| `template`         | public    | `ElementViewTemplate \| void \| null` |         | Sets the template of the element instance. When undefined, the element will attempt to resolve the template from the associated presentation or custom element definition.          | FoundationElement |
| `styles`           | public    | `ElementStyles \| void \| null`       |         | Sets the default styles for the element instance. When undefined, the element will attempt to resolve default styles from the associated presentation or custom element definition. | FoundationElement |

#### Methods

| Name                 | Privacy   | Description                                    | Parameters | Return | Inherited From    |
| -------------------- | --------- | ---------------------------------------------- | ---------- | ------ | ----------------- |
| `setSelectedOptions` | public    | Sets an option as selected and gives it focus. |            |        | Listbox           |
| `selectFirstOption`  | public    | Moves focus to the first selectable option.    |            | `void` | Listbox           |
| `templateChanged`    | protected |                                                |            | `void` | FoundationElement |
| `stylesChanged`      | protected |                                                |            | `void` | FoundationElement |

#### Attributes

| Name | Field | Inherited From |
| ---- | ----- | -------------- |
|      | size  | Listbox        |

<hr/>

### Exports

| Kind | Name             | Declaration    | Module                         | Package |
| ---- | ---------------- | -------------- | ------------------------------ | ------- |
| `js` | `ListboxElement` | ListboxElement | src/listbox/listbox.element.ts |         |

## `src/listbox/listbox.ts`:

### class: `Listbox`

#### Superclass

| Name                | Module                                        | Package |
| ------------------- | --------------------------------------------- | ------- |
| `FoundationElement` | /src/foundation-element/foundation-element.js |         |

#### Static Fields

| Name                  | Privacy | Type | Default | Description                                         | Inherited From |
| --------------------- | ------- | ---- | ------- | --------------------------------------------------- | -------------- |
| `slottedOptionFilter` | public  |      |         | A static filter to include only selectable options. |                |

#### Static Methods

| Name      | Privacy | Description                                                                     | Parameters                      | Return                                                                                                           | Inherited From    |
| --------- | ------- | ------------------------------------------------------------------------------- | ------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ----------------- |
| `compose` | public  | Defines an element registry function with a set of element definition defaults. | `this: K, elementDefinition: T` | `(         overrideDefinition?: OverrideFoundationElementDefinition<T>     ) => FoundationElementRegistry<T, K>` | FoundationElement |

#### Fields

| Name               | Privacy   | Type                                  | Default | Description                                                                                                                                                                         | Inherited From    |
| ------------------ | --------- | ------------------------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `length`           | public    | `number`                              |         | The number of options.                                                                                                                                                              |                   |
| `options`          | public    | `ListboxOption[]`                     |         | The list of options.                                                                                                                                                                |                   |
| `typeAheadExpired` | protected |                                       |         |                                                                                                                                                                                     |                   |
| `disabled`         | public    | `boolean`                             |         | The disabled state of the listbox.                                                                                                                                                  |                   |
| `multiple`         | public    | `boolean`                             |         | Indicates if the listbox is in multi-selection mode.                                                                                                                                |                   |
| `selectedIndex`    | public    | `number`                              | `-1`    | The index of the selected option.                                                                                                                                                   |                   |
| `selectedOptions`  | public    | `ListboxOption[]`                     | `[]`    | A collection of the selected options.                                                                                                                                               |                   |
| `$presentation`    | public    | `ComponentPresentation \| null`       |         | A property which resolves the ComponentPresentation instance for the current component.                                                                                             | FoundationElement |
| `template`         | public    | `ElementViewTemplate \| void \| null` |         | Sets the template of the element instance. When undefined, the element will attempt to resolve the template from the associated presentation or custom element definition.          | FoundationElement |
| `styles`           | public    | `ElementStyles \| void \| null`       |         | Sets the default styles for the element instance. When undefined, the element will attempt to resolve default styles from the associated presentation or custom element definition. | FoundationElement |

#### Methods

| Name                 | Privacy   | Description                                    | Parameters | Return | Inherited From    |
| -------------------- | --------- | ---------------------------------------------- | ---------- | ------ | ----------------- |
| `selectFirstOption`  | public    | Moves focus to the first selectable option.    |            | `void` |                   |
| `setSelectedOptions` | public    | Sets an option as selected and gives it focus. |            |        |                   |
| `templateChanged`    | protected |                                                |            | `void` | FoundationElement |
| `stylesChanged`      | protected |                                                |            | `void` | FoundationElement |

#### Attributes

| Name | Field    | Inherited From |
| ---- | -------- | -------------- |
|      | disabled |                |
|      | multiple |                |

<hr/>

### class: `DelegatesARIAListbox`

#### Fields

| Name                   | Privacy | Type                             | Default | Description                                                                    | Inherited From |
| ---------------------- | ------- | -------------------------------- | ------- | ------------------------------------------------------------------------------ | -------------- |
| `ariaActiveDescendant` | public  | `string`                         |         | See {@link https\://www\.w3.org/TR/wai-aria-1.2/#listbox} for more information |                |
| `ariaDisabled`         | public  | `"true" \| "false"`              |         | See {@link https\://www\.w3.org/TR/wai-aria-1.2/#listbox} for more information |                |
| `ariaExpanded`         | public  | `"true" \| "false" \| undefined` |         | See {@link https\://www\.w3.org/TR/wai-aria-1.2/#listbox} for more information |                |
| `ariaMultiSelectable`  | public  | `"true" \| "false" \| undefined` |         | See {@link https\://w3c.github.io/aria/#listbox} for more information          |                |

<hr/>

### Exports

| Kind | Name                   | Declaration          | Module                 | Package |
| ---- | ---------------------- | -------------------- | ---------------------- | ------- |
| `js` | `Listbox`              | Listbox              | src/listbox/listbox.ts |         |
| `js` | `DelegatesARIAListbox` | DelegatesARIAListbox | src/listbox/listbox.ts |         |


## Additional resources

- [Component explorer examples](https://explore.fast.design/components/fast-listbox)
- [Component technical specification](https://github.com/microsoft/fast/blob/master/packages/web-components/fast-foundation/src/listbox/listbox.spec.md)
- [W3C Component Aria Practices](https://www.w3.org/TR/wai-aria-practices-1.2/#Listbox)
