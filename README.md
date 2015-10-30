# FreezeView
holds all the style informations in a given point in time (and allows to reset them)

# Installation

```javascript
	npm install freeze-view
```

# Usage


```javascript
	var freeze = require("freeze-view");
```

Initializing the object looks like this:


```javascript
	var view = new freeze();
	
	// now the **view** object holds all the style information 

```

If you want to reset the view to its original state, you just evoke


```javascript
	view.set();
```


If you want to read in a modified view (ater having added a dom element for example), you evoke:

```javascript
	view.get();
```

Since freeze is an object, you can have multiple instances representing the state of the view in a given moment in time 


# Non npm usage

If you want to use **freeze-view** in a non-ppm environment, you can embed the library in your html-file as well:

```html
 	<script src="FreezeView.js"></script>
```

