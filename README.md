# React Hooks Blog
Minimal blogging site made using React and Firebase with the purpose to learn React Hooks and Firebase hosting.

### Tech Used:-
1. ReactJS for front-end
2. Firebase Cloud Firestore DB for storing post's data.
3. Firebase Hosting to deploy the site.

### Result SS
![image](https://github.com/msn2106/react-hook-blog/assets/56197385/c584e09b-84c2-4e82-b70d-f38b4041f0d5)

<hr>

# React Hooks

**Doc URL** :- https://react.dev/reference/react#state-hooks

## Built-in React Hooks

Hooks let you use different React features from your components. You can either use the built-in Hooks or combine them to build your own.

### State Hooks

**State lets a component “remember” information like user input**. For example, a form component can use state to store the input value, while an image gallery component can use state to store the selected image index.

To add state to a component, use one of these Hooks:

- useState declares a state variable that you can update directly.
- useReducer declares a state variable with the update logic inside a reducer function.

```javascript
function ImageGallery() {
  const [index, setIndex] = useState(0);
  // ...
}
```

### Context Hooks

**Context lets a component receive information from distant parents without passing it as props**. For example, your app’s top-level component can pass the current UI theme to all components below, no matter how deep.

- useContext reads and subscribes to a context.

```javascript
import { createContext } from "react";
const ThemeContext = createContext();
function Button() {
  const theme = useContext(ThemeContext);
  // ...
}
```

### Ref Hooks

**Refs let a component hold some information that isn’t used for rendering, like a DOM node or a timeout ID**. Unlike with state, updating a ref does not re-render your component. Refs are an “escape hatch” from the React paradigm. They are useful when you need to work with non-React systems, such as the built-in browser APIs.

- useRef declares a ref. You can hold any value in it, but most often it’s used to hold a DOM node.
- useImperativeHandle lets you customize the ref exposed by your component. This is rarely used.

```javascript
function Form() {
  const inputRef = useRef(null);
  // ...
}
```

### Effect Hooks

**Effects let a component connect to and synchronize with external systems**. This includes dealing with network, browser DOM, animations, widgets written using a different UI library, and other non-React code.

- useEffect connects a component to an external system.

```javascript
function ChatRoom({ roomId }) {
  useEffect(() => {
    const connection = createConnection(roomId);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]);
  // ...
}
```

**Note** :- Effects are an “escape hatch” from the React paradigm. Don’t use Effects to orchestrate the data flow of your application. If you’re not interacting with an external system, you might not need an Effect.

### Performance Hooks

A common way to optimize re-rendering performance is to skip unnecessary work. For example, you can tell React to reuse a cached calculation or to skip a re-render if the data has not changed since the previous render.

To skip calculations and unnecessary re-rendering, use one of these Hooks:

- useMemo lets you cache the result of an expensive calculation.
- useCallback lets you cache a function definition before passing it down to an optimized component.

```javascript
function TodoList({ todos, tab, theme }) {
  const visibleTodos = useMemo(() => filterTodos(todos, tab), [todos, tab]);
  // ...
}
```

Sometimes, you can’t skip re-rendering because the screen actually needs to update. In that case, you can improve performance by separating blocking updates that must be synchronous (like typing into an input) from non-blocking updates which don’t need to block the user interface (like updating a chart).
