# Use official node image as the base image
FROM ubi8/nodejs-14 as build

USER root

RUN mkdir -p /app

# Set the working directory
WORKDIR /app

COPY . /app

RUN npm install

# Generate the build of the application
RUN npm run build

# Stage 2: Serve app with nginx server
FROM ubi8/nginx-118

COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=build /app/dist/sefin-env /usr/share/nginx/html

CMD nginx -g "daemon off;"
