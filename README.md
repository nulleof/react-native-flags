# react-native-flags
Fun with flags (in React Native)!

Display flags in React Native with the help of [GoSquared](https://www.gosquared.com) - [2600 Flag Icon Set](https://www.gosquared.com/resources/flag-icons/).

This repository is a clone of [this repo](https://github.com/frostney/react-native-flags) but with reduced functionality.
All flags were removed except **16px flat** flags for smaller space impact. 

![](https://github.com/frostney/react-native-flags/blob/master/docs/flags.png)

### Usage
```javascript
import Flag from 'react-native-flags';

const JustAFlag = () =>
  <Flag
    code="DE"
    size={16}
  />
```

### Props  
#### code  
#### Type: `String`  
The ISO code of a flag, for example "DE", "FR" or "GB"

#### type  
#### Type: `String` (Allowed values: only `flat`, it is default and can be omitted)  

#### size  
#### Type: `number` (Allowed values: only `16` and can be omitted)  
#### Default value: `16`  
The size of a flag in points.

#### style (optional)  
Allows additional styles to be passed through.

### License
MIT
