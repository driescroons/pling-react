# 🔔 Pling

This is the official pling [Create React App](https://github.com/facebook/create-react-app) example. Checkout the official [package](https://github.com/driescroons/pling)/

## 👉 Implementation

Implemeting it is quite easy. First install it.

```
yarn add pling
```

Import the package

```
import notify from "pling";
```

Copy and paste the following where you'd like to log something.

```
 await notify({
    key: process.env.REACT_APP_PLING_API_KEY,
    title: "Pling from the package!",
    description: "👋 👋 👋 👋"
  });
```

Please make sure to set your **REACT_APP_PLING_API_KEY** environment variable. You can do so by creating a **.env** file in the root and specifying the following.

```
REACT_APP_PLING_API_KEY=YOUR_API_KEY_HERE
```
