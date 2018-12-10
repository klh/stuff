# How to run and test

created with
node 10.8.3
npm 6.4.1
yarn 1.12.3

Build it:

```bash
yarn install && yarn run build
```


fire up 3 different terminals and run:

```bash
yarn run test
```

 * this wil start the jest + enzyme test to run through the test cases, I do not normally test components to death, but normally implement end-end testing to catch logic & implementation errors.
 * i believe in sanity and informed choice. Running snapshot testing of components can to a very large degree cover most test cases (that is if you create you components atomically)
 * Normally i'd implement a Visual Diff engine on top of Casper or another Headless browser to catch all Style regression and errors.

```bash
yarn run storybook
```

 * this will run and launch storybook - my prefered way of working with components as I'm a fan of Storybook Driven Development
 * In order to demonstrate how that works, i've exploded the component in a a few more subcomponents that is strictly necessary, and i've added a generic button you can examine as well

```bash
yarn run start
```

 * This will run the application as an isomorphic SSR application and launch 2 servers
    1 is the basic server of the client assets (your typical serve -s server)
    2 the other runs an express app that hydrates the react app in order to support the usecase of working without javascript
