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
import { ExportJsonCsv } from 'react-export-json-csv';
...
const headers = [
  {
    key: 'id',
    name: 'ID',
  },
  {
    key: 'fname',
    name: 'First Name',
  },
]

const data = [
  {
    id: '1',
    fname: 'John',
  },
  {
    id: '2',
    fname: 'Doe',
  },
]

...
<ExportJsonCsv headers={headers} items={data}>Export</ExportJsonCsv>
```

## Props

| Prop      | Type      | Requirement     | Default | Description                                         |
| --------- | --------- | ------------ | ------- | --------------------------------------------------- |
| headers     | `array`  | `required` | `null`  | array of objects             |
| items     | `array`  | `required` | `null`  | array of objects             |
| fileTitle| `string`  | `optional` | "exported.csv"  | The complete filename          |
| style| `object`  | `optional` | `null`  | use react inline style          |
| className| `string`  | `optional` | `null`  | use your existing class for button          |

## Contributing

Please help provide good data faster! Submit any issues and/or make a pull request!

## Source
Source[1] https://medium.com/@danny.pule/export-json-to-csv-file-using-javascript-a0b7bc5b00d2
Source[2] https://stackoverflow.com/questions/30993149/how-to-rearrange-csv-json-keys-columns-javascript
## Note
Arrange your header array to rearrage csv/json keys columns to your expected result.
headers array key must be the same wtih your items Object Keys in column.