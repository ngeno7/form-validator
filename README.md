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
  //perform your request  in here
}).catch(errors => {
  errors = errors;
});
```

### Available field checks

1. **required** : Required field.
2. **confirmed** : Field that requires confirmation.
3. **greatorThanZero** : Field should be greator than zero eg: price, age
4. **ArrayHasItems** : Array if the length is greator than zero
5. **shouldContainAtmost2Letters** : custom validator to check if the string has at most 2 letters
