FROM mongo

# Définition du workdir
WORKDIR /app/component/

RUN npm install

COPY location / app/

# Exposition du port 8081
EXPOSE 8082

# Démarrage du serveur
CMD ["npm", "start"]

