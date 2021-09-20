# ⌗ react-export-json-csv
A react component to easily Export csv of your json data and rearrange your headers column based on your UI tables order.
## Live Demo 
  Coming Soon

## Features
- Create a csv download from json data
- rearrange Headers
- Lightweight
- Easy to use
- optional filename

## Install

Install with npm:
```sh
npm i react-export-json-csv
```

## Example Usage
```jsx
import ExportJsonCsv from 'react-export-json-csv'
...

<ExportJsonCsv headers={headers} items={data}>Export  </ExportJsonCsv>
```

## Props

| Prop      | Type      | Requirement     | Default | Description                                         |
| --------- | --------- | ------------ | ------- | --------------------------------------------------- |
| headers     | `array`  | `required` | `null`  | array of objects             |
| items     | `array`  | `required` | `null`  | array of objects             |
| filename| `string`  | `optional` | "exported.csv"  | The complete filename          |
| style| `object`  | `optional` | `null`  | use react inline style          |

## Contributing

Please help provide good data faster! Submit any issues and/or make a pull request!