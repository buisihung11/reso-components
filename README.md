# reso-components

> MaterialUi + ReactHookForm + Pro-Components

[![NPM](https://img.shields.io/npm/v/reso-components.svg)](https://www.npmjs.com/package/reso-components) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Roadmap

- [ ] Basic form control InputText, InputNumber, Select, Radio, Checkbox,
- [ ] Basic form type with `onSubmit`
- [ ] Support `responsive` props

## Install

```bash
npm install --save reso-components
```

## Usage

```tsx
import React, { Component } from 'react'
import ResoForm, { ResoColumnType } from 'reso-components'

const COLUMNS: ResoColumnType[] = [
  {
    title: 'Title 1',
    name: 'state',
    valueType: 'select',
    width: 4,
    valueEnum: [
      { label: 'Select 1', value: 1 },
      { label: 'Select 2', value: 2 },
      { label: 'Select 3', value: 3 }
    ]
  },
  {
    title: 'Custom input',
    name: 'custom-input',
    width: 4,
    renderFormItem: ({ field }) => (
      <input
        type='week'
        placeholder='week'
        onChange={field.onChange}
        value={field.value}
      />
    )
  },
  {
    title: 'Title 3',
    name: 'createName',
    valueType: 'date',
    width: 12
  },
  {
    title: 'Title 3',
    name: 'createName',
    valueType: 'group',
    columns: [
      {
        title: 'Single checkbox',
        valueType: 'checkbox',
        name: 'single-checkbox',
        width: 4
      },
      {
        title: 'Multiple checkbox',
        valueType: 'radio',
        name: 'multiple-checkbox',
        width: 8,
        valueEnum: [
          {
            label: 'Car',
            value: 'car'
          },
          {
            label: 'Becylce',
            value: 'Becylce'
          }
        ]
      }
    ]
  },
  {
    title: 'Title 4',
    valueType: 'group',
    columns: [
      {
        title: 'Title 4-1',
        name: 'groupState',
        valueType: 'select',
        width: 2
      },
      {
        title: 'Title 4-2',
        width: 4,
        name: 'groupTitle'
      }
    ]
  }
]

class Example extends Component {
  render() {
    return <ResoForm
        columns={COLUMNS}
        onFinish={(values) => new Promise((res) => res(console.log(values)))}
      />
  }
}
```

## License

MIT © [buisihung11](https://github.com/buisihung11)
