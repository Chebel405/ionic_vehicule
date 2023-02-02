FROM mongo

# Définition du workdir
WORKDIR /app/component/

RUN npm install


COPY locataires / app/

# Exposition du port 8081
EXPOSE 8081

# Démarrage du serveur
CMD ["npm", "start"]

