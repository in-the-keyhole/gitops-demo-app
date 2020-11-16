# THIS IS NOT A PRODUCTION BUILD - JUST USED FOR DEMO EXAMPLE
FROM node:12-alpine as builder

WORKDIR /app

# Copy package.json
COPY package.json ./
COPY package-lock.json ./
# COPY yarn.lock ./
COPY ./tsconfig.json ./

# Install dependencies
RUN npm install
# RUN yarn

# Copy files
COPY ./src ./src
COPY ./public ./public

RUN npm run build --production
# RUN yarn build --production

FROM nginx
COPY --from=builder /app/build /usr/share/nginx/html
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
RUN sed -i.bak 's/^user/#user/' /etc/nginx/nginx.conf
RUN chmod g+rwx /var/cache/nginx /var/run /var/log/nginx

EXPOSE 8080