FROM cypress/included:10.3.0
RUN mkdir /ui-tests
WORKDIR /ui-tests
COPY ./package.json ./package.json
COPY ./cypress.config.js ./cypress.config.js
COPY ./cypress ./cypress
RUN npm install