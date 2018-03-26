# demo shopping react
- public site: reactjs
- admin site: reactjs
- web api: nodejs
- database: ?

---------------------------------------------------------------------------------
react js + webpack + ES 6
- npm install  or  yarn install
- npm start


React's components life cycle:
- componentWillMount(): immediately before initial rendering
- componentDidMount(): immediately after initial rendering
- componentWillReceiveProps(): when component receive new props
- shouldComponentUpdate(): before rendering, after receiving new props or states
  can return false to prevent rendering
- componentWillUpdate(): before rendering, after receiving new props or states
- componentDidUpdate(): after component is updated and is flushed to DOM
- componentUnMount(): immediately before removing component from DOM