# Form Validator
js form validator

## Example

```javascript
import { Validator } from './Validator';

const data = {
  name: ``,
  age: 23,
};

const fieldChecks = [
{
  name: `Name`,
  field: `name`
  check: `required`
},
{
  name: `Age`,
  field: `age`,
  check: `greatorThanZero`,
},
];
let errors = [];
//use the validator class
(new Validator(data, fieldChecks).validate()).then(() => {
  //successfull
}).catch(errors => {
  errors = errors;
});
